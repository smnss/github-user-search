export class MapperClass {
    public userName: string;
    public avatorUrl: string;
    public profileUrl: string;
    public followers: any;
    public repo: any;
    public subscription: any;
    public userDetail: any;

    constructor(
        userName: string, 
        avatorUrl: string, 
        profileUrl: string, 
        followers: any, 
        repo: any, 
        subscription: any,
        userDetail: any) {

        this.userName = userName;
        this.avatorUrl = avatorUrl;
        this.profileUrl = profileUrl;
        this.followers = followers;
        this.repo = repo;
        this.subscription = subscription;
        this.userDetail = userDetail;
        
    }
}