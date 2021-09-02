import React, {useEffect} from 'react';
import './App.css';
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {CounterMain} from "./components/CounterMain/CounterMain";
import {
    CounterReducerState,
    setCounterValueAC,
    setInputErrorAC,
    setMaxValueAC,
    setMinValueAC,
    setSettingsAC
} from "./state/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateTypes} from "./state/store";

function AppWithRedux() {

    const {
        inputError,
        maxValue,
        minValue,
        settings,
        value
    } = useSelector<AppRootStateTypes, CounterReducerState>(state => state.counterState)

    const dispatch = useDispatch()

    useEffect(() => {
        if (maxValue <= minValue) {
            dispatch(setSettingsAC(false))
            dispatch(setInputErrorAC('Max Value should be greater than Min Value'))
        } else if (maxValue < 0 || minValue < 0) {
            dispatch(setSettingsAC(false))
            dispatch(setInputErrorAC('The value must be greater than zero'))
        } else if (!!inputError) {
            dispatch(setInputErrorAC(''))
        }
    }, [maxValue, minValue])

    const onsetMaxValue = (value: number) => {
        dispatch(setSettingsAC(true))
        dispatch(setMaxValueAC(value))
    }
    const onsetMinValue = (value: number) => {
        dispatch(setSettingsAC(true))
        dispatch(setMinValueAC(value))
    }
    const setValue = (value: number) => {
        dispatch(setCounterValueAC(value))
    }
    const setSettings = (set: boolean) => {
        dispatch(setSettingsAC(set))
    }

    return (
        <div className="App">
            <CounterSettings maxValue={maxValue}
                             minValue={minValue}
                             isSettings={settings}
                             setCurrentValue={setValue}
                             setMaxValue={onsetMaxValue}
                             setMinValue={onsetMinValue}
                             setSettings={setSettings}
                             inputError={inputError}/>
            <CounterMain isSettings={settings}
                         currentValue={value}
                         maxValue={Number(maxValue)}
                         minValue={Number(minValue)}
                         setCurrentValue={setValue}
                         inputError={inputError}/>
        </div>
    );
}

export default AppWithRedux;
