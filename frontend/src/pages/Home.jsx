// frontend\src\pages\Home.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/Logo.png';
import { Bot, Coffee, Globe, Sparkles } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  function startAssistant() {
    navigate('/assistant');
  }

  function goMenu() {
    navigate('/menu');
  }

  return (
    <div className="relative h-full bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4">
      {/* HERO */}
      <div className="flex flex-col items-center justify-center pt-16 sm:pt-24 pb-16 text-center">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* LOGO */}
          <img
            src={logo}
            alt="Espresso Logo"
            className="w-32 sm:w-40 md:w-48 opacity-90"
          />

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
            ESPRESSO<span className="text-emerald-400">.NET</span>
          </h1>

          <p className="text-emerald-400 text-sm sm:text-lg font-mono tracking-widest uppercase">
            &lt; Coffee as a Service &gt;
          </p>

          <p className="max-w-xl text-gray-400 text-sm sm:text-base leading-relaxed">
            Explora nuestro menú de café o deja que un asistente inteligente te
            recomiende la bebida perfecta según tus gustos.
          </p>
        </motion.div>

        {/* BOTONES */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Assistant */}
          <motion.button
            onClick={startAssistant}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-4 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <Sparkles className="w-5 h-5 text-emerald-400 transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />

            <div className="text-left">
              <p className="text-xs text-emerald-400 font-mono">
                init_assistant.sh
              </p>
              <p className="font-semibold">Asistente IA</p>
            </div>
          </motion.button>

          {/* Menu */}
          <motion.button
            onClick={goMenu}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-4 px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <Coffee className="w-5 h-5 text-emerald-400 transition group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]" />

            <div className="text-left">
              <p className="text-xs text-emerald-400 font-mono">
                view_menu.json
              </p>
              <p className="font-semibold">Ver Menú</p>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* FEATURES */}
      <div className="max-w-4xl mx-auto mt-6 sm:mt-8 py-20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <div className="p-5 rounded-xl border border-white/10 bg-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Coffee className="w-4 h-4 text-emerald-400" />
            <h3 className="font-semibold">Menú dinámico</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Descubre bebidas clásicas y especiales con descripciones claras.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-white/10 bg-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="w-4 h-4 text-emerald-400" />
            <h3 className="font-semibold">Recomendaciones IA</h3>
          </div>
          <p className="text-gray-400 text-sm">
            El asistente analiza tus gustos y sugiere opciones ideales.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-white/10 bg-white/5">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-4 h-4 text-emerald-400" />
            <h3 className="font-semibold">Cultura del café</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Pregunta sobre granos, métodos y todo el mundo del café.
          </p>
        </div>
      </div>
    </div>
  );
}
