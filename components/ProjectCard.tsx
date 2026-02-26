import Image from 'next/image';
import { VscLinkExternal } from 'react-icons/vsc';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.number}>
        <span>{String(index).padStart(2, '0')}</span>
      </div>
      
      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.logoWrapper}>
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={18}
                height={18}
                className={styles.logo}
              />
            </div>
            <h3 className={styles.title}>{project.title}</h3>
          </div>
          
          <p className={styles.description}>
            <strong>Date</strong> {project.date}
          </p>
          <p className={styles.description}>
            <strong>Problem</strong> {project.problem}
          </p>
          <p className={styles.description}>
            <strong>Solution</strong> {project.solution}
          </p>
          <p className={styles.description}>
            <strong>Stack</strong> {project.techStack}
          </p>
          <p className={styles.description}>
            <strong>Impact</strong> {project.metrics}
          </p>
        </div>

        <div className={styles.action}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span>GitHub</span>
            <VscLinkExternal size={12} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <span>Demo</span>
            <VscLinkExternal size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
