import { useNavigate } from "react-router-dom";
import Logo from "../assets/mainLogo.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1650px] mx-auto flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-10">
          {/* Logo placeholder */}
          <button onClick={() => navigate("/")} className="cursor-pointer">
            <img className="w-50 h-15" src={Logo} alt="" />
          </button>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs ml-3 uppercase tracking-wider text-ink">
            <button
              onClick={() => navigate("/")}
              className="text-ink  text-lg cursor-pointer hover:opacity-60 transition"
            >
              Home
            </button>
            <button className="text-ink  text-lg cursor-pointer hover:opacity-60 transition">
              Features
            </button>
            <button className="text-ink   text-lg cursor-pointer hover:opacity-60 transition">
              About us
            </button>
            <button className="text-ink   text-lg cursor-pointer hover:opacity-60 transition">
              Contact us
            </button>
          </div>
        </div>

        {/* Auth buttons — sit over the image, so they get a background chip */}
        <div className="flex items-center gap-3 bg-paper/90  backdrop-blur-md rounded-full px-3 py-2 shadow-sm">
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer font-mono text-sm uppercase tracking-wider text-ink px-4 py-2 hover:opacity-70 transition"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer font-mono text-sm uppercase tracking-wider bg-coral text-paper px-5 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition"
          >
            Sign
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
