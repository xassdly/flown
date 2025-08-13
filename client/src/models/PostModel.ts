import type { UserModel } from "./UserModel";
import { CommentModel } from "./CommentModel";

export class PostModel {
    id: number;
    user: UserModel;
    location: string;
    content: string;
    image: string | null;
    likes: number;
    comments: CommentModel[];
    reposts: number;

    constructor(id: number, user: UserModel, location: string, content: string, image: string | null, likes: number, comments: CommentModel[] = [], reposts: number){
        this.id = id;
        this.user = user;
        this.location = location;
        this.content = content;
        this.image = image;
        this.likes = likes;
        this.comments = comments;
        this.reposts = reposts;
    }
}