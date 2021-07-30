import React from 'react'
import s from './Value.module.css'

export type ValuePropsType = {
    value: number,
    isMax: boolean
}

export function Value(props: ValuePropsType) {
    return (
        <div className={`${s.wrapper} ${props.isMax ? s.max : ''}`}>{props.value}</div>
    )
}