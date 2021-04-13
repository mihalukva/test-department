const lib = {
  objToArray(obj: any) {
    let arr = [];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        arr.push({ key: key, value: obj[key] });
      }
    }
    return arr;
  },
  arrayToObj(arr: Array<any>) {
    let obj: any = {};
    arr.forEach((item: any) => {
      obj[item.key] = item.value;
    });
    return obj;
  },
};

export default lib;
