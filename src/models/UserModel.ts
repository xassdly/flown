export class UserModel {
    username: string;
    avatar: string;
    
    constructor (username: string, avatar: string) {
        this.username = username;
        this.avatar = avatar;
    }
}