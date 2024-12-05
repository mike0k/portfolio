import React, { Component } from 'react';
import { Lightbox } from 'react-modal-image';
import classnames from 'classnames';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import css from 'static/css/app.module.css';

class Case extends Component {
    state = {
        img: '',
        openLightbox: false,
        activeCase: '',
    };

    onLightbox = (name) => {
        this.setState({
            img: '/img/client/cases/' + name + '.jpg',
            openLightbox: true,
        });
    };

    onToggleCase = (id) => {
        if (id !== this.state.activeCase) {
            this.setState({ activeCase: id });
        }
    };

    render() {
        const { openLightbox, img } = this.state;

        return (
            <article className={css.case} id='cases'>
                <h2 className={css.title}>Case Studies</h2>

                {this.renderCase({
                    id: 'miller-stewart',
                    name: 'Miller Stewart',
                    type: 'Estate Agency',
                    url: 'millerstewart.com',
                    description: (
                        <React.Fragment>
                            <p>
                                I began working with Miller Stewart Estate Agency in 2013 and as
                                their sole web developer. They are a mid-level estate agency whos
                                territory mainly covers the west coast and Highlands of Scotland. I
                                worked with them to design and development of their property
                                administration system for their network of 70 independent estate
                                agents. It was developed using the Yii framework and while speeding
                                up the workflow of staff and increasing their ability to handle
                                larger workloads, it also tracked and managed the flow of leads to
                                and from the company. It also provided real-time communication tools
                                between the staff and their clients, online payments and automated
                                many mundane tasks such as email reminders and feedback gathering.
                            </p>
                            <p>
                                The software was in constant development for over 5 years and grew
                                into a large and complex operation with many hidden services that
                                aimed to automate time consuming tasks, track staff performance and
                                client behaviour and manage broker leads. This information would
                                then be used by management to make business decisions and secure
                                better deals for themselves saving large amount of time and money.
                                An example of this was with portals such as Rightmove who were a big
                                overhead to the company. The tools I developed would manage and
                                organise their stock of properties based on Rightmove's pricing
                                model to minimise the fees and therefore significantly reducing the
                                company's expenditure.
                            </p>
                        </React.Fragment>
                    ),
                })}

                <div className={css.sep} />

                {this.renderCase({
                    id: 'mcewan-fraser-legal',
                    name: 'McEwan Fraser Legal',
                    type: 'Estate Agency',
                    url: 'mcewanfraserlegal.co.uk',
                    description: (
                        <React.Fragment>
                            <p>
                                In 2011 when I joined the company, they were in an unsustainable
                                position with their property administration software which was
                                highly susceptible to issues and required constant attention. I
                                almost single handily rebuilt and extended their software from
                                scratch using the Yii framework. I not only stabilised their
                                internal workflow but also significantly increased sales and
                                production times by automating tasks and developing new and
                                innovative sales tools. The end result of my work lead the company
                                to win multiple awards for several years running, including best
                                estate agency in Scotland and best UK innovation.
                            </p>
                            <p>
                                The work that won my team the 'best estate agency innovation' award
                                in 2013 and the 'Miller &amp; Bryce innovation award' in 2014 was a
                                real-time client message board that guided the sellers through the
                                entire process of selling their property, and kept them up to date
                                in real-time regarding the sale. No other estate agency was offering
                                this type of service at the time and it not only offered an
                                attractive USP but it reduced client complaints, drastically
                                improved staff efficiency and set an industry trend.
                            </p>
                            <p>
                                By 2013 the companies internal software was far superior that being
                                used by their competitors so my attention was re-directed to their
                                online marketing strategy. In any attempt to increase sales coverage
                                and drive online lead generation, a large amount of time was spent
                                focusing on Google Adwords and other forms of pay per click
                                advertising. I saw phenomenal success with the company becoming
                                market leader for many of the most popular search term related to
                                home valuations in Scotland which increased their online lead
                                generation ten fold.
                            </p>
                        </React.Fragment>
                    ),
                })}

                <div className={css.sep} />

                {this.renderCase({
                    id: 'delta-economics',
                    name: 'Delta Economics',
                    type: 'Economic Forecasting Consultancy',
                    url: 'deltaeconomics.com',
                    description: (
                        <React.Fragment>
                            <p>
                                I worked with Delta Economics via an outsourced development contract
                                with Robz Media which required me to regularly work with employees
                                across the world. The work consisted of the development of 2 sites,
                                one was a Wordpress based company website that advertised company
                                news and public reports. The 2nd site was a Yii based reporting
                                system that was used by the staff to calculate reports of
                                international trade statistics which they would provide to their
                                clients.
                            </p>

                            <p>
                                The reporting tool was very in-depth and was required to process
                                millions of records and run them through complex formula which
                                presenting the data in a readable and useable format. The tools for
                                constructing reports were even more complicated as staff would need
                                to be able to select from a wide selection of variables, many of
                                which were not compatible and would need to be accounted for in the
                                systems programming.
                            </p>

                            <p>
                                Through my work with Delta Economics, I was re-assigned to work a
                                sister company called Complete Intelligence. Here I was tasked with
                                developing similar tools but for a public audience. Due to the
                                complexity of reports, this was no small task and a lot of time was
                                spent developing a user-friendly interface for subscribers to
                                construct and digest reports. The software has been very successful
                                in the US and China and is quickly becoming a market leader in its
                                field.
                            </p>

                            <p>
                                The importance of accuracy and attention to detail with this project
                                has been very significant as a small miscalculation could have
                                real-world and global effect due to the nature of the data we were
                                dealing with. Testing and validation of data was therefore very
                                important. For example, in 2014 our software significantly
                                contradicted forecasts published by the IMF and a lot of time was
                                spent double checking our figures and calculations. The software was
                                vindicated though after no issues were found and it was shown to
                                have correctly predicted a more accurate forecast than the IMF were
                                able to produce.
                            </p>
                        </React.Fragment>
                    ),
                })}

                {openLightbox && (
                    <Lightbox
                        mainSrc={img}
                        medium={img}
                        large={img}
                        hideDownload={true}
                        onClose={() => this.setState({ openLightbox: false })}
                    />
                )}
            </article>
        );
    }

    renderCase(data) {
        const { activeCase } = this.state;
        return (
            <section
                id={data.id}
                className={classnames(activeCase === data.id && css.active)}
                onClick={() => this.onToggleCase(data.id)}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <h3 className={css.caseName}>{data.name}</h3>
                        <p className={css.caseCompany}>
                            {data.type}
                            <br />
                            <a
                                className={css.textLink}
                                href={'https://www.' + data.url}
                                target='_blank'
                                rel='nofollow noopener'>
                                {data.url}
                            </a>
                        </p>
                        {data.description}
                    </Grid>
                    <Grid item xs={6}>
                        <div className={css.imgFrame}>
                            <img src={'/img/client/cases/' + data.id + '.jpg'} alt={data.url} />
                            <div className={css.overlay}>
                                <div>
                                    <p>{data.name}</p>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        fullWidth
                                        className={css.btn}
                                        onClick={() => this.onLightbox(data.id)}>
                                        Screenshot
                                    </Button>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        fullWidth
                                        className={css.btn}
                                        component='a'
                                        href={'https://www.' + data.url}
                                        target='_blank'
                                        rel='nofollow noopener'>
                                        Website
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
        );
    }
}

export default Case;
