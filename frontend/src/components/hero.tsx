import { useNavigate } from "react-router-dom";
import Bg0 from "../assets/heroImage.png";
import Bg1 from "../assets/bg1.jpg";
import Bg2 from "../assets/bg2.jpg";
import Bg3 from "../assets/bg3.jpg";
import Bg4 from "../assets/bg4.jpg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative grid md:grid-cols-2 min-h-screen">
      {/* Left — plain color, text content */}
      <div className="bg-paper flex flex-col justify-center px-8 md:px-16 py-32">
        <div className="ml-11" >

        <span className="font-mono text-xs uppercase tracking-widest text-coral">
          Built for personal 
        </span>

        <h1 className="font-display text-5xl md:text-6xl font-semibold text-ink mt-6 leading-[1.05]">
          Every client.
          <br />
          Every session.
          <br />
          <span className="text-coral">One place.</span>
        </h1>

        <p className="font-body text-ink/60 text-lg mt-6 max-w-md">
          Track clients, log sessions, and watch progress add up — without a
          spreadsheet in sight.
        </p>

        <div className="flex gap-4 mt-10">
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer font-mono text-sm uppercase tracking-wider bg-ink text-paper px-8 py-4 rounded-full hover:opacity-90 active:scale-95 transition"
          >
            Start free
          </button>
        </div>
        </div>
      </div>

      {/* Right — image placeholder, you'll swap this later */}
      {/* <img className="flex items-center justify-center" src={HeroImage} alt="" /> */}
      <img src={Bg3} alt="" className="w-full h-full object-cover" />
      {/* <div className="bg-sage/20 flex items-center justify-center border-l border-ink/10">
        <div className="border-2 border-dashed border-ink/20 rounded-2xl w-4/5 h-3/4 flex items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-wider text-ink/40">
          </span>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
