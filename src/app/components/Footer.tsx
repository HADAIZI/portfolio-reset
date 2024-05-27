'use client';

import React from 'react';

const Footer: React.FC = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#a855f7';
    const siblingImg = e.currentTarget.previousElementSibling as HTMLImageElement;
    if (siblingImg) {
      siblingImg.style.filter = 'invert(54%) sepia(91%) saturate(1737%) hue-rotate(245deg) brightness(100%) contrast(101%)';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = '#ffffff';
    const siblingImg = e.currentTarget.previousElementSibling as HTMLImageElement;
    if (siblingImg) {
      siblingImg.style.filter = 'none';
    }
  };

  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.footerLeft}>
          <h2 style={styles.heading}>Let's Work Together</h2>
          <p style={styles.text}>
          I’m actively seeking new opportunities, and my inbox is always open. Whether you have a question or just want to say hello, I'll do my best to respond!
          </p>
        </div>
        <div style={styles.footerRight}>
          <h3 style={styles.contactHeading}>Contact Information</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <img className="icon" src="/gmail-icon.svg" alt="Gmail" style={styles.icon} />
              <a style={styles.link} href="mailto:adamhadaizi2002@gmail.com" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>adamhadaizi2002@gmail.com</a>
            </li>
            <li style={styles.listItem}>
              <img className="icon" src="/linkedin-icon.svg" alt="LinkedIn" style={styles.icon} />
              <a style={styles.link} href="https://www.linkedin.com/in/adam-haidar-06b5671b4/" target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Adam Haidar Azizi</a>
            </li>
            <li style={styles.listItem}>
              <img className="icon" src="/github-icon.svg" alt="GitHub" style={styles.icon} />
              <a style={styles.link} href="https://github.com/HADAIZI" target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>HADAIZI</a>
            </li>
          </ul>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>
          © 2024 | Designed and coded by <a style={styles.link} href="https://github.com/HADAIZI" target="_blank" rel="noopener noreferrer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>HADAIZI</a>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '40px 20px',
    textAlign: 'left' as const,
  },
  footerContent: {
    display: 'flex',
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  footerLeft: {
    maxWidth: '60%',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
    background: 'linear-gradient(to right, #3b82f6, #a855f7)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.5',
  },
  footerRight: {
    maxWidth: '35%',
  },
  contactHeading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '16px',
    lineHeight: '2',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
    transition: 'filter 0.3s',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  footerBottom: {
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '20px',
    textAlign: 'center' as const,
  },
  footerText: {
    fontSize: '14px',
    color: '#888',
  },
};

export default Footer;