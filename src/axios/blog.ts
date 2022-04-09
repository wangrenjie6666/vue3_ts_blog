import $http from "./request";
import { PageInter,IdInter } from "@/types";
export async function articleList(data:PageInter){
    return $http({
        url:'/index/Index/getArticleList',
        method:'get',
        params:data,
    })
}

export async function getArticleId(data:IdInter){
    return $http({
        url:'index/Index/getArticleId',
        method:'get',
        params:data,
    })
}

export async function getCateList(){
    return $http({
        url:'index/Index/getCateList',
        method:'get',
    })
}

export async function getCateLineList(data:IdInter){
    return $http({
        url:'index/Index/getCateLineList',
        method:'get',
        params:data,
    })
}

export async function getFileList(data:PageInter){
    return $http({
        url:'index/Index/getFileList',
        method:'get',
        params:data,
    })
}

export async function getTagList(){
    return $http({
        url:'index/Index/getTagList',
        method:'get',
    })
}

export async function getTagLinkList(data:IdInter){
    return $http({
        url:'index/Index/getTagLineList',
        method:'get',
        params:data,
    })
}