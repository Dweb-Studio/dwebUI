import { CSSProperties, Component, ComponentInternalInstance, Ref, StyleValue, markRaw, reactive } from "vue";

export function isNotLastDom(
  currentDom: Ref<Element | undefined>,
  vueInstance: ComponentInternalInstance | null
) {
  let result: { last: boolean; nextPanel: HTMLElement | null | undefined } = {
    last: true,
    nextPanel: null,
  };
  if (currentDom.value) {
    let parent = currentDom.value.parentElement;
    if (parent) {
      let sameLevel = parent.childNodes;
      sameLevel.forEach((item: any, index: number) => {
        if (!item.__vueParentComponent) {
          return result;
        }
        if (item.__vueParentComponent.uid == vueInstance!.uid) {
          if (index == sameLevel.length - 1) {
            result.last = true;
            result.nextPanel = null;
            return result;
          }
          if (sameLevel[index + 1]) {
            result.last = false;
            result.nextPanel = sameLevel[index + 1].firstChild?.parentElement;
            return result
          }
        }
      });
    }
  }
  return result;
}

export class Workbench {
  styleValue: CSSProperties = {
    width: "100%",
    height: "100%",
    flexDirection: "row"
  };
  refDom: HTMLElement | null = null;
  panels: Panel[] = [];
  constructor(option?: { styleValue?: CSSProperties; panels?: Panel[] }) {
    if (option) {
      if (option.styleValue) {
        if (option.styleValue.width) {
          this.styleValue.width = option.styleValue.width;
        }
        if (option.styleValue.height) {
          this.styleValue.height = option.styleValue.height;
        }
        if (option.styleValue.flexDirection) {
          this.styleValue.flexDirection = option.styleValue.flexDirection;
        }
      }
      if (option.panels) {
        this.panels = option.panels;
      }
    }
  }
}

export class Panel {
  name: string = "新面板";
  styleValue: CSSProperties = {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "relative",
    top: "0px",
    left: "0px",
  };
  dragBar: boolean = true;
  cacheSize: {
    width: string,
    height: string
  } = {
      width: "0%",
      height: "0%"
    };
  refDom: HTMLElement | null = null;
  workbench: Workbench | null = null;
  component: Component | null = null;
  

  constructor(option: { name?: string; styleValue?: CSSProperties; workbench?: Workbench, component?: Component,dragBar?: boolean }) {
    if (option) {
      
      if (option.name) {
        this.name = option.name;
      }
      if (option.styleValue) {
        if (option.styleValue.width) {
          this.styleValue.width = option.styleValue.width;
        }
        if (option.styleValue.height) {
          this.styleValue.height = option.styleValue.height;
        }
        if (option.styleValue.backgroundColor) {
          this.styleValue.backgroundColor = option.styleValue.backgroundColor;
        }
      }

      if (option.dragBar==false) {
        this.dragBar = option.dragBar;
      }
      

      if (option.workbench) {
        this.workbench = option.workbench;
        if (option.component) {
          console.error("Cannot set component if workbench is not null");
        }
      } else if (option.component) {
        this.component = markRaw(option.component);
      }
      
    }
  }
}

export function pixiStringToNumber(str: string, targetHeight: number) {
  let res: number = 0
  if (str.indexOf("px") != -1) {
    res = parseInt(str.replace("px", ''));
  }
  if (str.indexOf("%") != -1) {
    res = targetHeight * (parseInt(str.replace("%", '')) / 100)
  }
  return res
}

export function UIdataInstantiation(uiData: Workbench, width?: number|string, height?: number|string) {
  if (width !== undefined && height !== undefined) {
    if (typeof width === "number") {
      uiData.styleValue.width = width + "px";
    } else {
      uiData.styleValue.width = width;
    }
    if (typeof height === "number") {
      uiData.styleValue.height = height + "px";
    } else {
      uiData.styleValue.height = height;
    }
  }

  if (uiData.panels) {
    uiData.panels.forEach((panel) => {
      if (uiData.styleValue.flexDirection == "row") {
        panel.styleValue.width = panel.refDom?.clientWidth + "px";
        panel.styleValue.height = uiData.refDom?.clientHeight + "px";
        panel.styleValue.top = panel.refDom?.offsetTop + "px";
        panel.styleValue.position = "absolute";
        panel.styleValue.left = panel.refDom?.offsetLeft + "px";
      } else {
        panel.styleValue.width = panel.refDom?.clientWidth + "px";
        panel.styleValue.height = panel.refDom?.clientHeight + "px";
        panel.styleValue.top = panel.refDom?.offsetTop + "px";
        panel.styleValue.position = "absolute";
        panel.styleValue.left = panel.refDom?.offsetLeft + "px";
      }
      if (panel.workbench) {
        UIdataInstantiation(panel.workbench, "100%", "100%")
      }
    });
  }
}

export function resizeWindowUiData(uiData: Workbench, width?: number|string, height?: number|string) {
  // console.log(uiData)
  if (width !== undefined && height !== undefined) {
    if (typeof width === "number") {
      uiData.styleValue.width = width + "px";
    } else {
      uiData.styleValue.width = width;
    }
    if (typeof height === "number") {
      uiData.styleValue.height = height + "px";
    } else {
      uiData.styleValue.height = height;
    }
  }

  if (uiData.panels) {
    uiData.panels.forEach((panel) => {
      if (panel.styleValue) {
        panel.styleValue.width = panel.cacheSize.width;
        panel.styleValue.height = panel.cacheSize.height;
        panel.styleValue.top = "0px";
        panel.styleValue.position = "relative";
        panel.styleValue.left = "0px";
      }
      if (panel.workbench) {
        resizeWindowUiData(panel.workbench, "100%", "100%")
      }
    });
  }
}

export function traverse_UIdataFromJson(cachedUI_data: any, UI_data: Workbench) {
  UI_data.styleValue.width = cachedUI_data.styleValue.width;
  UI_data.styleValue.height = cachedUI_data.styleValue.height;

  if (UI_data.panels) {
    UI_data.panels.forEach((panel, index) => {
      if (panel.styleValue) {
        panel.styleValue.width = cachedUI_data.panels[index].styleValue.width;
        panel.styleValue.height = cachedUI_data.panels[index].styleValue.height;
      }
      if (panel.workbench) {
        traverse_UIdataFromJson(cachedUI_data.panels[index].workbench, panel.workbench)
      }
    });
  }
}