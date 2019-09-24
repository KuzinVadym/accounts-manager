import {webSocket} from "rxjs/webSocket";

class Service {

    static instance;

    constructor(){
        this.authSubject = null;
        this.creationSubject = null;
    }

    // eslint-disable-next-line class-methods-use-this
    init() {
        const authSubject = webSocket(""); // here your own url
        const creationSubject = webSocket("");  // here your own url
        this.authSubject = authSubject;
        this.creationSubject = creationSubject;
    }
}

let instance = new Service();
export default instance;
