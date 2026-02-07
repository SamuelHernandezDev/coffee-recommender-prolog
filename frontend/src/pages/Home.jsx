import { useUserAnswers } from "../context/UserAnswersContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import "../styles/globals/background.css";

export default function Home() {
  const { setLevel } = useUserAnswers();
  const navigate = useNavigate();

  const selectLevel = (value) => {
    setLevel(value);
    navigate("/assistant");
  };

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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-xl">
              ESPRESSO<span className="text-emerald-300">.NET</span>
            </h1>

            <motion.p
              className="text-gray-100 mt-3 text-base sm:text-lg max-w-md mx-auto drop-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Elige tu nivel y déjate guiar por un barista virtual.
            </motion.p>
          </motion.div>
        </div>

        {/* ---- CARDS ---- */}
        <motion.div
          className="
            grid grid-cols-1 md:grid-cols-3 
            gap-6 
            mt-7 sm:mt-12 
            max-w-5xl 
            w-full
          "
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[ 
            { lvl: "beginner",     color: "text-amber-400", emoji: "☕", title: "Principiante", desc: "Empieza con lo básico del café." },
            { lvl: "intermediate", color: "text-emerald-300", emoji: "🌿", title: "Intermedio", desc: "Mejora técnicas y sabores." },
            { lvl: "expert",       color: "text-purple-300", emoji: "🔥", title: "Experto", desc: "Domina el arte del barismo." },
          ].map((item) => (
            <motion.div
              key={item.lvl}
              className="
                backdrop-blur-sm 
                bg-white/8
                p-4 sm:p-6 
                rounded-3xl 
                cursor-pointer

                shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
                border border-white/15

                hover:bg-white/25
                hover:shadow-[0_10px_45px_0_rgba(0,0,0,0.4)]
                hover:border-white/60

                transition-all duration-300
              "
              whileHover={{ scale: 1.07 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              onClick={() => selectLevel(item.lvl)}
            >
              <div className={`${item.color} text-4xl sm:text-6xl mb-4`}>
                {item.emoji}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md mb-2">
                {item.title}
              </h2>

              <p className="text-white/90 drop-shadow">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
