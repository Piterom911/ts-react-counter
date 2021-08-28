import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {CounterMain} from "./components/CounterMain/CounterMain";

type reducerState = {
    inputError: string
    maxValue: string
    minValue: string
    settings: boolean
    value: number
}

type reducerActionType = {
    type: 'SET-INPUT-ERROR' | 'SET-MAX-VALUE' | 'SET-MIN-VALUE' | 'SET-SETTINGS' | 'SET-VALUE'
    inputError?: string
    maxValue?: string
    minValue?: string
    settings?: boolean
    value?: number
}

const reducer = (state: reducerState, action: reducerActionType) => {
    switch (action.type) {
        case 'SET-INPUT-ERROR':
            return {...state, inputError: action.inputError}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue, settings: true}
        case 'SET-MIN-VALUE':
            return {...state, minValue: action.minValue, settings: true}
        case 'SET-SETTINGS':
            return {...state, settings: action.settings}
        case 'SET-VALUE':
            return {...state, value: action.value}
        default:
            return state
    }
}

function App() {
    // const [state, dispatch] = useReducer(reducer, {
    //     inputError: '',
    //     maxValue: '0',
    //     minValue: '0',
    //     settings: false,
    //     value: 0
    // })
    // console.log(state)
    // console.log(dispatch)

    const [inputError, setInputError] = useState<string>('')
    const [maxValue, setMaxValue] = useState<string>('0')
    const [minValue, setMinValue] = useState<string>('0')
    const [settings, setSettings] = useState<boolean>(false)
    const [value, setValue] = useState<number>(0)

    useEffect( () => {
        if (Number(maxValue) <= Number(minValue)) {
            setSettings(false)
            setInputError('The value must be greater than zero')
        } else if (Number(maxValue) < 0 || Number(minValue) < 0) {
            setSettings(false)
            setInputError('Max Value should be greater than Min Value')
        } else if (!!inputError) {
            setInputError('')
        }
    }, [maxValue, minValue])
    useEffect( () => {
        const min = localStorage.getItem("minValue")
        const max = localStorage.getItem("maxValue")
        if (min) setMinValue(min)
        if (max) setMaxValue(max)
        setInputError('')
        setValue(Number(min))
    }, [])
    const onsetMaxValue = (value: string) => {
        setSettings(true)
        setMaxValue(value)
    }
    const onsetMinValue = (value: string) => {
        setSettings(true)
        setMinValue(value)
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

export default App;
