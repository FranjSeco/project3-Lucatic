export interface UserInterface {
  id?: number;
  name: string;
  genero?: string;
  password: string;
  email: string;
  edad?:number;
  localidad?:string;
  foto?:string;
  fumador?:boolean;
  deportista?:boolean;
  cinefilo?:boolean;
  playa?:boolean;
  montana?:boolean;
  likes?:[];
  dislike?:[];
}
