import { reactive } from "vue"

export default class Pageparm {
    pageparm:{currentPage:number,pageSize:number,total:number};
    constructor() {
        this.pageparm = reactive({
            currentPage: 1,
            pageSize: 10,
            total: 10,
        })
    };

}