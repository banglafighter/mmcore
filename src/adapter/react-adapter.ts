import * as React from "react"

export type mmReactNode = React.ReactNode
export type mmReactComponentType<P> = React.ComponentType<P>
export type mmReactComponentProps<P extends React.ElementType> = React.ComponentProps<P>;
export type mmReactElementType = React.ElementType

export const mmReactUseState = React.useState
export const mmReactUseMemo = React.useMemo
export const mmReactUseCallback = React.useCallback
export const mmReactUseContext = React.useContext
export const MmReactFragment = React.Fragment

export const mmReactUseRef = React.useRef

export const mmReactLazy = React.lazy

export const MmReactSuspense = React.Suspense


export type {
    RefObject as MMReactRefObject,
    ChangeEvent as MMReactChangeEvent,
    CSSProperties as MMReactCSSProperties
} from "react"

export {
    forwardRef as mmReactForwardRef,
    useImperativeHandle as mmReactUseImperativeHandle,
    cloneElement as mmReactCloneElement,
    ReactElement as mmReactElement,
    createRef as mmReactCreateRef,
    createContext as mmReactCreateContext,
    useEffect as mmReactUseEffect
} from "react"