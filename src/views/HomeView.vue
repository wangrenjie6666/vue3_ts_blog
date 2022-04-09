<template>
  <Header></Header>
  <!--文章分类-->
  <div class="main">
    <div>
      <div class="article">
        <a-spin :spinning="spinning" :delay="delayTime" size="large" style="text-align: center;">
        <el-row v-for="(item, index) in articleList" :key="item.id" style="margin-bottom: 120px;">
          <el-col :xs="24" :sm="24" :md="16">
            <div class="info">
              <div class="aticle-title" >
                <a href="javascript:" @click="goRouter.goArticle(item.id)">{{ item.title }}</a>
              </div>
              <div class="aticle-meta">
                <div >
                  <el-icon>
                    <calendar />
                  </el-icon>
                  <span class="hidden-sm-and-down">发表于</span>
                  <span>{{item.create_time}}</span>
                </div>
                <div class="mg-lr-5">|</div>
                <div style="cursor: pointer;" @click="goRouter.goCateLine(item.category_id)">
                  <el-icon>
                    <folder />
                  </el-icon>
                  <span class="hidden-sm-and-down">分类于</span>
                  <span>{{ item.category_name }}</span>
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
              <div class="aticle-body">{{ item.try_read }}</div>
              <div class="article-btn">
                <el-button type="primary" class="article-btn-el" @click="goRouter.goArticle(item.id)">阅读全文 »</el-button>
              </div>
            </div>
          </el-col>
          <el-col :xs="0" :sm="0" :md="8">
            <div class="image">
              <el-image
                class="image-el"
                :src="item.image"
                fit="cover"
              >
                <template #error>
                  <div class="image-slot">
                    <el-icon>
                      <trend-charts />
                    </el-icon>
                  </div>
                </template>
              </el-image>
            </div>
          </el-col>
        
        
        </el-row>
          </a-spin>
      </div>
    </div>
    <Pagination v-bind:child-msg="pageparm" @callFather="callFather" v-show="!spinning"></Pagination>
  </div>

  <div style="height: 60px;width: 100%;"></div>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent, reactive, ToRefs, onMounted, toRefs,ref,} from 'vue';
import GoRouter from '@/hook/GoRouter';
import { articleList } from '@/axios/blog';
import { InitData } from '@/types';
import Pageparm from "@/hook/Pageparm"

import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';
import { any } from 'vue-types';
import Pagination from '@/components/common/Pagination.vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
     const spinning = ref<boolean>(false);
     const delayTime = 500;

    const data = reactive(new InitData());
    let formInline = reactive({
      page: 1,
      page_size: 4
    })
    const pageparm = reactive(new Pageparm().pageparm);
    const callFather = (parm: any) => {
      formInline.page = parm.currentPage;
      formInline.page_size = parm.pageSize;
      getdata();
    } 
    onMounted(() => {
      getdata();
    })
    const getdata = () => {
      spinning.value=true;
      articleList({page: formInline.page,page_size: formInline.page_size}).then((res: any) => {
          spinning.value=false;
          data.articleList = res.data.list;
          pageparm.total=res.data.total;
          pageparm.currentPage=formInline.page;
          pageparm.pageSize=formInline.page_size;
      })
    }

    const goRouter = new GoRouter();

    return {
      ...toRefs(data),
      pageparm,
      callFather,
       spinning,
      delayTime,
      goRouter
    }

  },
  components: {
    Header,
    Footer,
    Pagination
  },
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 130px;
  min-height: 300px;
  .load-spin{
    // display: flex;
    // justify-content: center;
    // align-items: center;
    height: 100%;

  }
  > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: center;
    .article {
      max-width: 900px;
      flex: 1;
      .info {
        .aticle-title {
          > a {
            text-decoration: none;
            width: auto;
            font-size: 26px;
            color: #555;
            display: inline-block;
            font-weight: 400;
            text-align: center;
            border-bottom: 1px solid #555;
            cursor: pointer;
          }
          @media (max-width: 992px) {
            text-align: center;
          }
        }
        .aticle-meta {
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
        .aticle-body {
          margin-bottom: 20px;
          color: #555;
          font-size: 16px;
          line-height: 2;
          code {
            padding: 2px 4px;
            word-wrap: break-word;
            color: #555;
            background: #eee;
            border-radius: 3px;
            font-size: 13px;
          }
        }
        .article-btn {
          .article-btn-el {
            background-color: #2c3e50;
          }
        }
      }
      .image {
        padding-left: 20px;
        .image-el {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
}
</style>
