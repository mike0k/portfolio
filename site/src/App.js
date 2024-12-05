import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import grey from '@material-ui/core/colors/grey';
import brown from '@material-ui/core/colors/brown';

import Layout from 'router/Layout';

import css from 'static/css/app.module.css';
import 'static/css/vendor.css';

const theme = createMuiTheme({
    palette: {
        //contrastThreshold: 2,
        //type: 'dark',
        primary: grey,
        secondary: brown,
    },
    typography: {
        backgroundColor: '#efefef',
        color: '#5d4037',
        fontFamily: [
            '"Handlee"',
            '"Exo 2"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        fontSize: 16,
    },
});

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className={css['wrap-site']}>
                        <Layout />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
