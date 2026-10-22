import fs from 'node:fs';
import path from 'node:path';
import { getCollection } from 'astro:content';
import { categoryOrder } from './site.config';

const IMAGE_TYPES = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'];

// Finds public/<folder>/<name>.<jpg|png|...>. Returns its URL, or undefined.
export function findImage(folder: string, name: string): string | undefined {
  for (const ext of IMAGE_TYPES) {
    const file = path.join(process.cwd(), 'public', folder, `${name}.${ext}`);
    if (fs.existsSync(file)) return `/${folder ? folder + '/' : ''}${name}.${ext}`;
  }
  return undefined;
}

export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export async function getPosts() {
  const all = await getCollection('writing', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function groupByCategory<T extends { data: { category: string } }>(posts: T[]) {
  const groups = new Map<string, T[]>();
  for (const p of posts) {
    if (!groups.has(p.data.category)) groups.set(p.data.category, []);
    groups.get(p.data.category)!.push(p);
  }
  const rank = (c: string) => {
    const i = categoryOrder.indexOf(c);
    return i === -1 ? Infinity : i;
  };
  return [...groups.entries()].sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b));
}

export function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function formatDate(d: Date) {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}
