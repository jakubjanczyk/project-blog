import React from 'react';

import styles from './homepage.module.css';
import BlogPostsList from '@/components/BlogPostsList'
import { BLOG_TITLE } from '@/constants'

export const metadata = {
  title: BLOG_TITLE,
  description: 'A wonderful blog about JavaScript'
};

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
