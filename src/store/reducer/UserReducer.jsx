import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';

const initialState = {
    style: 'dark',
    mute: false,
};

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clear: (state, action) => {
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

export const { clear, merge, set } = slice.actions;

export default slice.reducer;
