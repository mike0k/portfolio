import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import classnames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ClaerIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';

import * as URoute from 'utils/Route';

import css from 'static/css/app.module.css';

class Menu extends Component {
    state = {
        open: false,
    };

    componentDidMount() {
        document.addEventListener('keydown', this.onEscape, false);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onEscape, false);
    }

    onEscape = (e) => {
        if (e.keyCode === 27) {
            this.onToggleMenu();
        }
    };

    onToggleMenu = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { open } = this.state;
        const { current } = URoute.get();

        return (
            <div className={classnames([css.menu, open && css.active])}>
                <div className={css.menuBg} onClick={this.onToggleMenu}></div>
                <div className={css.menuBar} onClick={this.onToggleMenu}>
                    <div className={css.top}>Menu</div>
                    <div className={css.bottom}>
                        <img src='img/logo/logo-md-v.png' alt='Michael Kirkbright Logo' />
                    </div>
                </div>
                <div className={css.menuPanel}>
                    <div>
                        <div className={css.menuHeader}>
                            <Link to='/'>
                                <img src='img/logo/logo-sm.png' alt='Michael Kirkbright Logo' />
                            </Link>
                        </div>
                        <div className={css.menuItems}>
                            <List>
                                <ListItem
                                    className={css.item}
                                    button
                                    smooth
                                    component={Link}
                                    to='/#top'
                                    onClick={this.onToggleMenu}>
                                    <ListItemText primary='Introduction' />
                                </ListItem>
                                <ListItem
                                    className={css.item}
                                    button
                                    smooth
                                    component={Link}
                                    to='/#about'
                                    onClick={this.onToggleMenu}>
                                    <ListItemText primary='About' />
                                </ListItem>
                                <ListItem
                                    className={css.item}
                                    button
                                    smooth
                                    component={Link}
                                    to='/#skills'
                                    onClick={this.onToggleMenu}>
                                    <ListItemText primary='Skills' />
                                </ListItem>
                                <ListItem
                                    className={css.item}
                                    button
                                    smooth
                                    component={Link}
                                    to='/#qualifications'
                                    onClick={this.onToggleMenu}>
                                    <ListItemText primary='Qualifications' />
                                </ListItem>
                                <ListItem
                                    className={css.item}
                                    button
                                    smooth
                                    component={Link}
                                    to='/#experience'
                                    onClick={this.onToggleMenu}>
                                    <ListItemText primary='Experience' />
                                </ListItem>
                                <ListItem
                                    className={css.item}
                                    button
                                    smooth
                                    component={Link}
                                    to='/#cases'
                                    onClick={this.onToggleMenu}>
                                    <ListItemText primary='Case Studies' />
                                </ListItem>
                                <ListItem
                                    className={css.item}
                                    button
                                    smooth
                                    component={Link}
                                    to='/#archive'
                                    onClick={this.onToggleMenu}>
                                    <ListItemText primary='Archive' />
                                </ListItem>
                                <ListItem
                                    className={css.item}
                                    button
                                    smooth
                                    component={Link}
                                    to='/#contact'
                                    onClick={this.onToggleMenu}>
                                    <ListItemText primary='Contact' />
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </div>
                <div className={css.menuToggle}>
                    <IconButton className={css.menuToggleBtn} onClick={this.onToggleMenu}>
                        {open ? <ClaerIcon /> : <MenuIcon />}
                    </IconButton>
                </div>
            </div>
        );
    }
}

export default Menu;
