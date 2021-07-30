import React from "react";
import s from './CounterSettings.module.css'
import {InputSetNumber} from "../InputSetNumber/InputSetNumber";
import {Button} from "../Button/Button";

type CounterSettingsPropsType = {
    maxValue: string
    minValue: string
    isSettings: boolean
    setCurrentValue: (currentValue: number) => void
    setMaxValue: (maxValue: string) => void
    setMinValue: (minValue: string) => void
    setSettings: (set: boolean) => void
    setInputError: (error: string) => void
}

export function CounterSettings(props: CounterSettingsPropsType) {
    const onClickSetHandler = () => {
        props.setSettings(false)
        props.setCurrentValue(Number(props.minValue))
        localStorage.setItem("maxValue", props.maxValue)
        localStorage.setItem("minValue", props.minValue)
    }
    return (
        <div className="wrapper">
            <div className="border">
                <InputSetNumber initialValue={props.maxValue}
                                setValue={props.setMaxValue}
                                setInputError={props.setInputError}
                                styleClass={''}
                                label={'Max Value'} />
                <InputSetNumber initialValue={props.minValue}
                                setValue={props.setMinValue}
                                setInputError={props.setInputError}
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