'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';

import styles from '@/styles/HomePage.module.css';

type Tech = {
  name: string;
  backgroundColor: string;
  color: string;
};

const technologies: Tech[] = [
  { name: 'JavaScript', backgroundColor: '#f7df1e', color: '#111111' },
  { name: 'TypeScript', backgroundColor: '#2f80ed', color: '#ffffff' },
  { name: 'Python', backgroundColor: '#f05a28', color: '#ffffff' },
  { name: 'Go', backgroundColor: '#1d7fd0', color: '#ffffff' },
  { name: 'Java', backgroundColor: '#c76aa6', color: '#ffffff' },
  { name: 'Shell Scripting', backgroundColor: '#56ccf2', color: '#111111' },
  { name: 'PyTorch', backgroundColor: '#7f56d9', color: '#ffffff' },
  { name: 'TensorFlow', backgroundColor: '#111111', color: '#ffffff' },
  { name: 'Node.js', backgroundColor: '#7dbf7a', color: '#ffffff' },
  { name: 'RAG', backgroundColor: '#bc6a4a', color: '#ffffff' },
  { name: 'RLHF', backgroundColor: '#eb5757', color: '#ffffff' },
  { name: 'vLLM', backgroundColor: '#5b8fb9', color: '#ffffff' },
  { name: 'LangChain', backgroundColor: '#7b4fd4', color: '#ffffff' },
  { name: 'VectorDBs', backgroundColor: '#00b4d8', color: '#ffffff' },
  { name: 'Kubernetes', backgroundColor: '#44c2f0', color: '#ffffff' },
  { name: 'Docker', backgroundColor: '#f39c2f', color: '#ffffff' },
  { name: 'AWS', backgroundColor: '#2eb9b6', color: '#ffffff' },
  { name: 'MLflow', backgroundColor: '#4caf50', color: '#ffffff' },
];

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    {
      code: "import { technologies } from '@/data/technologies';",
      type: 'import-statement',
    },
    { code: '', type: 'blank' },
    { code: 'const HomePage = () => {', type: 'function' },
    {
      code: '  const [isLoaded, setIsLoaded] = useState(true);',
      type: 'variable',
    },
    { code: '  const developerInfo = {', type: 'variable' },
    { code: "    name: 'Drashti Magia',", type: 'array-item' },
    { code: "    role: 'AI/ML Engineer',", type: 'array-item' },
    {
      code: "    bio: 'Building reliable, scalable AI systems with measurable production impact.'",
      type: 'array-item',
    },
    { code: '  };', type: 'array-end' },
    { code: '', type: 'blank' },
    { code: '  useEffect(() => {', type: 'nested-function' },
    {
      code: '    document.title = `${developerInfo.name} | Portfolio`;',
      type: 'return',
    },
    { code: '    setIsLoaded(true);', type: 'function-call' },
    { code: '  }, []);', type: 'close' },
    { code: '', type: 'blank' },
    { code: '  return (', type: 'return-object' },
    {
      code: '    <main className="hero-container">',
      type: 'object-method',
    },
    { code: '      <h1>{developerInfo.name}</h1>', type: 'object-method' },
    { code: '      <p>{developerInfo.role}</p>', type: 'object-method' },
    { code: '      <div className="cta">', type: 'object-method' },
    {
      code: '        <Link href="/projects">View Projects</Link>',
      type: 'object-method',
    },
    { code: '      </div>', type: 'object-method' },
    { code: '      <div className="tech-stack">', type: 'object-method' },
    {
      code: '        {technologies.map(tech => <span>{tech.name}</span>)}',
      type: 'object-method',
    },
    { code: '      </div>', type: 'object-method' },
    { code: '    </main>', type: 'object-method' },
    { code: '  );', type: 'close' },
    { code: '};', type: 'close-function' },
    { code: '', type: 'blank' },
    { code: 'export default HomePage;', type: 'function-call' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${
                      styles[line.type as keyof typeof styles]
                    } ${
                      index === activeLineIndex ? styles.highlightedLine : ''
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Drashti <span className={styles.accentText}>Magia</span>
          </h1>

          <div className={styles.developerRole}>AI/ML Engineer</div>

          <p className={styles.bio}>
            Building reliable, scalable AI systems with measurable production
            impact.
          </p>

          <div className={styles.actionLinks}>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>

          <div className={styles.techStack}>
            <h3 className={styles.techStackTitle}>
              Technologies I&apos;ve Worked With:
            </h3>
            <div className={styles.techBadges}>
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={styles.techBadge}
                  style={{
                    backgroundColor: tech.backgroundColor,
                    color: tech.color,
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{'{'}</div>
        <div className={styles.codeBlock2}>{'}'}</div>
        <div className={styles.codeBlock3}>{'<>'}</div>
        <div className={styles.codeBlock4}>{'/>'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'()'}</div>
        <div className={styles.codeSymbol2}>{'[]'}</div>
        <div className={styles.codeSymbol3}>{'=>'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}
