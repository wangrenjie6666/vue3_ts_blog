export interface ArticleStr{
    id:number,
    title:string,
    create_time:string,
    try_read:string,
    content:string,
    category_id:number,
    category_name:string
}

export class FileData{
    articleList:Array<ArticleStr>=[];
    total:number=0;
    length:number=0;
}