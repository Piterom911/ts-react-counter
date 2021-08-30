import React, {useEffect, useReducer} from 'react';
import './App.css';
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {CounterMain} from "./components/CounterMain/CounterMain";
import {
    counterReducer,
    setCounterValueAC,
    setInputErrorAC,
    setMaxValueAC,
    setMinValueAC,
    setSettingsAC
} from "./state/counterReducer";

function AppWithUseReducer() {

    const [{inputError, maxValue, minValue, settings, value}, dispatch] = useReducer(counterReducer, {
        inputError: '',
        maxValue: '0',
        minValue: '0',
        settings: false,
        value: 0,
    })

    useEffect( () => {
        if (Number(maxValue) <= Number(minValue)) {
            setSettings(false)
            setInputError('Max Value should be greater than Min Value')
        } else if (Number(maxValue) < 0 || Number(minValue) < 0) {
            setSettings(false)
            setInputError('The value must be greater than zero')
        } else if (!!inputError) {
            setInputError('')
        }
    }, [maxValue, minValue])
    useEffect( () => {
        const min = localStorage.getItem("minValue")
        const max = localStorage.getItem("maxValue")
        if (min) dispatch(setMinValueAC(min))
        if (max) dispatch(setMaxValueAC(max))
        setInputError('')
        setValue(Number(min))
    }, [])
    const onsetMaxValue = (value: string) => {
        dispatch(setSettingsAC(true))
        dispatch(setMaxValueAC(value))
    }
    const onsetMinValue = (value: string) => {
        dispatch(setSettingsAC(true))
        dispatch(setMinValueAC(value))
    }
    const setValue = (value: number) => {
        dispatch(setCounterValueAC(value))
    }
    const setSettings = (set: boolean) => {
        dispatch(setSettingsAC(set))
    }
    const setInputError = (error: string) => {
        dispatch(setInputErrorAC(error))
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
                         setInputError={setInputError} />
        <CounterMain isSettings={settings}
                     currentValue={value}
                     maxValue={Number(maxValue)}
                     minValue={Number(minValue)}
                     setCurrentValue={setValue}
                     inputError={inputError} />
    </div>
  );
}

export default AppWithUseReducer;
