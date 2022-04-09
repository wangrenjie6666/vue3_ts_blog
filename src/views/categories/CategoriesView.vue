<template>
    <Header />
    <div class="main">
        <div class="content-warp">
            <div class="cate-title">categories</div>
                            <a-spin
                    :spinning="spinning"
                    :delay="delayTime"
                    size="large"
                    style="text-align: center;"
                >
            <div class="cate-all-num">目前共计 {{total}} 个分类</div>
            <ul class="cate-list">
                    <li v-for="(item, index) in cateList" :key="item.id" @click="goRouter.goCateLine(item.id)">
                        <a>{{ item.name }}</a>
                        <span>({{ item.num }})</span>
                    </li>
            </ul>
            </a-spin>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, onMounted } from 'vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';
import { getCateList } from '@/axios/blog';
import { CateDataType } from '@/types/cate'
import GoRouter from '@/hook/GoRouter';
export default defineComponent({
    name: 'Categories',
    setup() {
        const spinning = ref<boolean>(false);
        const delayTime = 500;

        const goRouter = new GoRouter();

        const data = reactive(new CateDataType());
        onMounted(() => {
            getdata();
        })
        const getdata = () => {
            spinning.value = true;
            getCateList().then((res: any) => {
                spinning.value = false;
                data.cateList = res.data.list;
                data.total=res.data.total;
            })
        }
        return {
            spinning,
            delayTime,
            ...toRefs(data),
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
    width: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    padding-bottom: 130px;
    .content-warp {
        max-width: 900px;
        flex: 1;
        .cate-title {
            font-size: 26px;
            color: #555;
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
        }
        .cate-all-num {
            font-size: 16px;
            line-height: 2;
            color: #555;
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }
    }
    .cate-list {
        list-style-type: none;
        padding-left: 20px;
        > li {
            margin-bottom: 16px;
            > a {
                color: #555;
                text-decoration: none;
                border-bottom: 1px solid #999;
                word-wrap: break-word;
                font-size: 16px;
                cursor: pointer;
            }
            > a:hover {
                color: #222;
                border-bottom-color: #222;
            }
            > span {
                color: #bbb;
            }
        }
    }
}
</style>