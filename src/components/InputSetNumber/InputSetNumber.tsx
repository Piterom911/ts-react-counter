import React, {ChangeEvent, useEffect, useState} from "react";
import s from './InputSetNumber.module.css'
import {useSelector} from "react-redux";
import {AppRootStateTypes} from "../../state/store";

type InputSetNumberPropsType = {
    initialValue: number
    setValue: (value: number) => void
    styleClass?: string
    label?: string
    inputError: string
}

export function InputSetNumber(props: InputSetNumberPropsType) {

    const {maxValue, minValue} = useSelector<AppRootStateTypes, {maxValue: number, minValue: number}>(state => state.counterState)

    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (maxValue > 0 && minValue > 0) setError(maxValue <= minValue)
    }, [maxValue, minValue])

    let finalInputClass = `${s.input} ${props.styleClass} ${error && s.error}`

    const onNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.currentTarget.value) < 0 || maxValue <= minValue) {
            setError(true)
        } else {
            setError(false)
        }
        props.setValue(+event.currentTarget.value)
    }

    return (
        <label className={s.wrapper}>
            {props.label && <span>{props.label}</span>}
            <input value={props.initialValue}
                   onChange={onNumberChangeHandler}
                   className={finalInputClass}
                   type="number"/>
        </label>
    )
}