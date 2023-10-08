export enum LocalStorageKey {
    Cart = "cart",
}

export function useLocalStorage<TKeyItem>(key: LocalStorageKey, defaultValue: TKeyItem) {
    const setValue = (value: TKeyItem) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getValue = () => {
        if (typeof window === 'undefined') {
            return defaultValue;
        }

        const keyItem = localStorage.getItem(key);

        if (!keyItem) {
            return defaultValue;
        }

        return JSON.parse(keyItem) as TKeyItem;
    }

    return { getValue, setValue }
}