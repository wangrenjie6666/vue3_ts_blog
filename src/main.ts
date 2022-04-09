import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const app=createApp(App);

// //引入elementPlus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

//自定义组件
import * as ElIconModules from '@element-plus/icons-vue'

//自定义引入antdesign
import 'ant-design-vue/dist/antd.css'
import { Timeline,Tag,Spin,message} from 'ant-design-vue';
app.use(Timeline).use(Tag).use(Spin);
app.config.globalProperties.$message = message;

// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}

//全局注册分页组件
import Pagination from "@/components/common/Pagination.vue"
app.component('helloworld', Pagination)

// use(ElementPlus)
app.use(store).use(router).mount('#app')
