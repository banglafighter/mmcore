import * as React from "react"

export type mmReactNode = React.ReactNode
export type mmReactComponentType<P> = React.ComponentType<P>
export type mmReactComponentProps<P extends React.ElementType> = React.ComponentProps<P>;
export type mmReactElement = React.ElementType

export const mmReactUseState = React.useState
export const mmReactUseMemo = React.useMemo
export const mmReactUseCallback = React.useCallback
export const mmReactUseEffect = React.useEffect
export const mmReactUseContext = React.useContext
export const MmReactFragment = React.Fragment

export const mmReactUseRef = React.useRef

export const mmReactCreateContext = React.createContext
export const mmReactLazy = React.lazy

export const MmReactSuspense = React.Suspense


export type { RefObject as MMReactRefObject } from "react"
export type { ChangeEvent as MMReactChangeEvent } from "react"
export type { CSSProperties as MMReactCSSProperties } from "react"