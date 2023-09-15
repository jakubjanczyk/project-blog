import React from 'react';
import BlogSummaryCard from '@/components/BlogSummaryCard'
import { getBlogPostList } from '@/helpers/file-helpers'

async function BlogPostsList() {
  const blogPosts = await getBlogPostList()

  return blogPosts.map(post => (
    <BlogSummaryCard
      key={post.slug}
      {...post}
    />
  ));
}

export default BlogPostsList;
