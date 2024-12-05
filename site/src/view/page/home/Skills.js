import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import css from 'static/css/app.module.css';

class Skills extends Component {
    framework = {
        Bootstap: 5,
        jQuery: 5,
        MVC: 5,
        Yii: 5,

        'REST API': 4,

        CubeCart: 3,
        Concrete5: 3,
        NodeJS: 3,
        SSH: 3,
        Wordpress: 3,

        Magento: 2,
    };

    language = {
        'CSS / SASS': 5,
        HTML: 5,
        MySQL: 5,
        PHP: 5,
        React: 5,

        HTAccess: 4,
        'JS / ES6': 4,
        XML: 4,

        SSH: 3,

        'Android SDK': 2,

        Java: 1,
    };

    devSoft = {
        'cPanel & WHM': 5,
        Compose: 5,
        Gulp: 5,
        NPM: 5,

        Apache: 4,
        GIT: 4,
        'Google Adwords': 4,
        'Google Analytics': 4,
        Photoshop: 4,

        'Facebook PPC': 3,
        'Google Display Network': 3,
        Illustrator: 3,
        'YouTube PPC': 3,

        'LinkedIn PPC': 2,
    };

    other = {
        'Cron Management': 5,
        'Domain Management': 5,
        SEO: 5,

        'Google Adwords': 4,
        'Google Analytics': 4,
        'Web Scraping': 4,

        'Facebook PPC': 3,
        'Google Display Network': 3,
        'Social Media Management': 3,
        'YouTube PPC': 3,

        'LinkedIn PPC': 2,
    };

    render() {
        return (
            <article className={css.skills} id='skills'>
                <h2 className={css.title}>Skills</h2>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Table size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Language</TableCell>
                                    <TableCell>Level</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>{this.renderTable(this.language)}</TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={6}>
                        <Table size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Framework</TableCell>
                                    <TableCell>Level</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>{this.renderTable(this.framework)}</TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={6}>
                        <Table size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Software</TableCell>
                                    <TableCell>Level</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>{this.renderTable(this.devSoft)}</TableBody>
                        </Table>
                    </Grid>
                    <Grid item xs={6}>
                        <Table size='small'>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Other</TableCell>
                                    <TableCell>Level</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>{this.renderTable(this.other)}</TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </article>
        );
    }

    renderTable(list) {
        return Object.keys(list).map((key) => {
            const count = list[key];
            return (
                <TableRow key={key}>
                    <TableCell component={count >= 4 ? 'th' : 'td'} scope='row'>
                        {key}
                    </TableCell>
                    <TableCell className={css.stars}>{this.renderStar(count)}</TableCell>
                </TableRow>
            );
        });
    }

    renderStar(count) {
        const list = [];
        for (let i = 1; i <= count; i++) {
            list.push(<StarIcon key={i} />);
        }
        return list;
    }
}

export default Skills;
