import React, {ChangeEvent, useState} from "react";
import s from './InputSetNumber.module.css'

type InputSetNumberPropsType = {
    initialValue: string
    setValue: (value: string) => void
    styleClass?: string
    label?: string
    setInputError: (error: string) => void
}

export function InputSetNumber(props: InputSetNumberPropsType) {
    const [error, setError] = useState<boolean>(false)

    let finalInputClass = `${s.input} ${props.styleClass} ${error && s.error}`

    const onNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (Number(event.currentTarget.value) < 0) {
            setError(true)
            props.setInputError('The value must be greater than zero')
        } else {
            setError(false)
            props.setInputError('')
        }
        props.setValue(event.currentTarget.value)
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