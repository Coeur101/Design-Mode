class Storage {
  static getInstance() {
    // 不存在则先创建
    if (!Storage.instance) {
      Storage.instance = new Storage()
    }
    return Storage.instance
  }
  getItem(key) {
    if (!key) return
    return localStorage.getItem(key)
  }
  setItem(key, value) {
    return localStorage.setItem(key, value)
  }
}
