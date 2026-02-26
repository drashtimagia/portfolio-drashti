import { Metadata } from 'next';

import styles from '@/styles/ResearchPage.module.css';

export const metadata: Metadata = {
  title: 'Research',
};

const papers = [
  {
    title:
      'Diabetic Retinopathy Detection using Real World Fundus Images',
    summary:
      'I built a deep learning pipeline for early detection of diabetic retinopathy using real world retinal image datasets. The work focused on improving robustness across varying image quality and lighting conditions, enabling more reliable screening in practical clinical environments. Published in Springer LNNS 2024.',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-3245-6_11',
  },
  {
    title:
      'Automated Image Labelling using Active Learning and Transfer Learning',
    summary:
      'This research explored how active learning combined with transfer learning can reduce annotation effort while maintaining high accuracy. By iteratively selecting the most informative samples, the system minimized labeling cost while improving model generalization across image classification tasks.',
    link: 'https://www.ijaresm.com/uploaded_files/document_file/Madhuvanthi_S,,,ZB0d.pdf',
  },
  {
    title:
      'Object Detection using a Hybrid Machine Learning Model',
    summary:
      'I designed a hybrid object detection framework that integrates classical feature engineering with deep learning based detectors. The approach improved detection stability across diverse environments and demonstrated stronger performance under constrained training data settings.',
    link: '',
  },
];

export default function ResearchPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={styles.command}>\\section*{'{'}Research and Publications{'}'}</p>
        <h1 className={styles.title}>RESEARCH AND PUBLICATIONS</h1>

        <p className={styles.command}>\\subsection*{'{'}Abstract{'}'}</p>
        <p className={styles.summary}>
          Innovation is easy to talk about. Perspective is harder. AI may move
          fast, but real progress happens when we pause, rethink the
          foundations, and question what feels settled. This is where I explore
          unconventional ideas and build experiments that stretch how we define
          intelligence not just as something powerful, but as something
          thoughtful.
        </p>

        <p className={styles.command}>\\begin{'{'}itemize{'}'}</p>
        <div className={styles.list}>
          {papers.map((paper) => (
            <div key={paper.title} className={styles.item}>
              {paper.link ? (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.itemLink}
                >
                  \\item {paper.title}
                </a>
              ) : (
                <p className={styles.itemText}>\\item {paper.title}</p>
              )}
              <p className={styles.paperSummary}>{paper.summary}</p>
            </div>
          ))}
        </div>
        <p className={styles.command}>\\end{'{'}itemize{'}'}</p>
      </div>
    </div>
  );
}
