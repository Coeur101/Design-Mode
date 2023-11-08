class singleDog {
  constructor() {}
  show() {
    console.log('这是一个单例对象')
  }
  // 静态方法只能通过类调用
  static getInstance() {
    // 判断是否已经创建过实例
    if (!singleDog.instance) {
      // 如果这个实例还没有创建则先创建一个实例赋值
      singleDog.instance = new singleDog()
    }
    // 如果实例存在则返回这个唯一的实例
    return singleDog.instance
  }
}
const s1 = singleDog.getInstance()
const s2 = singleDog.getInstance()
console.log(s1 === s2)
