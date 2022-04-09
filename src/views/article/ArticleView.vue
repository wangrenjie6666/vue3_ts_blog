<template>
    <Header />
    <div class="main">
     
        <div class="content-wrap">
               <a-spin :spinning="spinning" :delay="delayTime" size="large" style="text-align: center;">
            <div class="article-title">
                {{article.title}}
            </div>
               <div class="aticle-meta">
                <div>
                  <el-icon>
                    <calendar />
                  </el-icon>
                  <span class="hidden-sm-and-down">发表于</span>
                  <span>{{article.create_time}}</span>
                </div>
                <div class="mg-lr-5">|</div>
                <div style="cursor: pointer;" @click="goRouter.goCateLine(article.category_id)">
                  <el-icon>
                    <folder />
                  </el-icon>
                  <span class="hidden-sm-and-down">分类于</span>
                  <span>{{ article.category_name}}</span>
                </div>
                <div class="mg-lr-5">|</div>
                <div>
                  <el-icon>
                    <pointer />
                  </el-icon>
                  <span class="hidden-sm-and-down">浏览量</span>
                </div>
                <div class="mg-lr-5">|</div>
                <div>
                  <el-icon>
                    <star-filled />
                  </el-icon>
                  <span class="hidden-sm-and-down">点赞数</span>
                </div>
              </div>
            <div class="content">
                  <div :innerHTML='article.content'></div>
               
            </div>
            </a-spin>
        </div>
   
    </div>

    <Footer />
</template>

<script lang="ts">
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';
import GoRouter from '@/hook/GoRouter';
import {getArticleId} from '@/axios/blog'
import { ArticleDataType} from '@/types';
import { defineComponent, reactive, ref,onMounted,toRefs} from 'vue';
export default defineComponent({
    name: 'Article',
    setup(){
        const spinning = ref<boolean>(false);
        const delayTime = 500;
          const goRouter = new GoRouter();
          const id = goRouter.getRouterQuery<string>('id');
          let data=reactive(new ArticleDataType());
          onMounted(()=>{
              getdata();
          })
          const getdata=()=>{
              spinning.value=true;
              getArticleId({id}).then(res=>{

                  spinning.value=false;
                  data.article=res.data.data;
              })
          }
          return {
              ...toRefs(data),
              spinning,
              delayTime,
              goRouter
          }
          
    },
    components: {
        Header,
        Footer
    },
}); 
</script>

<style lang="scss" scoped>
.main {
    flex: 1;
    display: flex;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    flex-flow: row wrap;
    .content-wrap{
        max-width: 900px;
        flex: 1;
    }
    .article-title{
        text-align:center;
        color: #555;
        font-size: 26px;
        
    }
       .aticle-meta {
           justify-content: center;
          display: flex;
          align-items: center;
          margin-top: 16px;
          margin-bottom: 20px;
          > div {
            font-size: 12px;
            color: #999;
            display: flex;
            align-items: center;
            > span {
              margin-left: 5px;
            }
          }
          @media (max-width: 992px) {
            justify-content: center;
          }
        }
}
::v-deep blockquote {
     display: block;
    border-left: 8px solid #d0e5f2;
    padding: 5px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 100%;
    background-color: #f1f1f1;
}
</style>