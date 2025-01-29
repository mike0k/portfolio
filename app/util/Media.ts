import Config from '../config/Config';
import * as UUser from './User';

type PlayParams = {
    src: string;
    volume?: number;
    force?: boolean;
};
export function play({ src, volume = 0.3, force = false }: PlayParams) {
    if (!force && UUser.get().mute) {
        return false;
    }

    const audio = new Audio(Config.path.aud + '/' + src);
    audio.volume = volume;
    audio.play();

    return true;
}
