/**
 * 获取浏览器的Canvas指纹，用来标识设备上的浏览器
 * 理论上，对于 不同计算机实体的不同浏览器会生成不同的指纹标识
 * @returns 
 * 
 * 
 * 经过测试，ctx.fillRect() 会导致在 Safari、Chrome、Edge 等浏览器刚启动初期渲染的Canvas指纹不一致，Safari经常需要刷新三次才能得到稳定的 Canvas指纹
 * 所以，这里不用 ctx.fillRect() 进行绘制；
 * 另外部分 window.navigator 中的数据也浏览器刚启动前期，也会有变化
 * 所以，这里也不使用 window.navigator 
 */
export function getCanvasFingerprint():string {
    // 带有各种字符的文本，充分体现渲染差异
    const text = "?! 科研者 GuoBinYong abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/？！"
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if  (ctx){
        ctx.textBaseline = "alphabetic";
        ctx.font = '14px Arial';
        ctx.fillStyle = '#ccc';
        ctx.fillText(text, 2, 3);
    }
    const dataURL = canvas.toDataURL('image/jpeg');
    return dataURL.replace("data:image/jpeg;base64,","");
}



// 存储 id 的 key 的前缀
let Key_Prefix = "_?!_"

// 设置 用于存储 id 的 key 的前缀
export function setKeyPrefix(keyPrefix:string){
    Key_Prefix = keyPrefix;
}

//存储 uuid 的key后缀
const uuid_KeySuffix = "_uuid";


/**
 * 获取 UUID 通用唯一识别码，用于标识浏览器，对于不同电脑实体的不同浏览器 会有不同的值
 * @returns 
 */
export function getUUID():string{
    const key = Key_Prefix + uuid_KeySuffix;
    let id = localStorage.getItem(key);
    if (!id){
        id = getCanvasFingerprint();
        localStorage.setItem(key,id);
    }
    return id;
}



/**
 * 生成唯一的标识符，每次调用生成的都不一样
 * @returns {string}
 */
export function createUniqueIdentifier():string {
    return Date.now().toString() + Math.random();
}

// 存储 uuid 的key的后缀
const ucid_KeySuffix = "_ucid"

/**
 * 获取 UCID
 * 如果不重置，则每个浏览器中同一个域名下每次获取的都一样
 * @returns 
 */
export function getUCID():string{
    const key = Key_Prefix + ucid_KeySuffix;
    let id = localStorage.getItem(key);
    if (!id){
        id = createUniqueIdentifier();
        localStorage.setItem(key,id);
    }
    return id;
}


/**
 * 设置 UCID
 * @param {*} id 
 */
export function setUCID(id:string){
    const key = Key_Prefix + ucid_KeySuffix;
    localStorage.setItem(key,id);
}



