<template>
    <div class="page-box">
        <el-pagination
            background
            layout="prev, pager, next"
            :current-page="childMsg.currentPage"
            :page-size="childMsg.pageSize"
            :total="childMsg.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive,toRef } from "vue";
export default defineComponent({
    name: "Pagination",
    props: ['childMsg'],
    setup(props, { emit }) {
        let pageparm:any= reactive({
            currentPage: 1,
            pageSize: 10
        })
        pageparm.currentPage=toRef(props.childMsg,'currentPage');
        pageparm.pageSize =toRef(props.childMsg,'pageSize');
        const handleSizeChange = (val: number) => {
            pageparm.pageSize = val;
            emit('callFather', pageparm)
        }

        const handleCurrentChange = (val: number) => {
            pageparm.currentPage = val
            emit('callFather', pageparm)
        }

        return {
            handleSizeChange,
            handleCurrentChange
        }
    }

})

</script>

<style lang="scss" scoped>
.page-box {
    max-width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    > div:nth-child(1) {
        max-width: 900px;
        flex: 1;
    }
}
::v-deep .el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
    background-color: $header-color !important;
}
</style>

