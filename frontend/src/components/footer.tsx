import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-coral" />
            <span className="font-display text-lg font-semibold text-paper">TrainTrack</span>
          </div>

          <div className="flex gap-6 font-mono text-xs uppercase tracking-wider text-paper/60">
            <button onClick={() => navigate('/login')} className="cursor-pointer hover:text-paper transition">
              Log in
            </button>
            <button onClick={() => navigate('/signup')} className="cursor-pointer hover:text-paper transition">
              Sign up
            </button>
            <a href="mailto:hello@traintrack.app" className="hover:text-paper transition">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-paper/10 mt-8 pt-6">
          <p className="font-mono text-xs text-paper/40">
            © {year} TrainTrack. Built for coaches who'd rather coach.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;