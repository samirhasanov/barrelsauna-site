import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang, L } from '../data/site';
import { blogPostPath } from '../data/routes';

export type Post = CollectionEntry<'blog'>;

/** slug = file name without extension (id is "<lang>/<slug>") */
export const slugOf = (p: Post) => p.id.split('/').pop()!;

export async function allPosts() {
  return (await getCollection('blog', (p) => !p.data.draft)).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function postsFor(lang: Lang) {
  return (await allPosts()).filter((p) => p.data.lang === lang);
}

export async function alternatesFor(post: Post): Promise<Partial<L>> {
  const sibs = (await allPosts()).filter((p) => p.data.translationKey === post.data.translationKey);
  const out: Partial<L> = {};
  for (const s of sibs) out[s.data.lang] = blogPostPath(s.data.lang, slugOf(s));
  return out;
}
