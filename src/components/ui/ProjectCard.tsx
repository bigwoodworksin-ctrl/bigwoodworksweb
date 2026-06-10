import type { Project } from "../../data/site";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg bg-paper shadow-soft">
      <div className="aspect-[4/3] overflow-hidden bg-linen">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cedar">{project.category}</p>
        <h3 className="mt-3 text-2xl font-bold text-ink">{project.title}</h3>
        <p className="mt-3 leading-7 text-charcoal/75">{project.description}</p>
      </div>
    </article>
  );
}
