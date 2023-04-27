import { Panel } from "../utils/UI_data";
declare const _sfc_main: import("vue").DefineComponent<{
    panel: {
        type: () => Panel;
    };
    barPlace: {
        type: StringConstructor;
    };
}, {
    barRef: import("vue").Ref<HTMLElement | null>;
    barPlace: string | undefined;
    isShow: import("vue").Ref<string>;
    isResizing: import("vue").Ref<boolean>;
    coverSize: import("vue").Ref<{
        width: number;
        height: number;
        left: number;
        top: number;
    }>;
    onMouseDown: (event: MouseEvent) => void;
    onMouseMove: (event: MouseEvent) => void;
    onMouseUp: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    panel: {
        type: () => Panel;
    };
    barPlace: {
        type: StringConstructor;
    };
}>>, {}>;
export default _sfc_main;
