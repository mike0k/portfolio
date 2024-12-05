import React from 'react';

import About from '../about/About';
import Contact from '../contact/Contact';
import Intro from '../intro/Intro';
import Project from '../project/Project';

const VMain = () => {
    return (
        <React.Fragment>
            <Intro />
            <About />
            <Project />
            <Contact />
        </React.Fragment>
    );
};

const sx = {};

export default VMain;
