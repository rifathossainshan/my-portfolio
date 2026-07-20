import { profile, socials } from "../data/profile";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 pb-10 flex flex-wrap items-center justify-between gap-4">
      <p className="font-mono text-xs text-ink/40">
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
      </p>
      <div className="flex gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink/40 hover:text-blade transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
