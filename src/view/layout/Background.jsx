import React from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const stars = {
    fpsLimit: 120,

    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: 'bubble',
            },
        },
        modes: {
            bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#ffffff',
        },
        links: {
            enable: false,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'out',
            },
            random: true,
            speed: 0.2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 80,
        },
        opacity: {
            value: 0.3,
            random: false,
            anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
            },
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 5 },
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
            },
        },
    },
    detectRetina: true,
};

const VBackground = () => {
    const [init, setInit] = React.useState(false);

    React.useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return <React.Fragment>{init && <Particles options={stars} />}</React.Fragment>;
};

export default VBackground;
