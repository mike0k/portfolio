import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import css from 'static/css/app.module.css';

class Experience extends Component {
    list = [
        {
            period: 'Oct 2009 - Present',
            company: 'Animite Media',
            industry: 'Web Development',
            job: 'Owner / Freelance Developer',
            highlight: true,
        },
        {
            period: 'Nov 2013 - Jun 2018',
            company: 'Miller Stewart',
            industry: 'Estate Agency',
            job: 'Web Development Manager',
            highlight: false,
        },
        {
            period: 'Aug 2013 - Sep 2015',
            company: 'Robz Media',
            industry: 'Web Development',
            job: 'Web Consultant',
            highlight: false,
        },
        {
            period: 'Nov 2011 - Jul 2013',
            company: 'McEwan Fraser Legal',
            industry: 'Estate Agency',
            job: 'I.T & Web Manager',
            highlight: false,
        },
        {
            period: 'Jun 2010 - Nov 2011',
            company: 'Evolution Online',
            industry: 'Web Development',
            job: 'Senior Web Developer',
            highlight: false,
        },
        {
            period: 'Jan 2007 - Nov 2007',
            company: 'Superglass Insulation',
            industry: 'Manufacturing',
            job: 'Web Developer',
            highlight: false,
        },
        {
            period: 'Jul 2007 - Aug 2007',
            company: 'Dundee College',
            industry: 'Education',
            job: 'Web Developer',
            highlight: false,
        },
    ];

    render() {
        return (
            <article className={css.qualification} id='experience'>
                <h2 className={css.title}>Experience</h2>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Period</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Industry</TableCell>
                            <TableCell>Job Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.list.map((item, key) => {
                            return (
                                <TableRow key={key}>
                                    <TableCell component={item.highlight ? 'th' : 'td'} scope='row'>
                                        {item.period}
                                    </TableCell>
                                    <TableCell component={item.highlight ? 'th' : 'td'}>
                                        {item.company}
                                    </TableCell>
                                    <TableCell component={item.highlight ? 'th' : 'td'}>
                                        {item.industry}
                                    </TableCell>
                                    <TableCell component={item.highlight ? 'th' : 'td'}>
                                        {item.job}
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

export default Experience;
