// backend/server.js
const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/prolog/recommend", async (req, res) => {
  try {
    const predicates = req.body.predicates || []; // array of strings like "strength(mild)"
    // spawn swipl
    const swipl = spawn("swipl", [
      "-q",
      "-s",
      "prolog/Knowledge.pl",  // ← ESTA ES LA RUTA CORRECTA
      "-g",
      "main",
      "-t",
      "halt."
    ]);    

    // collect stdout
    let out = "";
    let err = "";

    swipl.stdout.on("data", (data) => { out += data.toString(); });
    swipl.stderr.on("data", (data) => { err += data.toString(); });

    swipl.on("close", (code) => {
      if (err) {
        console.error("SWI-Prolog stderr:", err);
      }
      if (!out) {
        return res.status(500).json({ error: "No output from Prolog", stderr: err });
      }
      try {
        // Prolog prints JSON, parse it
        const result = JSON.parse(out);
        return res.json(result);
      } catch (e) {
        return res.status(500).json({ error: "Invalid JSON from Prolog", raw: out, stderr: err });
      }
    });

    // write JSON input to stdin of swipl
    const input = JSON.stringify({ predicates });
    swipl.stdin.write(input);
    swipl.stdin.end();
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Server listening on", PORT));
