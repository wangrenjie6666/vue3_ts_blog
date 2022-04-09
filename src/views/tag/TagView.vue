<template>
    <Header />
    <div class="main">
        <div class="content-wrap">
            <div class="tag-title">tags</div>
            <div class="tag-num">目前共计6个标签</div>
            <div class="tag-content">
                <a-tag :color="item.color" v-for="(item,index) in tagList" :key="item.id" @click="goRouter.goTagLine(item.id)">{{item.name}}</a-tag>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts">
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';
import { defineComponent, reactive, ref, onMounted, toRefs } from 'vue';
import { getTagList } from '@/axios/blog';
import { TagDataType } from '@/types/tag'
import GoRouter from '@/hook/GoRouter';
export default defineComponent({
    name: 'tag',
    setup() {
        const spinning = ref<boolean>(false);
        const delayTime = 500;
        const goRouter = new GoRouter();
        const data = reactive(new TagDataType());
        onMounted(() => {
            getdata();
        })
        const getdata = () => {
            spinning.value = true;
            getTagList().then((res: any) => {
                spinning.value = false;
                data.tagList = res.data.list;
                data.total = res.data.total;
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
    flex: 1;
    display: flex;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    flex-flow: row wrap;
    .content-wrap {
        max-width: 900px;
        flex: 1;
        .tag-title {
            text-align: center;
            font-size: 26px;
            color: #555;
            margin-bottom: 20px;
            // font-weight: bold;
        }
        .tag-num {
            text-align: center;
            font-size: 14px;
            color: #555;
            margin-bottom: 40px;
        }
        .tag-content {
            width: 100;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
}
.ant-tag {
    font-size: 16px;
    padding: 6px 10px;
    margin-left: 20px;
    cursor: pointer;
    margin-bottom: 20px;
}
</style>