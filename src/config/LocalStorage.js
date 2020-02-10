class LocalStorage {
  setStorage(cname, cvalue, cb) {
    localStorage.setItem(cname, cvalue);
    cb();
  }

  removeStorage(cname, cb) {
    localStorage.removeItem(cname);
    cb();
  }
  getStorage(cname) {
    return localStorage.getItem(cname);
  }

  checkStorage(cname) {
    let stgName=localStorage.getItem(cname);
    
    if (stgName==undefined || stgName==null || stgName=="undefined") {
      return false;
    }
    else return true;
  }
}
export default new LocalStorage();
