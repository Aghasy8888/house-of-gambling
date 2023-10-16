import React from 'react';
import styles from './NavLinksStyle.module.scss';

export default function Link({setIsActive, content}) {
  return (
    <div>
      <div className={styles.linkCtn}>
        <a
          href="#info"
          className={styles.link}
          onClick={() => setIsActive(false)}
        >
            {content}
        </a>
      </div>
    </div>
  )
}
