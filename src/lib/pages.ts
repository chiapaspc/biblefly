import { getCollection } from 'astro:content';

export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export async function getNavItems(): Promise<NavItem[]> {
  const pages = await getCollection('pages');
  return pages
    .filter((page) => page.data.nav)
    .map((page) => ({
      label: page.data.nav as string,
      href: `/${page.id}/`,
      order: page.data.order,
    }))
    .sort((a, b) => a.order - b.order);
}