import {Author} from '@/types/author';

export type Blog = {
  id: number;
  path: string;
  title: string;
  paragraph?: string;
  image?: string;
  authorId: number;
  author?: Author;
  tags?: string[];
  keywords?: string[];
  categories?: string[];
  publishDate: string;
  showTOC?: boolean;
};
