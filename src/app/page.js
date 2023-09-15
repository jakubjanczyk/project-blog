import React from 'react';

import styles from './homepage.module.css';
import BlogPostsList from '@/components/BlogPostsList'

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      <BlogPostsList/>
    </div>
  );
}

export default Home;
