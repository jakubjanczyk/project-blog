import RSS from 'rss'

import { BLOG_TITLE, } from '@/constants'
import { getBlogPostList } from '@/helpers/file-helpers'

export async function GET() {
  const blogPosts = await getBlogPostList()

  const rss = new RSS({ title: BLOG_TITLE })

  blogPosts.forEach((post) => {
    rss.item({
      title: post.title,
      description: post.abstract,
      date: post.publishedOn,
      url: `https://url/${post.slug}`,
    })
  })


  return new Response(rss.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
