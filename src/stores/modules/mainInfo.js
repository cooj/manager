import { Store } from "../main";
class mainInfo extends Store {
    data() {
        return {
            count: 0,
            role: 1, //用户角色
            current: 1,  //当前步骤
            completeList: []     //已经操作完成的步骤
        };
    }

    setData(key, val) {   //更新data数据
        this.state[key] = val;
        console.log('(key, val) :>> ', key, val);
        console.log(this.state[key]);
    }
    pushCompete(key,val){   //追加进数组
        this.state[key].push(val);
    }
}

export default new mainInfo();