<template>
    <Header />
    <div class="main">
        <div class="content-wrap">
            <div class="open-title">open source</div>
            <div class="open-all-num">目前共计 6 个开源作品</div>
            <div class="open-all-content">
                <div class="open-all-list">
                    <div class="img">
                        <el-image
                            class="image-el"
                            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
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
                    <div class="open-list-title">
                        <a href>vue-manage-system</a>
                    </div>
                    <div class="open-list-github">
                        <a href>点此进入github</a>
                        <el-icon>
                            <star-filled />
                        </el-icon>
                        <el-icon>
                            <share />
                        </el-icon>
                    </div>
                    <div class="open-list-desc">vue + Element 后台管理系统框架，可用于快速生成后台管理系统</div>
                </div>
                <div class="open-all-list">
                    <div class="img">
                        <el-image
                            class="image-el"
                            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
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
                    <div class="open-list-title">
                        <a href>vue-manage-system</a>
                    </div>
                    <div class="open-list-github">
                        <a href>点此进入github</a>
                        <el-icon>
                            <star-filled />
                        </el-icon>
                        <el-icon>
                            <share />
                        </el-icon>
                    </div>
                    <div class="open-list-desc">vue + Element 后台管理系统框架，可用于快速生成后台管理系统</div>
                </div>
                <div class="open-all-list">
                    <div class="img">
                        <el-image
                            class="image-el"
                            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
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
                    <div class="open-list-title">
                        <a href>vue-manage-system</a>
                    </div>
                    <div class="open-list-github">
                        <a href>点此进入github</a>
                        <el-icon>
                            <star-filled />
                        </el-icon>
                        <el-icon>
                            <share />
                        </el-icon>
                    </div>
                    <div class="open-list-desc">vue + Element 后台管理系统框架，可用于快速生成后台管理系统</div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts">
import { defineComponent, reactive, } from 'vue';
import Header from '@/components/Header.vue'; // @ is an alias to /src
import Footer from '@/components/Footer.vue';
export default defineComponent({
    name: 'github',
    setup() {
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
    padding-right: 20px;
    .content-wrap {
        max-width: 900px;
        flex: 1;
    }

    .open-title {
        display: flex;
        justify-content: center;
        font-size: 26px;
        margin-bottom: 20px;
    }

    .open-all-num {
        display: flex;
        justify-content: center;
        font-size: 16px;
        margin-bottom: 30px;
    }
    .open-all-content {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;

        .open-all-list {
            width: 45%;
            border: 1px solid #ddd;
            padding: 5px;
            font-size: 16px;
            margin-bottom: 20px;
            @media (max-width: 767px) {
                width: 100%;
                margin-right: 0;
                padding: 10px;
            }

            > .img {
                width: 100%;
                height: 196px;
                .image-el {
                    width: 100%;
                    height: 100%;
                }
            }
            .open-list-title {
                text-align: center;
                font-size: 20px;
                margin-top: 10px;
                > a {
                    border-bottom: 1px solid #999;
                    word-wrap: break-word;
                    text-decoration: none;
                    color: #555;
                }
                > a:hover {
                    color: #222;
                    border-bottom-color: #222;
                }
            }
            .open-list-github {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 10px;
                color: #555;
                > a {
                    border-bottom: 1px solid #999;
                    word-wrap: break-word;
                    text-decoration: none;
                    color: #555;
                    margin-right: 6px;
                }
                > a:hover {
                    color: #222;
                    border-bottom-color: #222;
                }
            }
            .open-list-desc {
                text-align: center;
                margin-top: 10px;
                color: #787878;
                line-height: 25px;
                height: 75px;
                margin-top: 10px;
            }
        }
    }
}
</style>