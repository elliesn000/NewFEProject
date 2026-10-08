import { empty } from "rxjs";

export enum display {
  landscape = "landscape",
  normal = "normal",
  noimg = "noimg",
}



export class articleInitObj {
  title: string ='';
  content: string ='';
  imagePath: string ='';
  status: string ='';
}

export class articleObj {
  id: number = 0;
  title: string ='';
  content: string ='';
  imagePath: string ='';
  status: string ='';
}