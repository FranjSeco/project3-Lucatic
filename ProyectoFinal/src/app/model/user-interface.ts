export interface UserInterface {
  id?: string;
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
  likesDado?:[string];
  dislikeDado?:[string];
  likesRecivido?:[string];
  dislikeRecivido?:[string];
}
