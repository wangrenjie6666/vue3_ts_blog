<template>
    <Header />
    <div class="main">
        <div class="content-wrap">
            <a-spin
                :spinning="spinning"
                :delay="delayTime"
                size="large"
                style="text-align: center;"
            >
                <a-timeline>
                    <a-timeline-item color="#00000040" class="collection-title">
                        <h2>OK!共计{{ total }}篇文章，继续努力~</h2>
                    </a-timeline-item>
                    <a-timeline-item
                        color="#00000040"
                        v-for="(item, index) in articleList"
                        :key="item.id"
                    >
                        <div class="content-info" @click="goRouter.goArticle(item.id)">
                            {{ item.title }}
                            <span>{{item.create_time}}</span>
                        </div>
                    </a-timeline-item>
                    <a-timeline-item color="#00000040">
                        <div
                            style="margin-left: 10px;color: #555;"
                        >{{ length < formInline.page_size ? ' 尽请期待...' : '翻看下一页更精彩' }}</div>
                    </a-timeline-item>
                </a-timeline>
                <Pagination v-bind:child-msg="pageparm" @callFather="callFather" v-show="!spinning"></Pagination>
            </a-spin>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts">
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';
import { defineComponent, reactive, ToRefs, onMounted, toRefs, ref, } from 'vue';
import GoRouter from '@/hook/GoRouter';
import { getFileList } from '@/axios/blog';
import { FileData } from '@/types/file';
import Pageparm from "@/hook/Pageparm";
import { any } from 'vue-types';
import Pagination from '@/components/common/Pagination.vue';
export default defineComponent({
    name: 'file',
    setup() {
        const spinning = ref<boolean>(false);
        const delayTime = 500;
        const data = reactive(new FileData());
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
            spinning.value = true;
            getFileList({ page: formInline.page, page_size: formInline.page_size }).then((res: any) => {
                spinning.value = false;
                data.articleList = res.data.list;
                data.length = res.data.list.length;
                data.total = res.data.total;
                pageparm.total = res.data.total;
                pageparm.currentPage = formInline.page;

                pageparm.pageSize = formInline.page_size;
            })
        }

        const goRouter = new GoRouter();

        return {
            ...toRefs(data),
            pageparm,
            callFather,
            spinning,
            delayTime,
            goRouter,
            formInline

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
    display: flex;
    justify-content: center;
    padding-left: 20px;
    .content-wrap {
        max-width: 900px;
        flex: 1;
        .collection-title {
            h2 {
                margin-left: 10px;
                font-size: 22px;
                color: #555;
                font-weight: bold;
                > small {
                    color: #bbb;
                    font-size: 14px;
                }
            }
        }
        .content-info {
            color: #666;
            margin-left: 10px;
            padding-bottom: 20px;
            border-bottom: 1px dashed #ccc;
            cursor: pointer;
            > span {
                font-size: 12px;
                margin-left: 10px;
            }
        }
    }
}
.ant-timeline-item {
    padding: 0 0 40px;
}
</style>