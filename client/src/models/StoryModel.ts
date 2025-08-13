import type { UserModel } from "./UserModel";

export class StoryModel {
    id: number;
    user: UserModel;
    content: string;

    constructor (id:number, user: UserModel, content: string) {
        this.id = id;
        this.user = user;
        this.content = content;
    }
}