import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';

type StateType = {
    style?: string;
    mute?: boolean;
};

const initialState: StateType = {
    style: 'dark',
    mute: false,
};

export const slice = createSlice({
    name: 'user',
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
