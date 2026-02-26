'use client';

import { VscGithub, VscMail, VscLinkExternal } from 'react-icons/vsc';
import Link from 'next/link';

import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerText}>
              <h1 className={styles.name}>Drashti Darshit Magia</h1>
              <p className={styles.role}>AI Engineer</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                San Jose, CA
              </div>
            </div>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href="https://github.com/drashtimagia" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          {/* Bio Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Aug 2024 to May 2026</span>
                </div>
                <h3 className={styles.expRole}>San Jose State University</h3>
                <p className={styles.expCompany}>
                  Master of Science in Artificial Intelligence &amp; Computer Science
                </p>
                <p className={styles.expCompany}>San Jose, California</p>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Aug 2020 to May 2024</span>
                </div>
                <h3 className={styles.expRole}>
                  Narsee Monjee Institute of Management Studies with Virginia Tech
                </h3>
                <p className={styles.expCompany}>
                  Bachelor of Technology in Artificial Intelligence
                </p>
                <p className={styles.expCompany}>Mumbai, Maharashtra</p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>May 2025 to Aug 2025</span>
                </div>
                <h3 className={styles.expRole}>AI ML Engineer</h3>
                <p className={styles.expCompany}>Infras formerly Ilife Technologies, San Francisco, CA</p>
                <ul className={styles.expList}>
                  <li>Architected distributed RAG pipeline processing 50M+ docs with 30% lower latency and 25% GPU cost reduction via batching, caching, and C++ inference kernel tuning</li>
                  <li>Built inference API with automated tests over 90% coverage and CI CD deployment enabling safe integration across 3 research teams</li>
                  <li>Designed observability and alerting improving LLM reliability, reduced hallucinations 35% and boosted SLA uptime to 99.9%</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Dec 2023 to Jun 2024</span>
                </div>
                <h3 className={styles.expRole}>Data Scientist</h3>
                <p className={styles.expCompany}>Harman International</p>
                <ul className={styles.expList}>
                  <li>Launched Nova multimodal assistant with 95% accuracy validated through 10M+ A B interactions</li>
                  <li>Engineered RoBERTa adversarial defenses cutting jailbreaks 40% at 92% accuracy</li>
                  <li>Enhanced training pipelines boosting GPU utilization 25% and shrinking release cycles 60%</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Jul 2023 to Jul 2024</span>
                </div>
                <h3 className={styles.expRole}>Data Scientist AI/ML</h3>
                <p className={styles.expCompany}>RummyVerse</p>
                <ul className={styles.expList}>
                  <li>Developed real time fraud detection pipeline processing 500+ daily transactions preventing 3M+ annual losses</li>
                  <li>Scaled RL based matchmaking to Kubernetes clusters increasing player engagement 30%</li>
                  <li>Partnered with data infra team to design feature store APIs lowering model latency 40%</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Feb 2023 to Jul 2023</span>
                </div>
                <h3 className={styles.expRole}>AI ML Engineer</h3>
                <p className={styles.expCompany}>Aertrip</p>
                <ul className={styles.expList}>
                  <li>Led recommendation engine design with 35% booking lift and real time model refresh via Airflow</li>
                  <li>Implemented pricing optimization and itinerary generation using XGBoost and TensorFlow cutting costs 20% and reducing response latency 40%</li>
                  <li>Designed CI test suite and monitoring dashboards ensuring 99% service uptime post deployment</li>
                </ul>
              </div>

              <div className={styles.experienceCard}>
                <div className={styles.expMeta}>
                  <span className={styles.expPeriod}>Dec 2022 to Jan 2023</span>
                </div>
                <h3 className={styles.expRole}>ML Engineer</h3>
                <p className={styles.expCompany}>Skilrock Technologies</p>
                <ul className={styles.expList}>
                  <li>Improved ensemble forecasting engine increasing sales forecast accuracy 15% and reducing allocation waste</li>
                  <li>Built SQL and Power BI dashboards boosting data driven actions 25%</li>
                  <li>Tuned pipelines for GPU efficiency lowering inference latency 35%</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Programming</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Python</span>
                    <span className={styles.skillTag}>C++</span>
                    <span className={styles.skillTag}>Java</span>
                    <span className={styles.skillTag}>Go</span>
                    <span className={styles.skillTag}>Rust</span>
                    <span className={styles.skillTag}>SQL</span>
                    <span className={styles.skillTag}>R</span>
                    <span className={styles.skillTag}>Unix Linux Environments</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Machine Learning and AI</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>PyTorch</span>
                    <span className={styles.skillTag}>TensorFlow</span>
                    <span className={styles.skillTag}>HuggingFace Transformers</span>
                    <span className={styles.skillTag}>JAX Flax</span>
                    <span className={styles.skillTag}>GNNs</span>
                    <span className={styles.skillTag}>XGBoost</span>
                    <span className={styles.skillTag}>Scikit learn</span>
                    <span className={styles.skillTag}>NLP</span>
                    <span className={styles.skillTag}>Recommender Systems</span>
                    <span className={styles.skillTag}>RLHF</span>
                    <span className={styles.skillTag}>RAG</span>
                    <span className={styles.skillTag}>LangChain</span>
                    <span className={styles.skillTag}>VectorDBs</span>
                    <span className={styles.skillTag}>vLLM</span>
                    <span className={styles.skillTag}>TensorRT</span>
                    <span className={styles.skillTag}>Guardrails</span>
                    <span className={styles.skillTag}>Triton</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Data and Systems</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Spark</span>
                    <span className={styles.skillTag}>Flink</span>
                    <span className={styles.skillTag}>Beam</span>
                    <span className={styles.skillTag}>Hive</span>
                    <span className={styles.skillTag}>Databricks</span>
                    <span className={styles.skillTag}>Feature Store Engineering</span>
                    <span className={styles.skillTag}>Real time Data Pipelines</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Cloud and Infrastructure</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Azure ML</span>
                    <span className={styles.skillTag}>AWS</span>
                    <span className={styles.skillTag}>SageMaker</span>
                    <span className={styles.skillTag}>EC2</span>
                    <span className={styles.skillTag}>GCP AI</span>
                    <span className={styles.skillTag}>Snowflake</span>
                    <span className={styles.skillTag}>CUDA NCCL Optimization</span>
                    <span className={styles.skillTag}>GPU Parallelization and Scaling</span>
                    <span className={styles.skillTag}>High Performance and TPU XLA Computing</span>
                  </div>
                </div>

                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>MLOps and Deployment</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>MLflow</span>
                    <span className={styles.skillTag}>Kubeflow</span>
                    <span className={styles.skillTag}>Docker</span>
                    <span className={styles.skillTag}>Kubernetes</span>
                    <span className={styles.skillTag}>Jenkins</span>
                    <span className={styles.skillTag}>CI CD</span>
                    <span className={styles.skillTag}>Model Monitoring</span>
                    <span className={styles.skillTag}>Observability and Profiling</span>
                  </div>
                </div>
                
                <div className={styles.skillCategory}>
                  <h4 className={styles.skillTitle}>Visualization and Tools</h4>
                  <div className={styles.skillTags}>
                    <span className={styles.skillTag}>Tableau</span>
                    <span className={styles.skillTag}>Power BI</span>
                    <span className={styles.skillTag}>GitHub</span>
                    <span className={styles.skillTag}>JIRA</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Beyond Code</h2>
            </div>
            
            <div className={styles.sectionBody}>
              <p className={styles.paragraph}>
                Outside of building AI systems, I am someone who needs movement and meaning. I am big on live music and concerts. There is something about standing in a crowd and feeling the bass in your chest that resets everything. Photography helps me when I hit creative blocks. It forces me to slow down and notice light, angles, tiny details I would otherwise miss. Sketching portraits does the same. It trains patience. It reminds me that precision takes time.
              </p>
              <p className={styles.paragraph}>
                I am also a professional skater. Skating keeps me sharp, competitive, and humble. You fall. You get back up. You try again. That mindset carries into everything I build. I love traveling and chasing experiences that give me an adrenaline rush. New cities, unfamiliar environments, moments that make you slightly uncomfortable. Those are the ones that expand perspective and remind me what being alive actually feels like.
              </p>
              <p className={styles.paragraph}>
                Service is a big part of who I am too. I have been involved with Rotaract for the past 7 to 8 years, working on community initiatives and social impact projects. It keeps me grounded. It reminds me that the point of intelligence, artificial or human, is to make someone&apos;s life better. And that is something I want to keep doing wherever I go :)
              </p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
