import React, {useEffect} from 'react';
import './App.css';
import {CounterSettings} from "./components/CounterSettings/CounterSettings";
import {CounterMain} from "./components/CounterMain/CounterMain";
import {
    counterReducer, CounterReducerState,
    setCounterValueAC,
    setInputErrorAC,
    setMaxValueAC,
    setMinValueAC,
    setSettingsAC
} from "./state/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateTypes} from "./state/store";
import {Route} from "react-router-dom";
import {CounterSettingsRouter} from "./components/CounterSettings/CounterSettingsRouter";
import {CounterMainRouter} from "./components/CounterMain/CounterMainRouter";

function AppWithRouter() {

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
    useEffect(() => {
        const min = Number(localStorage.getItem("minValue"))
        const max = Number(localStorage.getItem("maxValue"))
        if (min) dispatch(setMinValueAC(min))
        if (max) dispatch(setMaxValueAC(max))
        dispatch(setInputErrorAC(''))
        dispatch(setCounterValueAC(min))
    }, [])
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
    const setInputError = (error: string) => {
        dispatch(setInputErrorAC(error))
    }

    return (
        <div className="App">
            <Route exact path={'/'} render={() => {
                return <CounterMainRouter isSettings={settings}
                                          currentValue={value}
                                          maxValue={Number(maxValue)}
                                          minValue={Number(minValue)}
                                          setCurrentValue={setValue}
                                          inputError={inputError}/>
            }}/>
            <Route path={'/settings'} render={() => {
                return <CounterSettingsRouter maxValue={maxValue}
                                              minValue={minValue}
                                              isSettings={settings}
                                              setCurrentValue={setValue}
                                              setMaxValue={onsetMaxValue}
                                              setMinValue={onsetMinValue}
                                              setSettings={setSettings}
                                              inputError={inputError}/>
            }}/>

        </div>
    );
}

export default AppWithRouter;
