import type { UserModel } from '../../models/UserModel';
import avatar from "./../../assets/avatars/userAvatar.png";

export const defaultUser: UserModel = { id: 0, username: 'Artur', avatar: avatar, email: "xassdly@gmail.com", country: "Greece", plan: "pro", skills: ["React", "TypeScript", "Running", "English", "Fishing"], favorities: { movie: "Forrest Gump", book: "Home Deus - Yuval Noah Harari", music: "Daylight - David Kushner", quote: "Life goes on" }, bio: "From Greece with code. I turn ideas into apps and pasta into art.", followers: 4363, following: 43643, friends: 463, family: 9};