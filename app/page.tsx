"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GitFork,
  Hand,
  Mail,
  Menu,
  Moon,
  MousePointerClick,
  Send,
  Sparkles,
  Sun,
  X,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type {
  CSSProperties,
  FormEvent,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";

type Theme = "dark" | "light";

type ContactFormState = {
  budget: string;
  email: string;
  message: string;
  name: string;
  service: string;
};

type ContactStatus = {
  message: string;
  type: "idle" | "success";
};

type FloatingStyle = CSSProperties & {
  "--delay": string;
  "--duration": string;
  "--x": string;
  "--y": string;
};

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
];

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "API Integration",
  "AI Tools",
];

const projects = [
  {
    description:
      "A premium landing and product interface for prompt-based AI video generation.",
    image: "/images/project-ai-video-generator.png",
    tech: ["Next.js", "TypeScript", "AI API"],
    title: "AI Video Generator Website",
  },
  {
    description:
      "A clean image repair workflow for enhancement, denoise, preview, and export states.",
    image: "/images/project-ai-image-cleaner.png",
    tech: ["React", "Canvas", "Tailwind CSS"],
    title: "AI Image Cleaner Tool",
  },
  {
    description:
      "A creator-focused background cleanup app with polished upload and comparison UI.",
    image: "/images/project-background-remover.png",
    tech: ["JavaScript", "Image AI", "UI Motion"],
    title: "Background Remover App",
  },
  {
    description:
      "A high-density real estate CMS dashboard for listings, leads, content, and admins.",
    image: "/images/project-real-estate-cms.png",
    tech: ["React", "Node.js", "MongoDB"],
    title: "Real Estate CMS Dashboard",
  },
  {
    description:
      "A responsive college website with modern sections, navigation, and clean content flow.",
    image: "/images/project-college-react.png",
    tech: ["React", "Tailwind CSS", "Forms"],
    title: "College Website using React",
  },
  {
    description:
      "A property posting dashboard with listing creation, media previews, and status views.",
    image: "/images/project-property-posting-dashboard.png",
    tech: ["Next.js", "API Integration", "Dashboard"],
    title: "Property Posting Dashboard",
  },
];

const services = [
  {
    description: "Modern React and Next.js interfaces with careful responsive behavior.",
    icon: Code2,
    title: "Frontend Development",
  },
  {
    description: "Premium AI-focused pages with cinematic visuals and practical user flows.",
    icon: Sparkles,
    title: "AI Website Design",
  },
  {
    description: "Operational dashboards for content, leads, analytics, and admin workflows.",
    icon: Database,
    title: "Dashboard Development",
  },
  {
    description: "Clean frontend connections to forms, AI services, media tools, and APIs.",
    icon: Zap,
    title: "API Integration",
  },
  {
    description: "Layouts that stay polished on mobile, tablet, desktop, and wide screens.",
    icon: BriefcaseBusiness,
    title: "Responsive UI Development",
  },
  {
    description: "High-converting product and service pages with strong visual hierarchy.",
    icon: Hand,
    title: "Landing Page Design",
  },
];

const blogPosts = [
  "Designing AI portfolio experiences with premium motion",
  "How to make dashboard interfaces feel simple and cinematic",
  "Building image and video tools that users understand quickly",
];

const floatingMarks = Array.from({ length: 14 }, (_, index) => ({
  delay: `${(index % 5) * 0.32}s`,
  duration: `${7 + (index % 4)}s`,
  x: `${(index * 37 + 9) % 100}%`,
  y: `${(index * 53 + 15) % 100}%`,
}));

const initialContactForm: ContactFormState = {
  budget: "",
  email: "",
  message: "",
  name: "",
  service: "",
};

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { damping: 28, stiffness: 180 });

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("sandeep-portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      window.requestAnimationFrame(() => setTheme(savedTheme));
    }
  }, []);

  function toggleTheme() {
    setTheme((current) => {
      const nextTheme = current === "dark" ? "light" : "dark";
      window.localStorage.setItem("sandeep-portfolio-theme", nextTheme);
      return nextTheme;
    });
  }

  return (
    <motion.main
      className={`portfolio-shell theme-${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <CursorGlow />
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
    </motion.main>
  );
}

function Header({
  onThemeToggle,
  theme,
}: {
  onThemeToggle: () => void;
  theme: Theme;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-pill">
        <a className="nav-brand" href="#home" aria-label="Home">
          <span className="nav-avatar">
            <Image
              alt=""
              src="/images/sandeep-kumar-ai-portrait.png"
              width={40}
              height={40}
            />
          </span>
          <span>Sandeep</span>
        </a>

        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle dark and light mode"
            onClick={onThemeToggle}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <MagneticAnchor className="contact-pill" href="#contact">
            Contact
          </MagneticAnchor>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <motion.div
          className="mobile-nav"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}

function HeroSection() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { damping: 26, stiffness: 120 });
  const springY = useSpring(pointerY, { damping: 26, stiffness: 120 });
  const imageX = useTransform(springX, [-1, 1], [-18, 18]);
  const imageY = useTransform(springY, [-1, 1], [-12, 12]);
  const rotateX = useTransform(springY, [-1, 1], [5, -5]);
  const rotateY = useTransform(springX, [-1, 1], [-7, 7]);
  const previewX = useTransform(springX, [-1, 1], [18, -18]);
  const previewY = useTransform(springY, [-1, 1], [12, -12]);

  function handlePointerMove(event: ReactMouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    pointerY.set((event.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      className="hero-section"
      id="home"
      onMouseLeave={handlePointerLeave}
      onMouseMove={handlePointerMove}
    >
      <FloatingMarks />
      <div className="laptop-frame" aria-hidden="true" />

      <motion.p
        className="hero-name"
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        SANDEEP KUMAR
      </motion.p>

      <motion.h1
        className="hero-word hero-word-left"
        initial={{ opacity: 0, y: 42, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        DIGITAL
      </motion.h1>

      <motion.h2
        className="hero-word hero-word-right"
        initial={{ opacity: 0, y: 42, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        DEVELOPER
      </motion.h2>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        I&apos;m a frontend developer building modern AI-powered web experiences.
      </motion.p>

      <motion.div
        className="hero-image-wrap"
        style={{ rotateX, rotateY, x: imageX, y: imageY }}
        initial={{ opacity: 0, y: 36, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          alt="Sandeep Kumar portfolio portrait"
          src="/images/sandeep-kumar-ai-portrait.png"
          fill
          loading="eager"
          sizes="(max-width: 768px) 78vw, 390px"
          className="hero-image"
        />
        <div className="image-card-caption">
          <span>Frontend Developer</span>
          <p>AI web experiences</p>
        </div>
      </motion.div>

      <MagneticAnchor
        ariaLabel="Go to projects"
        className="hero-orbit-button"
        href="#projects"
      >
        <MousePointerClick className="h-7 w-7" />
      </MagneticAnchor>

      <motion.div className="preview-card" style={{ x: previewX, y: previewY }}>
        <div className="preview-image">
          <Image
            alt=""
            src="/images/project-featured-ai-creative.png"
            fill
            sizes="190px"
          />
        </div>
        <span>Featured</span>
        <p>AI Creative Web Experience</p>
      </motion.div>

      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
      >
        <p>Design / Development / AI Tools</p>
        <h3>The only portfolio you need</h3>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section-band about-section" id="about">
      <div className="section-inner">
        <Reveal className="section-heading">
          <p className="section-eyebrow">About Me</p>
          <h2>ABOUT ME</h2>
        </Reveal>

        <div className="about-layout">
          <Reveal className="about-image-card">
            <Image
              alt="Sandeep Kumar portrait"
              src="/images/sandeep-kumar-ai-portrait.png"
              fill
              sizes="(max-width: 900px) 92vw, 430px"
              className="about-image"
            />
          </Reveal>

          <Reveal className="about-copy" delay={0.08}>
            <div className="mini-badge">
              <Hand className="h-4 w-4" />
              <span>Frontend Developer</span>
            </div>
            <h3>Sandeep Kumar builds refined digital experiences.</h3>
            <p>
              I am a frontend developer focused on modern, responsive, and
              AI-powered web products. I enjoy turning ideas into premium
              interfaces with strong typography, smooth motion, clean layouts,
              and reusable code that is easy to edit.
            </p>
            <div className="skill-cloud">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.04 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="section-band" id="projects">
      <div className="section-inner">
        <Reveal className="section-heading wide-heading">
          <p className="section-eyebrow">Projects</p>
          <h2>Selected work with cinematic product energy.</h2>
          <p>
            Large preview cards, premium hover states, and editable project data
            for the kind of AI, dashboard, and web experiences Sandeep builds.
          </p>
        </Reveal>

        <FeaturedProject />

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  return (
    <motion.article
      className="featured-project"
      initial={{ opacity: 0, y: 42, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        alt="AI Creative Web Experience abstract preview"
        src="/images/project-featured-ai-creative.png"
        fill
        sizes="(max-width: 900px) 92vw, 1180px"
        className="featured-image"
      />
      <div className="featured-content">
        <span>Neon Featured Project</span>
        <h3>AI CREATIVE WEB EXPERIENCE</h3>
        <MagneticAnchor className="featured-link" href="#contact">
          Discuss Project
          <ArrowUpRight className="h-4 w-4" />
        </MagneticAnchor>
      </div>
    </motion.article>
  );
}

function ProjectCard({
  description,
  image,
  index,
  tech,
  title,
}: {
  description: string;
  image: string;
  index: number;
  tech: string[];
  title: string;
}) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 34, rotateX: 7 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ y: -10, rotateX: 3, rotateY: -4, scale: 1.01 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.62, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-image">
        <Image
          alt={`${title} preview`}
          src={image}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1180px) 44vw, 360px"
          className="project-image-asset"
        />
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-row">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <MagneticAnchor className="project-link" href="#contact">
          View Project
          <ArrowUpRight className="h-4 w-4" />
        </MagneticAnchor>
      </div>
    </motion.article>
  );
}

function ServicesSection() {
  return (
    <section className="section-band" id="services">
      <div className="section-inner">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Services</p>
          <h2>Premium digital services for modern launches.</h2>
        </Reveal>

        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  description,
  icon: Icon,
  index,
  title,
}: {
  description: string;
  icon: LucideIcon;
  index: number;
  title: string;
}) {
  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.56, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="icon-tile">
        <Icon className="h-6 w-6" />
      </div>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
}

function BlogSection() {
  return (
    <section className="section-band" id="blog">
      <div className="section-inner">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Blog</p>
          <h2>Writing about design, AI products, and frontend systems.</h2>
        </Reveal>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              className="blog-card"
              key={post}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.52, delay: index * 0.05 }}
            >
              <span>0{index + 1}</span>
              <h3>{post}</h3>
              <a href="#contact" aria-label={`Discuss ${post}`}>
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(initialContactForm);
  const [status, setStatus] = useState<ContactStatus>({
    message: "",
    type: "idle",
  });

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({
      message: "Thanks. This visual form is ready for backend connection.",
      type: "success",
    });
    setForm(initialContactForm);
  }

  return (
    <section className="section-band contact-section" id="contact">
      <div className="section-inner">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Contact</p>
          <h2>LET&apos;S WORK TOGETHER</h2>
        </Reveal>

        <div className="contact-layout">
          <Reveal className="contact-image-card">
            <Image
              alt="Sandeep Kumar contact portrait"
              src="/images/sandeep-kumar-ai-portrait.png"
              fill
              sizes="(max-width: 900px) 92vw, 420px"
              className="contact-image"
            />
            <div className="contact-image-note">
              <Sparkles className="h-4 w-4" />
              <span>Available for premium frontend work</span>
            </div>
          </Reveal>

          <motion.form
            className="contact-form"
            onSubmit={handleContactSubmit}
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <FormField
              label="Name"
              name="name"
              onChange={(value) => setForm((current) => ({ ...current, name: value }))}
              placeholder="Your name"
              value={form.name}
            />
            <FormField
              label="Email"
              name="email"
              onChange={(value) => setForm((current) => ({ ...current, email: value }))}
              placeholder="you@example.com"
              type="email"
              value={form.email}
            />
            <FormField
              label="Service Interested"
              name="service"
              onChange={(value) => setForm((current) => ({ ...current, service: value }))}
              placeholder="Frontend, AI website, dashboard..."
              value={form.service}
            />
            <FormField
              label="Budget"
              name="budget"
              onChange={(value) => setForm((current) => ({ ...current, budget: value }))}
              placeholder="$1k - $5k"
              value={form.budget}
            />
            <label className="form-field full-field">
              <span>Message</span>
              <textarea
                minLength={8}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                placeholder="Tell me about the project"
                required
                rows={5}
                value={form.message}
              />
            </label>
            <MagneticButton className="submit-button" type="submit">
              Send Message
              <Send className="h-5 w-5" />
            </MagneticButton>
            {status.type === "success" ? (
              <p className="form-status" aria-live="polite">
                {status.message}
              </p>
            ) : null}
            <div className="social-row">
              <a href="https://github.com/" aria-label="GitHub">
                <GitFork className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn">
                <BriefcaseBusiness className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  onChange,
  placeholder,
  type = "text",
  value,
}: {
  label: string;
  name: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  value: string;
}) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input
        name={name}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required
        type={type}
        value={value}
      />
    </label>
  );
}

function FloatingMarks() {
  return (
    <div className="floating-marks" aria-hidden="true">
      {floatingMarks.map((mark, index) => (
        <span
          className={`floating-mark floating-mark-${index % 4}`}
          key={`${mark.x}-${mark.y}`}
          style={
            {
              "--delay": mark.delay,
              "--duration": mark.duration,
              "--x": mark.x,
              "--y": mark.y,
            } as FloatingStyle
          }
        />
      ))}
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.66, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { damping: 28, stiffness: 160 });
  const springY = useSpring(y, { damping: 28, stiffness: 160 });

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return <motion.div className="cursor-glow" style={{ x: springX, y: springY }} />;
}

function useMagneticMotion<TElement extends HTMLElement>(strength = 0.18) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 17, stiffness: 230 });
  const springY = useSpring(y, { damping: 17, stiffness: 230 });

  function handleMouseMove(event: ReactMouseEvent<TElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return {
    handleMouseLeave,
    handleMouseMove,
    style: { x: springX, y: springY },
  };
}

function MagneticAnchor({
  ariaLabel,
  children,
  className,
  href,
}: {
  ariaLabel?: string;
  children: ReactNode;
  className: string;
  href: string;
}) {
  const magnet = useMagneticMotion<HTMLAnchorElement>();

  return (
    <motion.a
      aria-label={ariaLabel}
      className={className}
      href={href}
      onMouseLeave={magnet.handleMouseLeave}
      onMouseMove={magnet.handleMouseMove}
      style={magnet.style}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

function MagneticButton({
  children,
  className,
  type,
}: {
  children: ReactNode;
  className: string;
  type: "button" | "submit";
}) {
  const magnet = useMagneticMotion<HTMLButtonElement>(0.14);

  return (
    <motion.button
      className={className}
      onMouseLeave={magnet.handleMouseLeave}
      onMouseMove={magnet.handleMouseMove}
      style={magnet.style}
      type={type}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
