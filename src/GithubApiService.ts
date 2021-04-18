import * as request from 'request';
import { Repo } from './Repo';
import { User } from './User';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}

export class GithubApiService {

    getUserInfo(userName : string, cb : (user: User) => any) { // this is an asynchronous method, it cannot have a return. SO we will use callbacks
        // The request library returns the response body as a string by default. It needs to be parsed as a JSON object in order to access its properties.
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any,response: any, body: any) => {
            let user = new User(body);
            cb(user);
        })
    }

    getRepos(userName : string, cb : (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any,response: any, body: any) => {
            let repos = body.map((repo: any) => new Repo(repo)); // The map function executes the function passed to it for each element of the array and returns a new array with the corresponding return values
            cb(repos);
        })
    }
}