const getImageUrl = (url) => {
    const base_url = import.meta.env.BASE_URL; //获取vite.config.js配置的base,默认是根目录/
    // return new URL(base_url + url, import.meta.url).href
    return new URL(base_url + url, window.location.href).href
    // return new URL("../../assets/"+url, import.meta.url).href
    // return new URL("../../assets/"+url, window.location.href).href
}

/**
* 获取本地图
* @param id // 文件名id 
* @returns {*|string}
*/
export const BillImages = (id) => {
    // return new URL(`/src/assets/images/bill/bill${id}.png`, import.meta.url).href;
    // return new URL(`/src/assets/images/bill/bill${id}.png`, window.location.href).href;
    return getImageUrl(`images/bill/bill${id}.png`)
}

// key 

export const sceneMap = {
    index: getImageUrl(`images/sceneMap.png`),
}

//test
export const inBusinessFileList = {
    // step1: getImageUrl(`video/step1.mp4`),
    // step2: getImageUrl(`video/step2.mp4`),
}

//接待客户
export const receptionClient = (key) => {
    return {
        step1: getImageUrl(`video/receptionClient/1-${key}.mp4`),
        step2: getImageUrl(`video/receptionClient/2and4.mp4`),
        step3: getImageUrl(`video/receptionClient/3-${key}.mp4`),
        step4: getImageUrl(`video/receptionClient/2and4.mp4`),
        step5: getImageUrl(`video/receptionClient/5.mp4`),
    }
}

//疑难解答
export const troubleShooting = (key, type) => {
    // console.log(key, type)
    return {
        step1: getImageUrl(`video/troubleShooting/1-${key}-${type}.mp4`),
        step2: getImageUrl(`video/troubleShooting/2-${key}-${type}.mp4`),
        step3: getImageUrl(`video/troubleShooting/3-${key}-${type}.mp4`),
        step4: getImageUrl(`video/troubleShooting/4-${key}-${type}.mp4`),
    }
}

//协助取号
export const assistInNumber = (key) => {
    return {
        step1: getImageUrl(`video/assistInNumber/1-${key}.mp4`),
        step2: getImageUrl(`video/assistInNumber/2.mp4`),
        step3: getImageUrl(`video/assistInNumber/3-${key}.mp4`),
        // step4: getImageUrl(`video/troubleShooting/4-${key}.mp4`),
    }
}

//引导填单
export const guidedFilling = (key) => {
    return {
        step1: getImageUrl(`video/guidedFilling/1-${key}.mp4`),
        step2: getImageUrl(`video/guidedFilling/2-${key}.mp4`),
    }
}



//单据填写
export const documentFilling = () => {
    return {
        step1: getImageUrl(`video/documentFilling/1.mp4`),
        step2: getImageUrl(`video/documentFilling/2.mp4`),
    }
}

//单据审核
export const documentApproval = (key) => {
    return {
        step1: getImageUrl(`video/documentApproval/1-${key}.mp4`),
        step2: getImageUrl(`video/documentApproval/2-${key}.mp4`),
    }
}

//客户引导
export const customerGuidance = (key, type) => {
    return {
        step1: getImageUrl(`video/customerGuidance/1-${key}-${type}.mp4`),
    }
}

//现场处理
export const fieldTreatment = (key, type) => {
    return {
        step1: getImageUrl(`video/fieldTreatment/1-${key}-${type}.mp4`),
        step2: getImageUrl(`video/fieldTreatment/2-${key}-${type}.mp4`),
        step3: getImageUrl(`video/fieldTreatment/3-${key}-${type}.mp4`),
        step4: getImageUrl(`video/fieldTreatment/4-${key}-${type}.mp4`),
    }
}

//送别
export const goodbye = (key) => {
    return {
        step1: getImageUrl(`video/goodbye/1-${key}.mp4`),
        step2: getImageUrl(`video/goodbye/2-${key}.mp4`),
        step3: getImageUrl(`video/goodbye/3-${key}.mp4`),
    }
}
