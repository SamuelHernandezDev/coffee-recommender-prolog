// frontend\src\pages\Home.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import "../styles/globals/background.css";

export default function Home() {
  const navigate = useNavigate();

  function startAssistant() {
    navigate("/assistant");
  }

  return (
    <div
      className="
        relative min-h-[100dvh] 
        flex flex-col items-center justify-center
        text-center px-4 pb-16 md:pb-0
      "
    >

      {/* ---- VIDEO DE FONDO ---- */}
      <video 
        src="/videos/cafeteria.mp4"
        className="fixed inset-0 w-full h-[100dvh] min-h-[100dvh] object-cover"
        autoPlay 
        muted 
        loop 
        playsInline 
      />

      {/* ---- OVERLAY DESDE CSS ---- */}
      <div className="bg-overlay" />
      <div className="bg-bottom-fade"></div>

      {/* ---- CÍRCULOS DE COLOR ---- */}
      <div
        className="
          absolute top-20 left-10 w-72 h-72 
          bg-amber-300 rounded-full 
          mix-blend-multiply filter blur-3xl opacity-30 
          -z-10
        "
      />

      <div
        className="
          absolute bottom-20 right-10 w-72 h-72 
          bg-emerald-300 rounded-full 
          mix-blend-multiply filter blur-3xl opacity-30 
          -z-10
        "
      />

      {/* ---- CONTENIDO ---- */}
      <div
        className="
          relative z-10 
          min-h-[80vh] 
          flex flex-col items-center justify-center 
          text-center px-4 pb-16 md:pb-0
        "
      >

        {/* ---- HERO ---- */}
        <div
          className="
            flex flex-col md:flex-row 
            items-center 
            gap-10 md:gap-20 
            mt-32 md:mt-10
          "
        >

          {/* ---- TÍTULOS ---- */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight drop-shadow-2xl">
              ESPRESSO<span className="text-emerald-300">.NET</span>
            </h1>

            <motion.p
              className="text-emerald-300 mt-2 text-sm sm:text-lg font-mono tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              &lt; Coffee as a Service &gt;
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
 
          <motion.button
            onClick={startAssistant}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.96 }}
            className="
              mx-auto
              flex items-center
              justify-center
              gap-4
              backdrop-blur-md
              bg-white/10
              px-10 py-6
              rounded-2xl
              text-white
              border border-white/20
              hover:bg-white/20
              hover:border-white/40
              transition-all
              group
              "
          >
            <span className="text-4xl group-hover:rotate-12 transition-transform">🤖</span> 
            <div className="text-left flex flex-col justify-center">
              <p className="text-[10px] sm:text-xs text-emerald-400 font-mono leading-none mb-1">init_assistant.sh</p>
              <p className="text-xl font-extrabold leading-none">
                Asistente Virtual
              </p>
            </div>
          </motion.button>

          <p className="text-gray-400 mt-4 text-sm font-mono">
            Analizando perfil de usuario para optimizar workflow...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
