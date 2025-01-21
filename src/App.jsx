//import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './view/layout/Layout.jsx';

import Main from './view/page/Main.jsx';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route index element={<Main />} />
            </Routes>
        </Layout>
    );
};

export default App;
