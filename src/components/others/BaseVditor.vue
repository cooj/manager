<!--
  markdown编辑器组件(Vditor)
  文档地址：(https://b3log.org/vditor/demo/index.html、https://ld246.com/article/1549638745630)
-->
<template>
  <div id="vditor"></div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import Vditor from "vditor";
import "vditor/dist/index.css";
// import emojis from "./emojis.json";
// let arr = {};
// for (let i = 0; i < emojis.length; i++) {
//   const element = emojis[i];
//   arr[element.emoji_name] = element.emoji;
// }
// //console.log(arr);
let emoji = {
  smile: "😄",
  laughing: "😆",
  dizzy_face: "😵",
  sob: "😭",
  cold_sweat: "😰",
  sweat_smile: "😅",
  cry: "😢",
  triumph: "😤",
  heart_eyes: "😍",
  relieved: "😌",
  "+1": "👍",
  "-1": "👎",
  100: "💯",
  clap: "👏",
  bell: "🔔",
  gift: "🎁",
  question: "❓",
  bomb: "💣",
  heart: "❤️",
  coffee: "☕️",
  cyclone: "🌀",
  bow: "🙇",
  kiss: "💋",
  pray: "🙏",
  anger: "💢",
};
// //console.log(emoji);

const props = defineProps({
  value: {
    //默认文字
    type: String,
    default: null,
  },
  height: {
    default: "auto",
  },
});

const emits = defineEmits(["update:value", "newValue"]);

const data = reactive({
  content: "",
  editor: "", //用于存放编辑器对象
});

onMounted(() => {
  data.editor = new Vditor("vditor", {
    // theme: "dark", // light，dark
    minHeight: 360,
    height: props.height, //编辑器的高度
    value: props.value, //默认文字
    placeholder: "欢迎使用 vditor !", //提示文字
    // mode: "sv",
    mode: "wysiwyg",
    preview: {
      //   mode: "both", //editor编辑模式，both编辑预览模式
      hljs: {
        style: "native", //代码块高亮设置为vscode模式
        lineNumber: true, //启用行号
      },
      actions: [
        //预览配置
        "desktop",
        "tablet",
        "mobile",
        "mp-wechat",
      ],
    },
    hint: {
      emoji: emoji, //自定义图标配置
      emojiTail: `<a href="https://www.webfx.com/tools/emoji-cheat-sheet/#emojis-tabs" target="_blank">更多表情</a>`,
    },
    outline: {
      enable: true, //显示大纲
    },
    resize: {
      enable: true, //启用拖拽调节高度
    },
    counter: {
      enable: true, //开启字数统计
      type: "text", //text:文本字数统计,默认为Markdown字数统计
    },
    toolbarConfig: {
      pin: true, //开启滚动时固定工具栏
    },
    cache: {
      enable: false, //不启用缓存
    },
    upload: {
      //文件自定义上传
      handler: (files) => {
        // 参数说明 https://ld246.com/article/1549638745630#options-upload
        // 参数案例 https://b3log.org/vditor/demo/advanced-upload.html

        // 没搭建服务器环境,这里采用的是将文件转换为base64文本的形式
        // //console.log(files);

        let type = {
          img: "data:image/",
          video: "data:video/",
        };

        for (let i = 0; i < files.length; i++) {
          let reader = new FileReader();
          reader.readAsDataURL(files[i]);
          reader.onload = function (e) {
            // //console.log(reader);
            // //console.log(this);
            // //console.log(e);
            let html = "";
            if (new RegExp(type.img, "i").test(this.result)) {
              html = `<img src="${this.result}" alt="">`;
            } else if (new RegExp(type.video, "i").test(this.result)) {
              html = `<video src="${this.result}" controls></video>`;
            }

            document.querySelectorAll(
              ".vditor-content .vditor-reset"
            )[0].innerHTML += html;
          };
        }
      },
    },
    input(md) {
      // //console.log(this);
      // //console.log(data.editor);
      let html = data.editor.getHTML();
      data.content = html;
      emits("update:value", html);
      emits("newValue", html, md);
    },
  });
});
</script>

<style>
</style>