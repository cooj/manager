import { createApp } from "vue";
import App from "./App.vue";
import router from "./route"; //引入路由
import Antd from "ant-design-vue"; //ant-design-vue组件
import "ant-design-vue/dist/antd.css"; //ant-design-vue样式


    
const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount("#app");
