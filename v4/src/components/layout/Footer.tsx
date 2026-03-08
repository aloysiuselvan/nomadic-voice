export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="size-6 bg-primary rounded-sm"></div>
          <h2 className="text-sm font-black tracking-tighter uppercase">Nomadic <span className="text-primary">Voice</span></h2>
        </div>
        
        <p className="text-slate-500 text-sm">© 2024 Nomadic Voice Collective. All rights reserved.</p>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">radio</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">movie</span>
          </a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">public</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
