interface TagInt{
    id:number,
    name:string,
    color:string
}

interface TagLineInt{
    id:number,
    title:string,
    create_time:string
}

//标签字段
export class TagDataType{
    tagList:Array<TagInt>=[];
    total:number=0;
}

export class TagLineDataType{
    tagLineList:Array<TagLineInt>=[];
    name:string="";
}