import {mmReactComponentProps, mmReactComponentType, mmReactElement, mmReactNode} from "./../adapter/react-adapter";


export type UIElement = mmReactElement
export type UINode = mmReactNode
export type UIComponent<P> = mmReactComponentType<P>
export type UIComponentProps<P extends UIElement> = mmReactComponentProps<P>
export type MixType = string | boolean | number