import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Menu from './Menu';
import Loading from 'router/Loading';
import RoutesComponent from './Route';
import * as URoute from 'utils/Route';
import Analytics from 'utils/Analytics';
import { Params } from 'config/Params';

import css from 'static/css/app.module.css';

class Layout extends Component {
    componentDidMount() {
        URoute.set({ loading: false });
    }

    render() {
        return (
            <React.Fragment>
                {!this.props.loading && this.renderLoaded()}
                <Loading loading={this.props.loading} />
            </React.Fragment>
        );
    }

    renderLoaded() {
        return (
            <Suspense fallback={<Loading bg={true} />}>
                <React.Fragment>
                    <Router>
                        <Analytics trackingId={Params.google.analytics}>
                            <Menu />
                            <Container className={css.wrapSiteOuter}>
                                <div className={css.wrapSite} id='top'>
                                    <div className={css.wrapSiteInner}>
                                        <header className={css.header}>
                                            <img
                                                src='/img/logo/logo-md.png'
                                                alt='Michael Kirkbright Web Development & Marketing'
                                            />
                                            <h1>Michael Kirkbright Web Development & Marketing</h1>
                                        </header>
                                        <RoutesComponent />
                                        <footer className={css.footer}>
                                            <Grid container>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    md={8}
                                                    className={css.footerAbout}>
                                                    <p className={css.h4}>About This Site</p>
                                                    <p>
                                                        language: HTML5, CSS3, JSX, PHP7.
                                                        <br />
                                                        Framework: React + Redux, Yii2 REST API,
                                                        Material-UI
                                                        <br />
                                                        Tools: Composer, Node.js, Gulp, GIT,
                                                        PHPStorm and VSCode
                                                        <br />
                                                        Distribution: WHM, cPanel, CloudFlare
                                                    </p>
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    md={4}
                                                    className={css.footerLogo}>
                                                    <div>
                                                        <img
                                                            src='/img/logo/logo-sm.png'
                                                            alt='Michael Kirkbright Web Development & Marketing'
                                                        />
                                                        <p className={css.copyright}>
                                                            &copy; Michael Kirkbright{' '}
                                                            {new Date().getFullYear()}.
                                                            <br />
                                                            All Rights Reserved.
                                                        </p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </footer>
                                    </div>
                                </div>
                            </Container>
                        </Analytics>
                    </Router>
                </React.Fragment>
            </Suspense>
        );
    }
}

Layout.propTypes = {
    auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user,
    title: state.route.title,
    loading: state.route.loading,
});

export default connect(mapStateToProps)(Layout);
