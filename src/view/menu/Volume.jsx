import React from 'react';

import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';

import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';

import * as UUser from '../../util/User.jsx';

const Volume = () => {
    const user = UUser.get();
    const [state, setState] = React.useState({
        mute: user.mute,
        volume: user.volume,
    });

    const onMute = () => {
        const mute = !state.mute;
        setState({ ...state, mute });
        UUser.set({ mute });
    };
    const onVolume = (e, val) => {
        const volume = val;
        setState({ ...state, volume });
        UUser.set({ volume });
    };

    return (
        <React.Fragment>
            <IconButton onClick={onMute} size='small'>
                {state.mute ? <MdVolumeOff /> : <MdVolumeUp />}
            </IconButton>

            <Slider
                value={state.volume}
                onChange={onVolume}
                step={5}
                min={0}
                max={100}
                valueLabelDisplay='auto'
                style={style.container}
            />
        </React.Fragment>
    );
};

const style = {
    container: {
        width: '100%',
        maxWidth: 200,
    },
};

export default Volume;
