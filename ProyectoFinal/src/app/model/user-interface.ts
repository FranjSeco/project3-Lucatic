export interface UserInterface {
  _id?:string;
  name: string;
  genero?: string;
  password: string;
  email: string;
  edad?: string;
  localidad?: string;
  foto?: string;
  fumador?: boolean;
  deportista?: boolean;
  cinefilo?: boolean;
  playa?: boolean;
  montana?: boolean;
  likesDado?: [string];
  dislikeDado?: [string];
  match?: [string];
  likeRecivido?: [string];
}
