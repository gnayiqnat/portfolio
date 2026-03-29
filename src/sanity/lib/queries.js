// QUERIES

// All Posts
export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt asc)[0...$limit]{
_id, title, slug, publishedAt, mainImage, categories[]-> {
    title,
    "slug": slug.current
  }
}`;

// Single Post
export const POST_QUERY = `*[
_type == "post" && slug.current == $slug
][0]{
  title,
  body,
  publishedAt,
  mainImage
}`;

// All Slugs
export const SLUG_QUERY = `*[
_type == "post" && defined(slug.current)
]{ "slug": slug.current }`;
