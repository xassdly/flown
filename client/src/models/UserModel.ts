
type Favorities = {
  movie: string;
  book: string;
  music: string;
  quote: string;
};

export type UserModel = {
  id: number;
  username: string;
  avatar: string;
  email: string;
  country: string;
  plan: string | null;
  skills: string[];
  favorities: Favorities;
  bio: String; // приблизно 120 символів (разом з пробілами) біографія на англ
  followers: number; // підписники
  following: number; // підписки
  friends: number; // друзі
  family: number;  // сімя
};
