export enum LocalStorageKey {
    Cart = "cart",
}

export function useLocalStorage<TKeyItem>(key: LocalStorageKey, defaultValue?: TKeyItem) {
    const windowMounted = typeof window !== 'undefined';

    const setValue = (value: TKeyItem) => {
        if (!windowMounted) {
          return;
        }

        localStorage.setItem(key, JSON.stringify(value));
    }

    const getValue = () => {
        if (!windowMounted) {
            return undefined;
        }

        const keyItem = localStorage.getItem(key);

        if (!keyItem) {
            return defaultValue;
        }

        return JSON.parse(keyItem) as TKeyItem;
    }

    return { getValue, loading: !windowMounted ,setValue }
}