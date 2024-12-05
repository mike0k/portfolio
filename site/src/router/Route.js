import React, { Component, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const ErrorPage = withRouter(lazy(() => import('view/page/Error')));
const HomePage = withRouter(lazy(() => import('view/page/Home')));

class RoutesComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/' exact component={HomePage} />

                    <Route component={ErrorPage} />
                </Switch>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    route: state.route,
});

export default withRouter(connect(mapStateToProps)(RoutesComponent));
