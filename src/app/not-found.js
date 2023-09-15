import styles from '@/app/homepage.module.css'
import React from 'react'
import { BLOG_TITLE } from '@/constants'

export const metadata = {
  title: `404 Not found • ${BLOG_TITLE}`,
};

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        404 Not Found
      </h1>
      <div>This page does not exist. Please check the URL and try again</div>
    </div>
  )
}

export default NotFound
