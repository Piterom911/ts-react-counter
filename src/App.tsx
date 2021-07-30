import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {CounterMain} from "./components/CounterMain/CounterMain";

function App() {
    const [inputError, setInputError] = useState<string>('')
    const [maxValue, setMaxValue] = useState<string>('0')
    const [minValue, setMinValue] = useState<string>('0')
    const [settings, setSettings] = useState<boolean>(false)
    const [value, setValue] = useState<number>(0)

    useEffect( () => {
        if (Number(maxValue) <= Number(minValue) && !inputError) {
            setInputError('Max Value should be greater than Min Value')
        }
        if (Number(maxValue) <= Number(minValue) || inputError) {
            setSettings(false)
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
