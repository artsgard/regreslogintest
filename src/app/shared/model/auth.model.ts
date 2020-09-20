export class Auth {
  email: string;
  password: string;

  constructor(password: string, email: string) {
    this.email = email;
    this.password = password;
  }
}