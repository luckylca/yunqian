<template>
    <div class="container">
        <div class="tableContainer">
            <el-table :data="article.tableData || []" style="width: 100%" height="1000" highlight-current-row
                :header-cell-style="{ height: '100px', color: 'black' , }" :row-style="rowStyle" @current-change="handleCurrentChange">
                <el-table-column prop="name" label="兵种介绍" align="center" />
            </el-table>
        </div>
        <div v-html="markdownContent" class="markdown-body"></div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ElTable, ElTableColumn } from 'element-plus';
// import { userSettingStore } from '@/Store/setting/setting';
import { articleStore } from '@/Store/articl/articl';
import { marked, MarkedOptions } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
const markdownContent = ref('')

// const userSetting = userSettingStore();
const article = articleStore();
const currentIndex = ref(0);


// 设置行样式
const rowStyle = () => {
    return { height: '100px'}; // 设置每行高度为100px
};
const handleCurrentChange = (data: { name: string; decl: string; index: number }) => {
    currentIndex.value = data.index;
    getMarkdownContent();
    console.log('当前选中行:', data);
};
async function getMarkdownContent() {
    const link = `article/introduce${currentIndex.value}.md`;
    console.log(link);
    // const link = 'article/test.md';
    const response = await fetch(link);
    const text = await response.text();
    marked.setOptions({
        highlight: (code: string, lang: string) => {
            return hljs.highlight(code, { language: lang }).value
        }
    } as MarkedOptions)
    markdownContent.value = await marked(text);
}
onMounted(() => {
    getMarkdownContent();
});
</script>
<style scoped lang="scss">
@import 'github-markdown-css/github-markdown.css';
.container {
    display: flex;
}

.markdown-body {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.tableContainer {
    width: 300px;
    overflow: auto;

}

.tableDecl {
    width: 100%;
    height: 100px;
    overflow: auto;
    text-align: center;
    font-size: 16px;
    color: #333;
    margin-top: 20px;
}
</style>