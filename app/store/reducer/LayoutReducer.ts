import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';

type StateType = {
    contactForm?: number;
    timer?: number;
};

const initialState: StateType = {
    contactForm: 0,
    timer: 0,
};

export const slice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        clear: () => {
            return R.clone(initialState);
        },
        merge: (state, action) => {
            return R.mergeDeepRight(state, action.payload);
        },
        set: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export type { StateType };
export const { clear, merge, set } = slice.actions;
export default slice.reducer;
