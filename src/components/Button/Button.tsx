import React from "react"
import s from './Button.module.css'

export type ButtonPropsType = {
    isDisabled: boolean,
    onClickHandler: () => void,
    children: React.ReactNode
}

export function Button(props: ButtonPropsType) {
    return <button onClick={ () => props.onClickHandler()} className={s.button} disabled={props.isDisabled}>{props.children}</button>
}