import { Instagram, Mail, MessageCircle, Linkedin } from "lucide-react";
import { socialLinks } from "@/data/site-data";
import Reveal from "./Reveal";

const contacts = [
  { label: "Instagram", href: socialLinks.instagram, icon: Instagram },
  { label: "Email", href: socialLinks.email, icon: Mail },
  { label: "WhatsApp", href: socialLinks.whatsapp, icon: MessageCircle },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl text-paper sm:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 max-w-md text-mist">
            Have an idea for a reel, a brand video, or a full edit? Send it
            over — I&apos;ll bring the result.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {contacts.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass flex flex-col items-center gap-3 rounded-xl px-4 py-8 text-center transition-colors hover:bg-white/10"
              >
                <Icon size={22} className="text-teal" />
                <span className="text-sm text-paper">{label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
