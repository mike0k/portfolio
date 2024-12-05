import Config from '../config/Config.jsx';
import * as UUser from './User.jsx';

export const play = ({ src, volume = 0.3, force = false }) => {
    if (!force && UUser.get().mute) {
        return false;
    }

    const audio = new Audio(Config.path.aud + '/' + src);
    audio.volume = volume;
    audio.play();
};
