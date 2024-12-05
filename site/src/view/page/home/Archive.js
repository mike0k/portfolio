import React, { Component } from 'react';
import Slider from 'react-slick';
import { Lightbox } from 'react-modal-image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Grid from '@material-ui/core/Grid';

import { Clients } from 'config/Clients';
import css from 'static/css/app.module.css';

class Archive extends Component {
    state = {
        img: '',
        openLightbox: false,
    };

    onLightbox = (name) => {
        this.setState({
            img: name,
            openLightbox: true,
        });
    };

    getClients = () => {
        const list = Clients,
            random = Math.random,
            grouped = [],
            max = 30;

        let count = 0,
            total = 0,
            length = list.length,
            lastItem,
            randKey,
            listout = list.slice(0);

        //shuffle array
        while (length) {
            randKey = Math.floor(random() * length--);
            console.log('length', length);
            lastItem = listout[length];
            listout[length] = listout[randKey];
            listout[randKey] = lastItem;
        }

        //group and reduce
        for (let key in listout) {
            if (grouped[count] && grouped[count].length >= 3) {
                count++;
            }
            if (!grouped[count]) {
                grouped[count] = [];
            }
            grouped[count].push(listout[key]);
            total++;
            if (total >= max) {
                break;
            }
        }

        return grouped;
    };

    render() {
        const { openLightbox, img } = this.state;
        const settings = {
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
        };

        return (
            <article className={css.archive} id='archive'>
                <h2 className={css.title}>Archive</h2>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <p>
                            This is a random selection of some of the projects and websites I have
                            been significantly involved with over my career. The sites stretch
                            across just about every industry and purpose imaginable and vary wildly
                            from basic static websites to large e-commerce websites.
                        </p>
                    </Grid>
                    <Grid item xs={8}>
                        <Slider {...settings}>
                            {this.getClients().map((group, key) => (
                                <div className={css.item} key={key}>
                                    {group.map((item) => (
                                        <div
                                            className={css.imgFrame}
                                            key={item.name}
                                            onClick={() => this.onLightbox(item.img)}>
                                            <LazyLoadImage
                                                src={'/img/client/general/thumb/' + item.img}
                                                alt={item.name}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </Slider>
                    </Grid>
                </Grid>
                {openLightbox && (
                    <Lightbox
                        small={'/img/client/general/thumb/' + img}
                        medium={'/img/client/general/' + img}
                        hideDownload={true}
                        onClose={() => this.setState({ openLightbox: false })}
                    />
                )}
            </article>
        );
    }
}

export default Archive;
