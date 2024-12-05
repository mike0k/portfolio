import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as ULayout from '../../util/Layout.jsx';

const VRedirect = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const route = useSelector((state) => state.layout.route);
    const redirect = useSelector((state) => state.layout.redirect);

    React.useEffect(() => {
        if (route !== pathname && pathname !== '/') {
            ULayout.set({ route: pathname });
        }
    }, [pathname]);

    React.useEffect(() => {
        if (redirect !== '') {
            ULayout.set({
                route: redirect,
                redirect: '',
            });
            navigate(redirect);
        }
    }, [redirect]);

    return <React.Fragment />;
};

export default VRedirect;
