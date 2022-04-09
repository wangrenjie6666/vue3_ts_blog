<template>
    <Header />
    <div class="main">
        <div class="about-content">
            <div class="about-me">
                <div class="me">关于博主</div>
                <div class="image">
                    <img src="@/assets/img/header.jpg" alt="" />
                </div>
            </div>
            <div class="blog">
                <div>BLog</div>
                <p>本博客用于记录平时工作和学习中的知识点，总结经验，用于分享。如有错误地方烦请指正。</p>
                <p>博客重点在于分享web前端开发知识，或涉其它。</p>
            </div>
            <div class="contact">
                <div>Contact</div>
                <p>Name:王仁杰</p>
                <p>github:wang_ren_jie</p>
                <p>QQ:1163941040</p>
                <p>email:1163941040@QQ.com</p>
            </div>
            <div class="experience">
                <div>Experience</div>
                <p>福建省禄可集团（2021-03至2022-3）</p>
                <p>福建省拓易网络科技有限公司(2020-10 至 2021-03)</p>
                <p>福建字客网络科技有限公司(2019-03 至 2020-10)(正式入职)</p>
                <p>福建字客网络科技有限公司(2017-09 至 2019-03)（大学兼职以及实习）</p>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import {articleList} from '@/axios/blog';
import { defineComponent} from 'vue';
export default defineComponent({
    name: 'about',
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
    .about-content {
        max-width: 900px;
        flex: 1;
        .about-me {
            .me {
                text-align: center;
                font-size: 26px;
                font-weight: 400;
                color: #555;
            }
            .image {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 10px;

                > img {
                    width: 200px;
                    height: 200px;
                }
            }
        }
        .blog,
        .contact,
        .experience {
            > div {
                margin: 30px 0 10px;
                font-size: 20px;
                color: #555;
                font-weight: bold;
            }
            > p {
                font-size: 16px;
                margin-bottom: 20px;
            }
        }
    }
}
</style>