import type { UserModel } from "./UserModel";

export class CommentModel {
    id: number;
    user: UserModel;
    content: string;
    date: Date;
    likes: number;

    constructor(id:number, user: UserModel, content: string, date: Date, likes: number){
        this.id = id;
        this.user = user;
        this.content = content;
        this.date = date;
        this.likes = likes;
    }
}