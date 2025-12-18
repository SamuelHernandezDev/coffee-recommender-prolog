import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function runPrologQuery(predicates) {
  return new Promise((resolve, reject) => {

    const prologFile = path.join(__dirname, "knowledge.pl");

    const prolog = spawn("swipl", ["-s", prologFile, "-g", "main", "-t", "halt"]);

    // enviar predicados al stdin de Prolog
    prolog.stdin.write(JSON.stringify(predicates));
    prolog.stdin.end();

    let output = "";
    let errorOutput = "";

    prolog.stdout.on("data", (data) => {
      output += data.toString();
    });

    prolog.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    prolog.on("close", () => {
      if (errorOutput) {
        reject(errorOutput);
      } else {
        try {
          resolve(JSON.parse(output));
        } catch {
          resolve([]);
        }
      }
    });
  });
}
