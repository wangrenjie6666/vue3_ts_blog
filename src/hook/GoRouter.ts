import { useRouter,useRoute} from 'vue-router';

class GoRouter{
    router:any;
    route:any;
    constructor(){
        this.router = useRouter();
        this.route=useRoute();
    }

    goHome(){
        this.router.push("/home");
    };
    
    goCategories(){
        this.router.push("/categories");
    };

    goFile(){
        this.router.push("/file");
    };

    goTag(){
        this.router.push("/tag");
    };

    goGithub(){
        this.router.push("/github");
    };

    goAbout(){
        this.router.push("/about");
    };

    goArticle(id:number){
        this.router.push({
            path:"/article",
            query: {
                id
            },
        });
    };
    goCateLine(id:number){
        this.router.push({
            path:"/cateline",
            query: {
                id
            },
        });
    };
    goTagLine(id:number){
        this.router.push({
            path:"/tagline",
            query: {
                id
            },
        });
    };
    getRouterQuery<T>(params:T){
        return this.route.query[params];
    };

    
}

export default GoRouter;