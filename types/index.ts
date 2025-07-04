import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface BlogItem {
  image: {
    url: string;
  };
  categories: [];
  title: string;
  createdAt: string;
  urlSlug: string;
  description: string;
}
export interface ArticleDetail {
  title: string;
  createdAt: string;
  description: string;
  publishedBy: {
    name: string;
    picture: string;
  };
  urlSlug: string;
  content: {
    html: string;
  };
  image: {
    url: string
  }
  categories: []
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
export type SiteConfig = {
  name: string
  heroSectionTitle: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    facebook: string
  }
}
export interface BiographyItem {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  urlSlug: string;
  reverse?: boolean;
}