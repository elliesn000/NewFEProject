export enum display {
  landscape = "landscape",
  normal = "normal",
  noimg = "noimg",
}

export type articleStatus = 'draft' | 'public';

export interface Article {
  id: string;
  title: string;
  content: string;
  imagePath: string;
  status: articleStatus;
  createdDay: string;
}

export type ArticleFormValue = Pick<Article, 'title' | 'content' | 'imagePath' | 'status'>;