export class User {
  constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public password: string,
    public readonly phone: string,
    public readonly status: number,
  ) {}
  static create(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    status: number,
  ): User {
    return new User(0, email, firstName, lastName, password, phone, status);
  }
  getPassword() {
    return this.password;
  }
}
