import { reactive, ref, unref } from "@vue/reactivity";
import { readonly } from "vue";

export const mainInfo = {
    data: reactive({
        count: 0,
        role: 1, //用户角色
        current: 1,  //当前步骤
        completeList: [],    //已经操作完成的步骤
    }),
    getState(){
       return readonly(this.data);
    },
    setData(key, val) {   //更新data数据
        this.data[key] = val;
        // console.log('(key, val) :>> ', key, val);
        // console.log(this.data[key]);
    },

}