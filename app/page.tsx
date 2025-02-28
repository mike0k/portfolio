import type { Metadata } from 'next';

import About from './view/about/About';
import Contact from './view/contact/Contact';
import Intro from './view/intro/Intro';
import Layout from './view/layout/Layout';
import Project from './view/project/Project';
import Skills from './view/skills/Skills';
import Timeline from './view/timeline/Timeline';

import * as UList from './util/List';

export const metadata: Metadata = UList.meta('home');

const App = () => {
    return (
        <Layout>
            <Intro />
            <About />
            <Timeline />
            <Skills />
            <Project />
            <Contact />
        </Layout>
    );
};

export default App;
