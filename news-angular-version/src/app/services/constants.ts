export enum display {
  landscape = "landscape",
  normal = "normal",
  noimg = "noimg",
}


export class articleObj {
  title: string ='';
  createDay: string | number | Date ='';
  content: string ='';
  imagePath: string ='';
  status: 'draft' | 'public' = 'draft';
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

export interface ArticleFormValue {
  title: string;
  content: string;
  imagePath: string;
  status: articleStatus;
}