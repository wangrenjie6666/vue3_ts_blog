/**
 * 分类
 */
 interface CateInt{
    id:number,
    name:string,
    num:number
}

interface CateLineInt{
    id:number,
    title:string,
    create_time:string
}

//文章字段
export class CateDataType{
        cateList:Array<CateInt>=[];
        total:number=0;
}

//文章字段
export class CateLineType{
    cateLineList:Array<CateLineInt>=[];
    name:string='';
}