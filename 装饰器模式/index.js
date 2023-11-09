function classZS(target) {
  target.out = 'test'
  return target
}
@classZS
class Demo {}
console.log(Demo.out)
