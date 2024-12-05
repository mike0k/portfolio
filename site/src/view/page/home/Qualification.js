import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import css from 'static/css/app.module.css';

class Qualification extends Component {
    list = [
        {
            year: '2014',
            name: 'Estate Agency Innovation Award',
            institute: 'Scottish Legal Awards',
            highlight: true,
        },
        {
            year: '2013',
            name: 'UK Innovation Award',
            institute: 'Estate Agency of the Year',
            highlight: true,
        },
        {
            year: '2005-2009',
            name: 'BSc Honours Degree: Web Design & Development',
            institute: 'Abertay University',
            highlight: true,
        },
        {
            year: '2006-2007',
            name: 'Cisco Networking CCNA1',
            institute: 'Abertay University',
            highlight: false,
        },
        {
            year: '2004-2005',
            name: 'HNC Multimedia: Web Design & Development',
            institute: 'Falkirk College',
            highlight: false,
        },
        {
            year: '2003-2004',
            name: 'HNC Computer Programming',
            institute: 'Falkirk College',
            highlight: false,
        },
    ];

    render() {
        return (
            <article className={css.qualification} id='qualifications'>
                <h2 className={css.title}>Qualifications & Awards</h2>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Year</TableCell>
                            <TableCell>Qualification</TableCell>
                            <TableCell>Institute</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.list.map((item) => {
                            return (
                                <TableRow key={item.name}>
                                    <TableCell component={item.highlight ? 'th' : 'td'} scope='row'>
                                        {item.year}
                                    </TableCell>
                                    <TableCell component={item.highlight ? 'th' : 'td'}>
                                        {item.name}
                                    </TableCell>
                                    <TableCell component={item.highlight ? 'th' : 'td'}>
                                        {item.institute}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </article>
        );
    }
}

export default Qualification;
