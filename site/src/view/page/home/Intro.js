import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import css from 'static/css/app.module.css';

class Intro extends Component {
    render() {
        return (
            <article className={css.intro}>
                <Grid container spacing={4}>
                    <Grid item xs={8}>
                        <h2 className={css.title}>Welcome to my personal portfolio,</h2>
                        <p>
                            This portfolio is the online accompaniment of my CV and{' '}
                            <a
                                href='https://www.linkedin.com/in/michael-kirkbright'
                                target='_blank'
                                rel='nofollow noopener'>
                                LinkedIn
                            </a>{' '}
                            profile. If you are a client of{' '}
                            <a
                                href='https://www.animitemedia.com'
                                target='_blank'
                                rel='nofollow noopener'>
                                Animite Media
                            </a>{' '}
                            or would like to speak to me in regards to web work for your company
                            then please contact me using{' '}
                            <a
                                href='https://www.animitemedia.com/contact'
                                target='_blank'
                                rel='nofollow noopener'>
                                this form
                            </a>
                            . Please see below for a short introduction about{' '}
                            <Link smooth to='/#about'>
                                who I am
                            </Link>
                            , my{' '}
                            <Link smooth to='/#qualifications'>
                                qualifications
                            </Link>{' '}
                            and my{' '}
                            <Link smooth to='/#experience'>
                                experience
                            </Link>
                            . You will also find some case studies that I have chosen for{' '}
                            <Link smooth to='/#miller-stewart'>
                                Miller Stewart
                            </Link>
                            ,{' '}
                            <Link smooth to='/#mcewan-fraser-legal'>
                                McEwan Fraser Legal
                            </Link>{' '}
                            and{' '}
                            <Link smooth to='/#delta-economics'>
                                Delta Economics
                            </Link>{' '}
                            who are some of the larger jobs and contracts that I have worked on in
                            recent years.
                        </p>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container>
                            <Grid item xs={6}>
                                <a
                                    className={css.iconFrame}
                                    href='https://www.linkedin.com/in/michael-kirkbright'
                                    target='_blank'
                                    rel='noopener'>
                                    <span>
                                        <LinkedInIcon />
                                    </span>
                                </a>
                            </Grid>
                            <Grid item xs={6}>
                                <Link className={css.iconFrame} smooth to='/#contact'>
                                    <span>
                                        <EmailIcon />
                                    </span>
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <p>
                                    If you have a position that you would like to discuss with me or
                                    if you would like to find out my availability then please check
                                    my{' '}
                                    <a
                                        href='https://www.linkedin.com/in/michael-kirkbright'
                                        target='_blank'
                                        rel='noopener'>
                                        LinkedIn
                                    </a>{' '}
                                    page or{' '}
                                    <Link smooth to='/#contact'>
                                        email me
                                    </Link>
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </article>
        );
    }
}

export default Intro;
