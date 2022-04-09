<template>
    <el-row class="header">
        <el-col :xs="12" :sm="6" :lg="9">
            <div class="title">王仁杰博客</div>
        </el-col>
        <el-col :xs="0" :sm="15" :lg="12">
            <ul class="menu">
                <li>
                    <a href="javascript:" @click="goRouter.goHome">
                        <el-icon :size="iconAttr.size">
                            <home-filled />
                        </el-icon>
                        <span>首页</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:" @click="goRouter.goCategories()">
                        <el-icon :size="iconAttr.size">
                            <grid />
                        </el-icon>
                        <span>分类</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:" @click="goRouter.goFile">
                        <el-icon :size="iconAttr.size">
                            <promotion />
                        </el-icon>
                        <span>归档</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:" @click="goRouter.goTag">
                        <el-icon :size="iconAttr.size">
                            <price-tag />
                        </el-icon>
                        <span>标签</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:" @click="goRouter.goGithub">
                        <el-icon :size="iconAttr.size">
                            <star />
                        </el-icon>
                        <span>开源</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:" @click="goRouter.goAbout">
                        <el-icon :size="iconAttr.size">
                            <stamp />
                        </el-icon>
                        <span>关于</span>
                    </a>
                </li>
            </ul>
        </el-col>
        <el-col :xs="12" :sm="3" :lg="3">
            <div class="nav-toggle hidden-sm-and-up" @click="changeNavToggle()">
                <el-icon  >
                    <expand />
                </el-icon>
            </div>
        </el-col>
    </el-row>
    
    <transition name="fade">
    <div class="drop-down-menu hidden-sm-and-up" v-if="navToggle">
        <ul class="menu">
            <li>
                <a href="javascript:" @click="goRouter.goHome()">
                    <el-icon :size="iconAttr.size">
                        <home-filled />
                    </el-icon>
                    <span>首页</span>
                </a>
            </li>
            <li>
                <a href="javascript:" @click="goRouter.goCategories()">
                    <el-icon :size="iconAttr.size">
                        <grid />
                    </el-icon>
                    <span>分类</span>
                </a>
            </li>
            <li>
                <a href="javascript:" @click="goRouter.goFile()">
                    <el-icon :size="iconAttr.size">
                        <promotion />
                    </el-icon>
                    <span>归档</span>
                </a>
            </li>
            <li>
                <a href="javascript:" @click="goRouter.goTag()">
                    <el-icon :size="iconAttr.size">
                        <price-tag />
                    </el-icon>
                    <span>标签</span>
                </a>
            </li>
            <li>
                <a href="javascript:" @click="goRouter.goGithub()">
                    <el-icon :size="iconAttr.size">
                        <star />
                    </el-icon>
                    <span>开源</span>
                </a>
            </li>
            <li>
                <a href="javascript:" @click="goRouter.goAbout()">
                    <el-icon :size="iconAttr.size">
                        <stamp />
                    </el-icon>
                    <span>关于</span>
                </a>
            </li>
        </ul>
    </div>
   </transition> 
</template>

<script lang="ts">
import { defineComponent, reactive, ref} from 'vue';
import GoRouter from '@/hook/GoRouter';
import 'element-plus/theme-chalk/display.css'


export default defineComponent({
    name: 'Head',
    setup() {
        const navToggle=ref(false);  
        const changeNavToggle=()=>{
           navToggle.value=!navToggle.value;
       }
        
        const iconAttr = reactive({
            size: 16,
        });

        const goRouter = new GoRouter();


        return {
            iconAttr,
            goRouter,
            navToggle,
            changeNavToggle
        }
    },
    components: {
    },
});

</script>
<style lang='scss' scoped>
.header {
    background-color: $header-color;
    height: 85px;
    .title {
        font-size: 22px;
        font-weight: bold;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .menu {
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;

        & > li {
            > a {
                > span:nth-child(2) {
                    margin-left: 6px;
                }
                border: none;
                border-radius: 2px;
                padding: 5px 10px;
                color: #fff;
                font-size: 13px;
                text-decoration: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            > a:hover {
                background-color: #e1e1e1;
                color: #555;
            }
        }
    }
    .nav-toggle {
        color: #fff;
        display: flex;
        cursor: pointer;
        flex-direction: row-reverse;
        margin-right: 10px;
        font-size: 30px;
        height: 100%;
        align-items: center;
    }
}
.drop-down-menu {
    width: 100%;
    background-color: $header-color;
    margin-top: 0.5px;
    padding: 10px 10px 10px 20px;
    .menu {
        list-style-type: none;
        > li {
            > a {
                padding: 5px 0;
                width: 100%;
                color: #fff;
                display: flex;
                align-items: center;
                text-decoration: none;
                font-size: 13px;
                > span {
                    margin-left: 10px;
                }
            }
            > a:hover {
                background-color: #e1e1e1;
                color: #555;
            }
        }
    }

}


</style>
<style>

    .fade-enter {
       opacity: 0;
    }
    .fade-enter-active {
       transition: opacity 1s;
    }
    .fade-leave-to {
       opacity: 0;
    }
    .fade-leave-active {
       transition: opacity 1s;
    }
</style>