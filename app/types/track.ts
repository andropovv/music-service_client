export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text:string;
  listens: number;
  pucture: string;
  author: string;
  comments: IComment[]
}
export interface IComment {
  _id: string;
  username: string;
  text: string;
}