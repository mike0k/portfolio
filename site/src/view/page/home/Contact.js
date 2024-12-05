import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import ContactForm from 'view/common/Contact';

import css from 'static/css/app.module.css';

class Contact extends Component {
    render() {
        return (
            <article className={css.contact} id='contact'>
                <h2 className={css.title}>Get in Touch</h2>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <p>
                            Now that you have read a little about my work, please feel free to
                            contact me to discuss any work that you might like me to get involved
                            in. If you already have a copy of my CV then you can contact me directly
                            via the contact details in my CV. Otherwise please use the contact form
                            here to drop me an email and I will get back to you as soon as possible.
                        </p>
                    </Grid>
                    <Grid item xs={8}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </article>
        );
    }
}

export default Contact;
