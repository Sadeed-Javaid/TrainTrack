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
          <div className="hidden md:flex items-center gap-8 font-mono text-xs ml-19 uppercase tracking-wider text-ink">
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
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



// import { useEffect, useRef, useState, useLayoutEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../assets/mainLogo.png";

// function Navbar() {
//   const navigate = useNavigate();
//   const [scrolled, setScrolled] = useState(false);

//   const rowRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLButtonElement>(null);
//   const navLinksRef = useRef<HTMLDivElement>(null);
//   const authRef = useRef<HTMLDivElement>(null);

//   const [pillRect, setPillRect] = useState({ left: 0, width: 0 });   // wraps just nav links
//   const [fullRect, setFullRect] = useState({ left: 0, width: 0 });   // logo -> auth buttons
//   const [height, setHeight] = useState(0);

//   // measure element positions relative to the row container
//   const PILL_PADDING_X = 24;
// const PILL_PADDING_Y = 40;
// const FULL_PADDING_X = 24; // padding for the expanded (scrolled) state
// const FULL_PADDING_Y = 16; // extra height padding for expanded state, if needed

// const measure = () => {
//   if (!rowRef.current || !logoRef.current || !navLinksRef.current || !authRef.current) return;

//   const rowBox = rowRef.current.getBoundingClientRect();
//   const logoBox = logoRef.current.getBoundingClientRect();
//   const linksBox = navLinksRef.current.getBoundingClientRect();
//   const authBox = authRef.current.getBoundingClientRect();

//   setPillRect({
//     left: linksBox.left - rowBox.left - PILL_PADDING_X,
//     width: linksBox.width + PILL_PADDING_X * 2,
//   });

//   setFullRect({
//     left: logoBox.left - rowBox.left - FULL_PADDING_X,
//     width: (authBox.right - logoBox.left) + FULL_PADDING_X * 2,
//   });

//   setHeight(scrolled ? linksBox.height + FULL_PADDING_Y : linksBox.height + PILL_PADDING_Y);
// };

//   useLayoutEffect(() => {
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const active = scrolled ? fullRect : pillRect;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50">
//       <div
//         ref={rowRef}
//         className="relative max-w-[1650px] mx-auto flex items-center justify-between px-8 py-6"
//       >
//         {/* Expanding background layer */}
//         <div
//           className="absolute rounded-full bg-coral backdrop-blur-md shadow-sm transition-all duration-500 ease-out py-6"
//           style={{
//             left: `${active.left}px`,
//             width: `${active.width}px`,
//             height: `${height}px`,
//             top: "50%",
//             transform: "translateY(-50%)",
//           }}
//         />

//         {/* Logo */}
//         <button
//           ref={logoRef}
//           onClick={() => navigate("/")}
//           className="relative z-10 cursor-pointer"
//         >
//           <img className="w-50 h-15" src={Logo} alt="" />
//         </button>

//         {/* Nav links */}
//         <div
//           ref={navLinksRef}
//           className="relative z-10 hidden md:flex items-center gap-8 font-mono text-xs ml-19 uppercase tracking-wider text-ink"
//         >
//           <button
//             onClick={() => navigate("/")}
//             className="text-ink text-lg cursor-pointer hover:opacity-60 transition"
//           >
//             Home
//           </button>
//           <button className="text-ink text-lg cursor-pointer hover:opacity-60 transition">
//             Features
//           </button>
//           <button className="text-ink text-lg cursor-pointer hover:opacity-60 transition">
//             About us
//           </button>
//           <button className="text-ink text-lg cursor-pointer hover:opacity-60 transition">
//             Contact us
//           </button>
//         </div>

//         {/* Auth buttons */}
//         <div
//           ref={authRef}
//           className="relative z-10 flex items-center gap-3 px-3 py-2  bg-paper/90  backdrop-blur-md rounded-full"
//         >
//           <button
//             onClick={() => navigate("/login")}
//             className="cursor-pointer font-mono text-sm uppercase tracking-wider text-ink px-4 py-2 hover:opacity-70 transition"
//           >
//             Log in
//           </button>
//           <button
//             onClick={() => navigate("/signup")}
//             className="cursor-pointer font-mono text-sm uppercase tracking-wider bg-coral text-paper px-5 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition"
//           >
//             Sign up
//           </button>
//         </div>



        







        
        
//       </div>
//     </nav>
//   );
// }

// export default Navbar;