import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/Store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//more versatile use of the JS map function, works with both objects and arrays
// type EachACallback = (val: any, key: number) => void;
// export function eachA(obj: any[], callback: EachACallback) {
//     if (typeof obj === 'object') {
//         const items = [];
//         for (let i = 0; i < obj.length; i++) {
//             items.push(callback(obj[i], i));
//         }
//         return items;
//     }
//     return false;
// }

// type EachOCallback = (val: any, key: string, i: number) => void;
// export function eachO(obj: Record<string, any>, callback: EachOCallback) {
//     if (typeof obj === 'object') {
//         const keys = Object.keys(obj);
//         const items = [];
//         for (let i = 0; i < keys.length; i++) {
//             const key = keys[i];
//             items.push(callback(obj[key], key, i));
//         }
//         return items;
//     }
//     return false;
// }

//convert hex colors to rgb colours with an optional alpha value
export function rgba(hex: string, alpha: number = 1) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
