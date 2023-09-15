import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import { loadBlogPost } from '@/helpers/file-helpers'
import { MDXRemote } from 'next-mdx-remote/rsc'
import CodeSnippet from '@/components/CodeSnippet'
import DivisionGroupsDemo from '@/components/DivisionGroupsDemo'
import CircularColorsDemo from '@/components/CircularColorsDemo'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const post = await loadBlogPost(params.postSlug);

  if (!post) {
    return null;
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.abstract
  };
}

async function BlogPost({params}) {
  const post = await loadBlogPost(params.postSlug)

  if (!post) {
    return notFound()
  }

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={post.frontmatter.title}
        publishedOn={post.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={post.content} components={{
          pre: CodeSnippet,
          DivisionGroupsDemo: DivisionGroupsDemo,
          CircularColorsDemo: CircularColorsDemo
        }}/>
      </div>
    </article>
  );
}

export default BlogPost;
