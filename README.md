# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

### 安装的插件

1. <b>vite-plugin-pages</b>——根据文件自动构建路由&emsp;https://github.com/hannoeru/vite-plugin-pages<br>
   `npm install -D vite-plugin-pages`
   `npm install vue-router@next`
2. <b>vite-plugin-vue-layouts</b>——页面布局结构,配合上面的一起使用&emsp; https://github.com/JohnCampionJr/vite-plugin-vue-layouts<br>
   `npm install -D vite-plugin-vue-layouts`
3. <b>sass</b>——css 预处理器&emsp;https://cn.vitejs.dev/guide/features.html#css-pre-processors<br>
   `npm install -D sass`
4. <b>axios</b>——axios 基于 promise 的请求&emsp;http://www.axios-js.com/zh-cn/docs/<br>
   `npm install axios`
5. <b>vditor</b>——mardown 编辑器&emsp;https://ld246.com/article/1549638745630<br>
   `npm install vditor --save`
6. <b>高德地图</b>——高德地图的 JSAPI&emsp;https://lbs.amap.com/api/jsapi-v2/guide/abc/load<br>
   `npm i @amap/amap-jsapi-loader --save`
