import {
    mmReactComponentProps,
    mmReactComponentType,
    mmReactElement,
    mmReactElementType,
    mmReactNode
} from "./../adapter/react-adapter";


export type UIElement = mmReactElement
export type UIElementType = mmReactElementType
export type UINode = mmReactNode
export type UIComponent<P> = mmReactComponentType<P>
export type UIComponentProps<P extends UIElementType> = mmReactComponentProps<P>
export type MixType = string | boolean | number