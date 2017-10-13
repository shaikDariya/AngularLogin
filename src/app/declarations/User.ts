export class User {
    public userName : String;
    public passWord : String;
    constructor( userName ?: String , passWord ?: String){
        this.userName = userName;
        this.passWord = passWord;
    }
}