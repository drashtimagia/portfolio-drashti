import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'drashtimagia02@gmail.com',
    href: 'mailto:drashtimagia02@gmail.com',
  },
  {
    social: 'github',
    link: 'drashtimagia',
    href: 'https://github.com/drashtimagia',
  },
  {
    social: 'linkedin',
    link: 'drashti-magia-a185201b3',
    href: 'https://www.linkedin.com/in/drashti-magia-a185201b3',
  },
  {
    social: 'substack',
    link: 'drashtimagia',
    href: 'https://substack.com/@drashtimagia',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.contact_info</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
