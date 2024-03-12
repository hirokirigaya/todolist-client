export interface UserType {
  user: {
    id: string;
    username: string;
    avatar: string | null;
  };
  token: string;
}
