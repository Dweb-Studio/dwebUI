import "vue";
function isNotLastDom(currentDom, vueInstance) {
  let result = {
    last: true,
    nextPanel: null
  };
  if (currentDom.value) {
    let parent = currentDom.value.parentElement;
    if (parent) {
      let sameLevel = parent.childNodes;
      sameLevel.forEach((item, index) => {
        var _a;
        if (!item.__vueParentComponent) {
          return result;
        }
        if (item.__vueParentComponent.uid == vueInstance.uid) {
          if (index == sameLevel.length - 1) {
            result.last = true;
            result.nextPanel = null;
            return result;
          }
          if (sameLevel[index + 1]) {
            result.last = false;
            result.nextPanel = (_a = sameLevel[index + 1].firstChild) == null ? void 0 : _a.parentElement;
            return result;
          }
        }
      });
    }
  }
  return result;
}
function pixiStringToNumber(str, targetHeight) {
  let res = 0;
  if (str.indexOf("px") != -1) {
    res = parseInt(str.replace("px", ""));
  }
  if (str.indexOf("%") != -1) {
    res = targetHeight * (parseInt(str.replace("%", "")) / 100);
  }
  return res;
}
export {
  isNotLastDom,
  pixiStringToNumber
};
