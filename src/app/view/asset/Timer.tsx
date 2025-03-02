import React from 'react';
import { useInterval } from 'usehooks-ts';

function ATimer({ step = 0.5, max = 5, onDone = () => {}, onUpdate = () => {} }: Props) {
    const [timer, setTimer] = React.useState(0);

    useInterval(
        () => {
            setTimer(timer + step);
        },
        timer < max ? step * 1000 : null
    );

    React.useEffect(() => {
        onUpdate(timer);
        if (timer >= max) {
            onDone();
        }
    }, [timer, max, onUpdate, onDone]);
}

type Props = {
    step?: number;
    max?: number;
    onDone?: () => void;
    onUpdate?: (currentTimer: number) => void;
};

export default ATimer;
