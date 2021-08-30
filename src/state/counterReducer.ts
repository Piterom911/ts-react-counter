
const initialState = {
    inputError: '',
    maxValue: '',
    minValue: '',
    settings: false,
    value: 0,
}

type reducerState = typeof initialState

export const counterReducer = (state: reducerState, action: RootActionType): reducerState => {
    switch (action.type) {
        case 'SET-INPUT-ERROR':
            return {...state, inputError: action.error}
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue, settings: true}
        case 'SET-MIN-VALUE':
            return {...state, minValue: action.minValue, settings: true}
        case 'SET-SETTINGS':
            return {...state, settings: action.settings}
        case 'SET-COUNTER-VALUE':
            return {...state, value: action.value}
        default:
            return state
    }
}

type RootActionType = ReturnType<typeof setInputErrorAC>
                    | ReturnType<typeof setMaxValueAC>
                    | ReturnType<typeof setMinValueAC>
                    | ReturnType<typeof setSettingsAC>
                    | ReturnType<typeof setCounterValueAC>

export const setInputErrorAC = (error: string) => {
    return { type: 'SET-INPUT-ERROR', error} as const
}
export const setMaxValueAC = (maxValue: string) => {
    return { type: 'SET-MAX-VALUE', maxValue} as const
}
export const setMinValueAC = (minValue: string) => {
    return { type: 'SET-MIN-VALUE', minValue} as const
}
export const setSettingsAC = (settings: boolean) => {
    return { type: 'SET-SETTINGS', settings} as const
}
export const setCounterValueAC = (value: number) => {
    return { type: 'SET-COUNTER-VALUE', value} as const
}