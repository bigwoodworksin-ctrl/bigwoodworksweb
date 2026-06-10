import { projects } from "../../data/site";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeading } from "../ui/SectionHeading";

interface ProjectGridProps {
  limit?: number;
}

export function ProjectGrid({ limit }: ProjectGridProps) {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section className="section-pad bg-paper">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Rooms, furniture, and fittings built with quiet precision."
          text="A focused collection of custom woodwork projects across homes, studios, and commercial spaces."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
