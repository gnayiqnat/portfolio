// QUERIES

// All Posts
export const POSTS_QUERY = `*[
  _type == "post"
]|order(_createdAt desc)[0...$limit]{
_id, title, slug, publishedAt, mainImage, categories[]-> {
    title,
  }
}`;

// Single Post
export const POST_QUERY = `*[
_type == "post" && slug.current == $slug
][0]{
  title,
  body,
  publishedAt,
  mainImage,
  categories[]-> {
    title,
    "slug": slug.current
  },
}`;

// Single Post - SEO Only
export const SEO_POST_QUERY = `*[
_type == "post" && slug.current == $slug
][0]{
  publishedAt,
  metaTitle,
  metaDescription,
  shareGraphic,
}`;

// All Slugs
export const SLUG_QUERY = `*[
_type == "post" && defined(slug.current)
]{ "slug": slug.current }`;

// RSS Feed
export const RSS_QUERY = `*[
  _type == "post"
]|order(_createdAt desc)[0...$limit]{
_id, slug,
  mainImage,
  publishedAt,
  metaTitle,
  metaDescription,
}`;