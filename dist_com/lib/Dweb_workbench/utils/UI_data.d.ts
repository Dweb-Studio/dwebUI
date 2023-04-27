import { CSSProperties, Component, ComponentInternalInstance, Ref } from "vue";
export declare function isNotLastDom(currentDom: Ref<Element | undefined>, vueInstance: ComponentInternalInstance | null): {
    last: boolean;
    nextPanel: HTMLElement | null | undefined;
};
export declare class Workbench {
    styleValue: CSSProperties;
    refDom: HTMLElement | null;
    panels: Panel[];
    constructor(option?: {
        styleValue?: CSSProperties;
        panels?: Panel[];
    });
}
export declare class Panel {
    name: string;
    styleValue: CSSProperties;
    dragBar: boolean;
    cacheSize: {
        width: string;
        height: string;
    };
    refDom: HTMLElement | null;
    workbench: Workbench | null;
    component: Component | null;
    constructor(option: {
        name?: string;
        styleValue?: CSSProperties;
        workbench?: Workbench;
        component?: Component;
        dragBar?: boolean;
    });
}
export declare function pixiStringToNumber(str: string, targetHeight: number): number;
export declare function UIdataInstantiation(uiData: Workbench, width?: number | string, height?: number | string): void;
export declare function resizeWindowUiData(uiData: Workbench, width?: number | string, height?: number | string): void;
export declare function traverse_UIdataFromJson(cachedUI_data: any, UI_data: Workbench): void;
