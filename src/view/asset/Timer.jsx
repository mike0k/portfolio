import React from 'react';
import { useInterval } from 'usehooks-ts';

const ATimer = ({ step = 0.5, max = 5, onDone = () => {}, onUpdate = () => {} }) => {
    const [timer, setTimer] = React.useState(true);

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
    }, [timer]);
};

export default ATimer;
