// import React, {useEffect, useState} from 'react';
// import './App.css';
// import {CounterSettings} from "./components/CounterSettings/CounterSettings";
// import {CounterMain} from "./components/CounterMain/CounterMain";
//
// function App() {
//
//     const [inputError, setInputError] = useState<string>('')
//     const [maxValue, setMaxValue] = useState<number>(0)
//     const [minValue, setMinValue] = useState<number>(0)
//     const [settings, setSettings] = useState<boolean>(false)
//     const [value, setValue] = useState<number>(0)
//
//     useEffect( () => {
//         if (Number(maxValue) <= Number(minValue)) {
//             setSettings(false)
//             setInputError('Max Value should be greater than Min Value')
//         } else if (Number(maxValue) < 0 || Number(minValue) < 0) {
//             setSettings(false)
//             setInputError('The value must be greater than zero')
//         } else if (!!inputError) {
//             setInputError('')
//         }
//     }, [maxValue, minValue])
//     useEffect( () => {
//         const min = Number(localStorage.getItem("minValue"))
//         const max = Number(localStorage.getItem("maxValue"))
//         if (min) setMinValue(min)
//         if (max) setMaxValue(max)
//         setInputError('')
//         setValue(Number(min))
//     }, [])
//     const onsetMaxValue = (value: number) => {
//         setSettings(true)
//         setMaxValue(value)
//     }
//     const onsetMinValue = (value: number) => {
//         setSettings(true)
//         setMinValue(value)
//     }
//
//   return (
//     <div className="App">
//         <CounterSettings maxValue={maxValue}
//                          minValue={minValue}
//                          isSettings={settings}
//                          setCurrentValue={setValue}
//                          setMaxValue={onsetMaxValue}
//                          setMinValue={onsetMinValue}
//                          setSettings={setSettings}
//                          inputError={inputError} />
//         <CounterMain isSettings={settings}
//                      currentValue={value}
//                      maxValue={Number(maxValue)}
//                      minValue={Number(minValue)}
//                      setCurrentValue={setValue}
//                      inputError={inputError} />
//     </div>
//   );
// }
//
// export default App;
export default 1
