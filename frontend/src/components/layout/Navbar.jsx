import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkBase =
    "px-2 py-1 text-sm font-semibold transition-all duration-300 relative";

  const linkInactive =
    "text-white/70 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]";

  const linkActive =
    "text-white text-base drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]";

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.92)_20%,rgba(0,0,0,0.75)_40%,rgba(0,0,0,0.45)_65%,rgba(0,0,0,0.15)_85%,rgba(0,0,0,0)_100%)]
        pt-4
        pb-20">
          
      <div className="max-w-5xl mx-auto px-[30px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo Espresso" className="w-10 h-10" />
          <div className="hidden md:flex text-2xl font-extrabold drop-shadow-lg">
            <span className="text-white">ESPRESSO</span>
            <span className="text-emerald-300">.NET</span>
          </div>
        </div>

       <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            Menú
          </NavLink>

        </div>
      </div>
    </nav>
  );
}
