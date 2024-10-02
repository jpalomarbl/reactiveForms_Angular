export class UserDTO {
    email: string;
    password: string;
    name: string;
    surname1: string;
    surname2: string;
    alias: string;
    birthdate: Date;

    constructor(
        email: string,
        password: string,
        name: string,
        surname1:string,
        surname2: string,
        alias: string,
        birthdate: Date
    ){
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname1 = surname1;
        this.surname2 = surname2;
        this.alias = alias;
        this.birthdate = birthdate;
    }
}