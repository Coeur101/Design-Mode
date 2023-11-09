// 创建一个方法，表示类，并将localStorage的两个常用api挂载到他的原型链上
function StroageBase() {}
StroageBase.prototype.setItem = (key, value) => {
  localStorage.setItem(key, value)
}
StroageBase.prototype.getItem = (key) => {
  return localStorage.getItem(key)
}
// 创建一个自调用函数来判断是否产生了StroageBase的实例
const stroage = (function () {
  let instance = null
  return function () {
    // 判断自由变量是否为null
    if (!instance) {
      // 如果为null则new出唯一实例
      instance = new StroageBase()
    }
    return instance
  }
})()
const s1 = stroage()
const s2 = stroage()
console.log(s1 === s2)
