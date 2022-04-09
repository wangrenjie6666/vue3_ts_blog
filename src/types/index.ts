/**
 * 说明
 * 博客内容暂时较少 所以类型就都划分到一起
 * 后续加强后 建议类型按文件划分
 */

//类型验证
export interface ArticleStr{
    id:number,
    title:string,
    create_time:string,
    try_read:string,
    content:string,
    category_id:number,
    category_name:string,
    image:string,
}

//分页传参
export interface PageInter{
    page:number,
    page_size:number
}


//id传参
export interface IdInter{
    id:number
}


//数据认证
export class InitData{
    articleList:Array<ArticleStr>=[];
    total:number=0;
}

//文章字段
export class ArticleDataType{
    article:ArticleStr={
        id:0,
        title:'',
        create_time:'',
        try_read:'',
        content:'',
        category_id:0,
        category_name:'',
        image:'',
    }
}

