export const loadState = () => {
    try {
        const counterState = localStorage.getItem('state');
        if (counterState === null) {
            return undefined;
        }
        return JSON.parse(counterState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const counterState = JSON.stringify(state);
        localStorage.setItem('state', counterState);
    } catch {
        // ignore write errors
    }
};