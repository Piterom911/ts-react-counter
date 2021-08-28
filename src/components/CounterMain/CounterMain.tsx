import React, {useState} from "react";
import s from './CounterMain.module.css'
import {Value} from "../Value/Value";
import {Button} from "../Button/Button";

type CounterMainPropsType = {
    inputError: string
    isSettings: boolean
    maxValue: number
    minValue: number
    currentValue: number
    setCurrentValue: (currentValue: number) => void
}

export function CounterMain(props: CounterMainPropsType) {
    let tempValue = props.currentValue

    const incDisabled = !!props.inputError || props.isSettings || props.currentValue >= props.maxValue

    const increaseValue = () => {
        if (tempValue < props.maxValue) props.setCurrentValue(tempValue + 1)
    }

    const resetValue = () => props.setCurrentValue(props.minValue)


    const notificationClass = props.isSettings && !props.inputError ? s.notMessage : s.errorMessage
    const notificationData = props.isSettings && !props.inputError
        ? 'Enter values and press «Set»'
        : props.inputError


    return (
        <div className="wrapper">
            {props.inputError || props.isSettings
                ? <span className={notificationClass}>{notificationData}</span>
                : <Value value={tempValue} isMax={props.currentValue === props.maxValue}/>}

            <div className={'buttonWrapper'}>
                <Button isDisabled={incDisabled} onClickHandler={increaseValue}>Inc</Button>
                <Button isDisabled={!!props.inputError || props.currentValue === props.minValue || props.isSettings} onClickHandler={resetValue}>Reset</Button>
            </div>
        </div>
    )
}