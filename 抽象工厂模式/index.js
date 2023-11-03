// 创建一个骨架,手机的共性,手机拥有操作系统与硬件
class MobilePhoneFactory {
  // 骨架里的方法不能够被调用
  createOS() {
    throw new Error('骨架中的创建系统方法不能被调用,需要重写')
  }
  createHardware() {
    throw new Error('骨架中的创建硬件接口方法不能被调用,需要重写')
  }
}
// 创建一个系统骨架,他也是共性
class OS {
  controlHardWare() {
    throw new Error('不能被调用,需要重写')
  }
}
class Andorid extends OS {
  controlHardWare() {
    console.log('Android手机')
  }
}
// 创建一个手机,手机继承共性
class MyPhone extends MobilePhoneFactory {
  constructor(os, hardware) {
    // super为了让this指向子类,子类继承父类后
    super()
    this.os = os
    this.hardware = hardware
  }
  // 重写父类方法
  createOS() {
    return this.os
  }
  createHardware() {
    return this.hardware
  }
}
const phone = new MyPhone(new Andorid(), '高通骁龙')
const phoneos = phone.createOS()
// 执行手机系统
phoneos.controlHardWare()
// 当有一天这个手机过时了,或者系统过时了或者硬件过时了,我们都只需要从他的骨架上去扩展
// 重新创建一个对象就好，这就是抽象工厂模式
// 开放封闭原则，对扩展开放，对修改封闭
