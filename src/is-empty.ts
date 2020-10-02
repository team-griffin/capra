const isEmpty = <T extends any>(obj: T) => {
  if (obj === null) {
    return false;
  }
  if (obj === void 0) {
    return true;
  }
  if (obj === '') {
    return true;
  }
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  if (typeof obj === 'object') {
    return Object.keys(obj).length === 0;
  }
  return false;
};

export default isEmpty;
