
/**
 * @description 前端使用canvas绘制验证码
 * @constructor GVerify
 * @param {string} el 调用的标签类名(id、class、标签名等等)
 * @param {object} opt 参数变量,默认使用内部options变量的值
 * @example 
 * const verify = new GVerify("#l_code", {
    length: "6",
    width: 150,
    height: 44,
    type: "blend",
  });
 */
class GVerify {
    constructor(el, opt) {
        this.$el = el;
        this.options = {
            width: '',
            height: '',
            type: 'number',
            length: 4, //验证码长度
        };

        // 合并参数，根据传入的参数，修改默认参数值
        this.options = { ...this.options, ...opt };

        // 进一步处理参数
        let con = document.querySelectorAll(this.$el)[0];
        con.innerHTML='';
        this.options['width'] = this.options['width'] || con.offsetWidth; //参数width有值，就使用传入的值，没有就使用父元素的宽度
        this.options['height'] = this.options['height'] || con.offsetHeight; //参数height有值，就使用传入的值，没有就使用父元素的高度

        this.options['length'] = parseInt(this.options['length']) || 4;

        let numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //纯数字数组
        let letter = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(','); //纯字母数组
        if (this.options['type'] === 'blend') { // 判断验证码类型
            this.options['txtArr'] = [...numArr, ...letter];
        } else if (this.options['type'] === 'letter') {
            this.options['txtArr'] = letter;
        } else {
            this.options['txtArr'] = numArr;
        }

        this._init(); //生成canvas
        this.refresh(); //生成验证码
    }
    /** 初始化方法**/
    _init() {
        let _this = this;
        let canvas = document.createElement('canvas');
        canvas.width = this.options['width'];
        canvas.height = this.options['height'];
        canvas.style = 'cursor:pointer;vertical-align: bottom;user-select: none;';
        canvas.innerHTML = '您的浏览器版本不支持canvas';
        document.querySelectorAll(this.$el)[0].appendChild(canvas);
        // console.log(canvas);
        // document.querySelectorAll(this.$el)[0].innerHTML = canvas;
        canvas.onclick = function () {
            _this.refresh();
        };
    }
    /** 生成验证码**/
    refresh() {
        this.options["code"] = ''; //先清空一下原来的值
        let canvas = document.querySelectorAll(this.$el + '>canvas')[0];
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            ctx.textBaseline = 'middle';
            ctx.fillStyle = randomColor(180, 240);
            ctx.fillRect(0, 0, this.options['width'], this.options['height']);

            let txtArr = this.options['txtArr'];
            let len = this.options['length'];
            for (let i = 1; i <= len; i++) {
                let txt = txtArr[randomNum(0, txtArr.length)];
                this.options["code"] += txt;
                ctx.font = randomNum(this.options['height'] / 2, this.options['height']) + 'px bold SimHei'; // 随机生成字体大小
                ctx.fillStyle = randomColor(50, 160); // 随机生成字体颜色
                ctx.shadowOffsetX = randomNum(-3, 3);
                ctx.shadowOffsetY = randomNum(-3, 3);
                ctx.shadowBlur = randomNum(-3, 3);
                ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
                let x = this.options['width'] / (len + 1) * i;
                let y = this.options['height'] / 2;
                let deg = randomNum(-30, 30);
                /** 设置旋转角度和坐标原点**/
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.fillText(txt, 0, 0);
                /** 恢复旋转角度和坐标原点**/
                ctx.rotate(-deg * Math.PI / 180);
                ctx.translate(-x, -y);
            }
            /** 绘制干扰线**/
            for (let i = 0; i < 4; i++) {
                ctx.strokeStyle = randomColor(40, 180);
                ctx.beginPath();
                ctx.moveTo(randomNum(0, this.options['width']), randomNum(0, this.options['height']));
                ctx.lineTo(randomNum(0, this.options['width']), randomNum(0, this.options['height']));
                ctx.stroke();
            }
            /** 绘制干扰点**/
            for (let i = 0; i < this.options['width'] / 4; i++) {
                ctx.fillStyle = randomColor(0, 255);
                ctx.beginPath();
                ctx.arc(randomNum(0, this.options['width']), randomNum(0, this.options['height']), 1, 0, 2 * Math.PI);
                ctx.fill();
            }
        } else {
            alert("你的浏览器不支持Canvas,建议您使用最新版本的浏览器!");
            return;
        }

    }
    /** 验证验证码**/
    validate(code) {
        code = code.toLowerCase();
        let v_code = this.options["code"].toLowerCase();
        if (code == v_code) {
            return true;
        } else {
            this.refresh(); //验证错误就更新验证码
            return false;
        }
    }
}


/** 生成一个随机数(大于等于min,小于max的数)**/
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

/** 生成一个随机色**/
function randomColor(min, max) {
    let r = randomNum(min, max)
    let g = randomNum(min, max)
    let b = randomNum(min, max)
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}

export default GVerify


