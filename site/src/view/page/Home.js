import React, { Component } from 'react';

import About from './home/About';
import Archive from './home/Archive';
import Case from './home/Case';
import Contact from './home/Contact';
import Experience from './home/Experience';
import Intro from './home/Intro';
import Qualification from './home/Qualification';
import Skills from './home/Skills';

import css from 'static/css/app.module.css';

class HomePage extends Component {
    render() {
        return (
            <div className={css.pageHome}>
                <Intro />
                <About />
                <Skills />
                <Qualification />
                <Experience />
                <Case />
                <Archive />
                <Contact />
            </div>
        );
    }
}

export default HomePage;
