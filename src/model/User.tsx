export default class User {

    email: string
    givenName: string
    familyName: string
    fullName: string
    picture: string

    constructor(email: string, givenName: string, familyName: string, fullName: string, picture: string) {
        this.email = email;
        this.givenName = givenName;
        this.familyName = familyName;
        this.fullName = fullName;
        this.picture = picture
    }

}