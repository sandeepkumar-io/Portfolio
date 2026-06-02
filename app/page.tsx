"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight as ArrowRightIcon,
  BrainCircuit as BrainIcon,
  BriefcaseBusiness as LinkedinIcon,
  Camera as CameraIcon,
  Code as CodeIcon,
  GitFork as GithubIcon,
  ImageUp as ImageSparkIcon,
  Layers as LayersIcon,
  Mail as MailIcon,
  RefreshCcw as RestoreIcon,
  Send as SendIcon,
  Sparkles as SparklesIcon,
  SquareTerminal as PromptIcon,
  UploadCloud as UploadIcon,
  Video as VideoIcon,
  WandSparkles,
  Workflow as AutomationIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import type { CSSProperties, FormEvent, ReactNode } from "react";

type ParticleStyle = CSSProperties & {
  "--x": string;
  "--y": string;
  "--delay": string;
  "--duration": string;
  "--size": string;
};

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

type ContactStatus = {
  message: string;
  type: "idle" | "success" | "error";
};

const initialContactForm: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

const services = [
  {
    title: "AI Video Generator",
    description:
      "Prompt-to-video interfaces with clean timelines, scene controls, and media previews.",
    icon: VideoIcon,
  },
  {
    title: "Image Cleaning & Enhancement",
    description:
      "Sharp, polished image workflows for clarity, color, upscaling, and detail recovery.",
    icon: ImageSparkIcon,
  },
  {
    title: "Background Removal",
    description:
      "Fast object-aware cutout experiences for creators, ecommerce, and social assets.",
    icon: LayersIcon,
  },
  {
    title: "AI Automation",
    description:
      "Connected creative systems that reduce repetitive work and keep teams moving.",
    icon: AutomationIcon,
  },
  {
    title: "Prompt Engineering",
    description:
      "Structured prompt systems for reliable video, image, content, and workflow outputs.",
    icon: PromptIcon,
  },
  {
    title: "Web App Development",
    description:
      "Responsive React and Next.js applications with modern UI, speed, and polish.",
    icon: CodeIcon,
  },
  {
    title: "Image Restoration",
    description:
      "Interfaces for repairing old, noisy, blurred, or damaged visuals with AI tools.",
    icon: RestoreIcon,
  },
  {
    title: "Smart Content Creation",
    description:
      "Creative AI pipelines for thumbnails, captions, social media, and branded assets.",
    icon: WandSparkles,
  },
];

const projects = [
  {
    title: "AI Video Generator Dashboard",
    description:
      "A cinematic creation dashboard for prompt writing, scene queues, previews, and exports.",
    tech: ["Next.js", "TypeScript", "AI APIs"],
    icon: VideoIcon,
  },
  {
    title: "Image Cleaner Web App",
    description:
      "A clean uploader with enhancement controls for denoise, sharpen, restore, and upscale.",
    tech: ["React", "Tailwind", "Image AI"],
    icon: ImageSparkIcon,
  },
  {
    title: "Background Remover Tool",
    description:
      "An intuitive cutout tool with before/after comparison and transparent export states.",
    tech: ["JavaScript", "Canvas", "Automation"],
    icon: LayersIcon,
  },
  {
    title: "AI Portfolio Builder",
    description:
      "A guided portfolio generator that transforms creative inputs into polished web sections.",
    tech: ["Next.js", "UX", "Prompts"],
    icon: BrainIcon,
  },
  {
    title: "Smart Media Upload System",
    description:
      "A media workflow for validation, metadata, previews, processing states, and storage.",
    tech: ["React", "Cloud", "Workflow"],
    icon: UploadIcon,
  },
  {
    title: "AI Content Automation Tool",
    description:
      "A repeatable automation setup for generating captions, visuals, and campaign assets.",
    tech: ["Automation", "AI Tools", "APIs"],
    icon: AutomationIcon,
  },
];

const experienceItems = [
  "Generate videos from text prompts",
  "Clean blurry or low-quality images",
  "Remove unwanted objects from photos",
  "Create AI-powered media workflows",
  "Automate repetitive creative tasks",
];

const profileStats = [
  ["7+", "Core Skills"],
  ["AI", "Creative Focus"],
  ["24/7", "Builder Mindset"],
];

const profileHighlights = [
  ["AI Media", "Video generation, image cleanup, and enhancement workflows"],
  ["Frontend", "Responsive React, Next.js, TypeScript, and polished UI systems"],
  ["Automation", "Smart creative pipelines that save time and reduce manual work"],
];

const particles = Array.from({ length: 32 }, (_, index) => ({
  x: `${(index * 29 + 11) % 100}%`,
  y: `${(index * 47 + 17) % 100}%`,
  delay: `${(index % 8) * 0.35}s`,
  duration: `${5 + (index % 6)}s`,
  size: `${3 + (index % 5)}px`,
}));

const navItems = [
  ["Profile", "#profile"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="aurora-shell" aria-hidden="true">
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />
      </div>

      <Header />

      <section className="relative flex min-h-screen items-center px-5 pt-28 pb-20 sm:px-8 lg:px-12">
        <ParticleField />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="relative z-10 max-w-3xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.18)] backdrop-blur">
              <SparklesIcon className="h-4 w-4" />
              AI tools, automation, and creative tech
            </div>
            <h1 className="reveal mt-7 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              AI Creative{" "}
              <span className="text-gradient block sm:inline">Portfolio</span>
            </h1>
            <p className="reveal mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Building smart AI-powered solutions for video generation, image
              cleaning, automation, and digital creativity.
            </p>
            <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row">
              <a className="glow-button primary" href="#projects">
                View Projects
                <ArrowRightIcon className="h-5 w-5" />
              </a>
              <a className="glow-button secondary" href="#contact">
                Contact Me
              </a>
            </div>
            <div className="reveal mt-10 grid max-w-xl grid-cols-3 gap-3">
              {profileStats.map(([value, label]) => (
                <div className="metric-card" key={label}>
                  <span>{value}</span>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="reveal relative z-10"
            initial={{ opacity: 0, scale: 0.92, rotateY: -8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <AiHeroVisual />
          </motion.div>
        </div>
      </section>

      <CandidateProfile />
      <Services />
      <Projects />
      <CreativeExperience />
      <About />
      <Contact />
    </motion.main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-4 sm:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <a className="flex items-center gap-3" href="#top" aria-label="Home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <BrainIcon className="h-5 w-5 text-cyan-200" />
          </span>
          <span className="hidden text-sm font-semibold tracking-[0.35em] text-slate-100 sm:block">
            SANDEEP.AI
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, href]) => (
            <a
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="nav-contact" href="#contact">
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((particle, index) => (
        <span
          className="particle"
          key={`${particle.x}-${particle.y}`}
          style={
            {
              "--x": particle.x,
              "--y": particle.y,
              "--delay": particle.delay,
              "--duration": particle.duration,
              "--size": particle.size,
            } as ParticleStyle
          }
        >
          {index % 6 === 0 ? "" : null}
        </span>
      ))}
    </div>
  );
}

function AiHeroVisual() {
  return (
    <div className="ai-visual" aria-label="Animated 3D AI visual">
      <div className="visual-grid" aria-hidden="true" />
      <div className="neural-orb">
        <div className="orb-ring ring-one" />
        <div className="orb-ring ring-two" />
        <div className="orb-ring ring-three" />
        <div className="brain-core">
          <BrainIcon className="h-20 w-20 text-cyan-100" />
        </div>
        <span className="node node-one" />
        <span className="node node-two" />
        <span className="node node-three" />
        <span className="node node-four" />
      </div>
      <FloatingVisualCard
        className="left-0 top-10"
        icon={<VideoIcon className="h-5 w-5" />}
        label="Text to Video"
      />
      <FloatingVisualCard
        className="right-0 top-24"
        icon={<ImageSparkIcon className="h-5 w-5" />}
        label="Image Enhance"
      />
      <FloatingVisualCard
        className="bottom-12 left-8"
        icon={<AutomationIcon className="h-5 w-5" />}
        label="Automation"
      />
      <FloatingVisualCard
        className="right-8 bottom-6"
        icon={<CameraIcon className="h-5 w-5" />}
        label="Clean Media"
      />
    </div>
  );
}

function FloatingVisualCard({
  className,
  icon,
  label,
}: {
  className: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className={`floating-visual-card ${className}`}>
      <span>{icon}</span>
      <p>{label}</p>
    </div>
  );
}

function CandidateProfile() {
  return (
    <Section id="profile" eyebrow="Candidate Profile" title="Frontend craft meets AI experimentation">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="candidate-photo-wrap"
          initial={{ opacity: 0, x: -36, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="candidate-photo tilt-card">
            <div className="avatar-glow" />
            <div className="portrait-shell">
              <Image
                alt="Sandeep Kumar professional AI portfolio portrait"
                className="candidate-image"
                fill
                sizes="(max-width: 768px) 82vw, 384px"
                src="/images/sandeep-kumar-ai-portrait.png"
              />
              <div className="portrait-shine" aria-hidden="true" />
            </div>
            <div className="photo-badge">
              <span />
              Available for AI frontend projects
            </div>
            <div className="portrait-nameplate">
              <p>Sandeep Kumar</p>
              <span>Frontend Developer & AI Tools Explorer</span>
            </div>
            <FloatingProfileIcon className="-left-2 top-12" label="AI" icon={<BrainIcon />} />
            <FloatingProfileIcon className="right-4 top-4" label="Video" icon={<VideoIcon />} />
            <FloatingProfileIcon className="-right-1 bottom-20" label="Image" icon={<ImageSparkIcon />} />
            <FloatingProfileIcon className="left-8 bottom-4" label="Code" icon={<CodeIcon />} />
            <FloatingProfileIcon className="left-1/2 top-0 -translate-x-1/2" label="Auto" icon={<AutomationIcon />} />
          </div>
        </motion.div>

        <motion.div
          className="glass-card profile-card tilt-card"
          initial={{ opacity: 0, x: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ y: -8, rotateX: 4, rotateY: -5, scale: 1.015 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Sandeep Kumar
          </p>
          <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Frontend Developer & AI Tools Explorer
          </h3>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I build polished, responsive product experiences for modern creative
            workflows. My focus is blending strong frontend engineering with
            practical AI tools for video, images, automation, and content systems.
          </p>
          <div className="profile-highlights">
            {profileHighlights.map(([title, description]) => (
              <div className="profile-highlight" key={title}>
                <span>{title}</span>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "AI Tools",
              "Video Generation",
              "Image Processing",
            ].map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function FloatingProfileIcon({
  className,
  icon,
  label,
}: {
  className: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <div className={`profile-float ${className}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Services() {
  return (
    <Section
      id="skills"
      eyebrow="Services / Skills"
      title="AI-powered creative capabilities"
      description="Focused service cards for video, image, automation, prompt systems, and web product engineering."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <FeatureCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({
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
      className="glass-card service-card tilt-card"
      initial={{ opacity: 0, y: 28, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ y: -8, rotateX: 4, rotateY: -5, scale: 1.015 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="icon-cube">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </motion.article>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Futuristic AI product showcases"
      description="Concept-driven project cards shaped around the kind of AI tools and creative workflows Sandeep builds."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({
  description,
  icon: Icon,
  index,
  tech,
  title,
}: {
  description: string;
  icon: LucideIcon;
  index: number;
  tech: string[];
  title: string;
}) {
  return (
    <motion.article
      className="glass-card project-card tilt-card"
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, rotateX: 4, rotateY: -5, scale: 1.015 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.055, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-preview">
        <div className="preview-orbit" />
        <div className="preview-window">
          <div className="preview-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-content">
            <Icon className="h-12 w-12 text-cyan-100" />
            <div className="preview-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span className="tech-badge" key={item}>
            {item}
          </span>
        ))}
      </div>
      <a className="project-link" href="#contact">
        View Project
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    </motion.article>
  );
}

function CreativeExperience() {
  return (
    <Section
      id="experience"
      eyebrow="3D Experience"
      title="Creative AI Experience"
      description="A holographic scene for the media workflows behind modern AI products."
    >
      <motion.div
        className="creative-stage"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="stage-core">
          <div className="stage-disc disc-one" />
          <div className="stage-disc disc-two" />
          <div className="stage-center">
            <SparklesIcon className="h-12 w-12 text-white" />
            <span>AI</span>
          </div>
        </div>
        <div className="experience-cards">
          {experienceItems.map((item, index) => (
            <motion.div
              className="experience-card tilt-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -5, scale: 1.015 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              key={item}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="Building practical AI interfaces with polish">
      <motion.div
        className="glass-card about-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <p>
          I am a frontend developer passionate about building clean, responsive,
          and AI-powered web applications. I enjoy working with React, Next.js,
          TypeScript, and modern UI tools to create useful products related to
          video generation, image processing, automation, and smart digital
          experiences.
        </p>
      </motion.div>
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState<ContactFormState>(initialContactForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<ContactStatus>({
    message: "",
    type: "idle",
  });

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "", type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const data = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(data?.message ?? "Message could not be sent.");
      }

      setForm(initialContactForm);
      setStatus({
        message:
          data?.message ??
          "Message sent successfully. I will get back to you soon.",
        type: "success",
      });
    } catch (error) {
      setStatus({
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build a smart creative product"
      description="Send a message about AI tools, media workflows, web apps, and creative automation. It will go directly to my inbox."
    >
      <motion.div
        className="contact-panel"
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="contact-glow" aria-hidden="true" />
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <label>
            <span>Name</span>
            <input
              autoComplete="name"
              minLength={2}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              placeholder="Your name"
              required
              type="text"
              value={form.name}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              autoComplete="email"
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              placeholder="you@example.com"
              required
              type="email"
              value={form.email}
            />
          </label>
          <label className="sm:col-span-2">
            <span>Message</span>
            <textarea
              minLength={10}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  message: event.target.value,
                }))
              }
              placeholder="Tell me about your AI product idea"
              required
              rows={5}
              value={form.message}
            />
          </label>
          <button
            className="glow-button primary sm:w-fit"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <SendIcon className="h-5 w-5" />
          </button>
          {status.type !== "idle" ? (
            <p aria-live="polite" className={`form-status ${status.type}`}>
              {status.message}
            </p>
          ) : null}
        </form>
        <div className="social-row">
          <a href="https://github.com/" aria-label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn">
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email">
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </Section>
  );
}

function Section({
  children,
  description,
  eyebrow,
  id,
  title,
}: {
  children: ReactNode;
  description?: string;
  eyebrow: string;
  id: string;
  title: string;
}) {
  return (
    <motion.section
      className="relative px-5 py-20 sm:px-8 lg:px-12"
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </motion.section>
  );
}
