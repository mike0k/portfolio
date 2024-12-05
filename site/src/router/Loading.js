import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import css from 'static/css/app.module.css';

class Loading extends Component {
    componentDidUpdate() {
        const { loading, after } = this.props;

        if (!loading && after) {
            this.props.after();
        }
    }

    render() {
        const { loading, bg } = this.props;

        return (
            <div
                className={classnames([
                    css.loading,
                    bg ? css.pageLoading : css.componentLoading,
                    loading ? css.active : css.inactive,
                ])}>
                <div>
                    <div className={css.logo}>
                        <img src='img/logo/logo-md.png' alt='Michael Kirkbright' />
                    </div>
                </div>
                <div className={css.icon}>
                    <CircularProgress />
                </div>
            </div>
        );
    }
}

Loading.propTypes = {
    after: PropTypes.func,
    bg: PropTypes.bool,
    loading: PropTypes.bool,
};

Loading.defaultProps = {
    bg: false,
    loading: true,
};

export default Loading;
