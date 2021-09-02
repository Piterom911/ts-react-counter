import React from "react";
import s from './CounterSettings.module.css'
import {InputSetNumber} from "../InputSetNumber/InputSetNumber";
import {Button} from "../Button/Button";

type CounterSettingsPropsType = {
    maxValue: number
    minValue: number
    isSettings: boolean
    setCurrentValue: (currentValue: number) => void
    setMaxValue: (maxValue: number) => void
    setMinValue: (minValue: number) => void
    setSettings: (set: boolean) => void
    inputError: string
}

export function CounterSettings(props: CounterSettingsPropsType) {
    const onClickSetHandler = () => {
        props.setSettings(false)
        props.setCurrentValue(Number(props.minValue))
    }
    return (
        <div className="wrapper">
            <div className="border">
                <InputSetNumber initialValue={props.maxValue}
                                setValue={props.setMaxValue}
                                inputError={props.inputError}
                                styleClass={''}
                                label={'Max Value'} />
                <InputSetNumber initialValue={props.minValue}
                                setValue={props.setMinValue}
                                inputError={props.inputError}
                                styleClass={''}
                                label={'Min Value'} />
            </div>
            <div className={`buttonWrapper ${s.setButton}`}>
                <Button isDisabled={!props.isSettings}
                        onClickHandler={onClickSetHandler} >Set</Button>
            </div>
        </div>
    )
}