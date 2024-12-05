import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import css from 'static/css/app.module.css';

class Error extends Component {
    render() {
        return (
            <div className={css.pageError}>
                <div className={css.intro}>
                    <Container>
                        <h1 class={css.title}>
                            404
                            <br />
                            Pgae Not Found
                        </h1>
                        <p>The page you are looking for could not be found.</p>
                        <Button
                            variant='contained'
                            color='secondary'
                            size='large'
                            className={css.btn}
                            component={Link}
                            to='/'>
                            Back to Main Site
                        </Button>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Error;
