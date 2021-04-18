import { Repo } from "./Repo";

export class User {
    login : string;
    fullName : string;
    repoCount : number;
    followerCount : number;
    repos? : Repo[];

    constructor(userResponse: any) { // https://api.github.com/users/parvezaalam786
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        // this.login = userResponse.login;
    }
}
