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
            <a-timeline >
                <a-timeline-item color="#00000040" class="collection-title">
                    <h2>{{name}}
                        <small>标签</small>
                    </h2>
                </a-timeline-item>
                <a-timeline-item color="#00000040"  v-for="(item,index) in tagLineList" :key="item.id">
                    <div class="content-info" @click="goRouter.goArticle(item.id)">
                       {{item.title}} <span>{{item.create_time}}</span>
                    </div>
                </a-timeline-item>
                     <a-timeline-item color="#00000040" >
                      <div style="margin-left: 10px;color: #555;">
                          尽请期待...
                    </div>
                </a-timeline-item>
            </a-timeline>
             </a-spin>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts">
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';
import { defineComponent, reactive,ref,toRefs,onMounted} from 'vue';
import { getTagLinkList} from '@/axios/blog';
import {TagLineDataType} from '@/types/tag'
import GoRouter from '@/hook/GoRouter';
export default defineComponent({
    name: 'tagline',
    setup() {
        const spinning = ref<boolean>(false);
        const delayTime = 500;
        const goRouter = new GoRouter();
        const id = goRouter.getRouterQuery<string>('id');
        const data = reactive(new TagLineDataType());
        onMounted(() => {
            getdata();
        })
        const getdata = () => {
            spinning.value = true;
            getTagLinkList({id}).then((res: any) => {
                spinning.value = false;
                data.tagLineList = res.data.list;
                data.name=res.data.name;
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
    display: flex;
    justify-content: center;
    padding-left: 20px;
    .content-wrap{
        max-width: 900px;
        flex: 1;
        .collection-title{
            h2{
                margin-left: 10px;
                font-size: 22px;
                color: #555;
                font-weight: bold;
                >small{
                    color: #bbb;
                    font-size: 14px;
                    
                }
            }
        }
        .content-info{
            color: #666;
            margin-left: 10px;
            padding-bottom: 20px;
            border-bottom: 1px dashed #ccc;
            cursor: pointer;
            >span{
                font-size: 12px;
                margin-left: 10px;
            }
        }
        
    }

}
.ant-timeline-item{
    padding:0 0 40px;
}
</style>