//axios封装地址案例https://learnku.com/articles/30504
import { post, get, del, put, http,http_all } from './http';   //引入封装后的axios


const url = '/api';
// const url = '/api2';

// 也可以用文件方式进行管理
// import goods from './goods.js';
// export const Goods = goods

//请求多个
export const req_all=http_all;

// 公共部分
export const Comm = {
    // 获取当前操作步骤（已操作、未操作，设置按钮（是否为禁用）状态）
    GetSteps: (data) => get(url, { App: "GetSteps", ...data }),     //获取当前的操作步骤
    SaveSteps: (data) => get(url, { App: "SaveCurrent", ...data }),     //保存当前的操作步骤
    ReadySteps: (data) => get(url, { App: "StepsS", ...data }),     //获取已操作完成的步骤

    // 题目
    GetAllQues: (data) => get(url, { App: "SLBH", ...data }),     //获取当前操作步骤的所有题目
    GetNowQues: (data) => get(url, { App: "DT", ...data }),     //当前步数的题目信息

    // 当前步骤，操作到最后一步（保存当前步骤和答案）
    SaveBZ: (data) => get(url, { App: "SaveBZ", ...data }),     //保存答案1
    SaveBX: (data) => get(url, { App: "SaveXX", ...data }),     //保存答案2

}

// 主页(inBusiness)
export const http_inBusiness = {
    GetTask: (data) => get(url, { App: "TASK", ...data }),     //获取任务操作信息

}

// 步骤一（右侧按钮进入的页面）
export const http_step1 = {
    GetQues: (data) => get(url, { App: "DT", ...data }),     //获取题目信息

    // 当前步骤，操作到最后一步（保存当前步骤和答案）
    SaveBZ: (data) => get(url, { App: "SaveBZ", ...data }),     //保存答案1
    SaveBX: (data) => get(url, { App: "SaveXX", ...data }),     //保存答案2
}


// 步骤二（右侧按钮进入的页面）
export const http_step2 = {
    GetQues: (data) => get(url, { App: "DT", ...data }),     //获取题目信息

    // 当前步骤，操作到最后一步（保存当前步骤和答案）
    SaveBZ: (data) => get(url, { App: "SaveBZ", ...data }),     //保存答案1
    SaveBX: (data) => get(url, { App: "SaveXX", ...data }),     //保存答案2
}

// 步骤五-单据填写（右侧按钮进入的页面）
export const http_step5 = {
    GetBill:(data)=>get(url,{App: "GetBillNo",...data }),   //获取上一步选中的表单
    SaveBills: (data) => post(url, { App: "SaveBills", ...data }),     //提交表单
}

// 步骤六-单据审核（右侧按钮进入的页面）
export const http_step6= {
    GetBillData:(data)=>get(url,{App: "GetBills",...data }),   //获取表单和已填写的数据
    FailBill:(data)=>get(url,{App: "NoApp",...data }),   //审核不通过

}


// 步骤七-单据审核（右侧按钮进入的页面）
export const http_step7= {
    GetScene:(data)=>get(url,{App: "GetScene",...data }),   //获取已完成状态

}





