import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import * as UMail from 'utils/Mail';
import { Params } from 'config/Params';

import css from 'static/css/app.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        recaptcha: '',
        saving: false,
        sent: false,
    };
    recaptchaRef = React.createRef();

    onCaptcha = (value) => {
        this.setState({ recaptcha: value });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({ saving: true });
        const data = {
            name: this.state.name,
            company: this.state.company,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
            recaptcha: this.recaptchaRef.current.getValue(),
        };

        const valid = await UMail.save(data);

        this.recaptchaRef.current.reset();
        this.setState({
            saving: false,
            sent: valid,
        });
    };

    render() {
        return (
            <div className={css.contactForm}>
                {this.state.sent ? this.renderSent() : this.renderForm()}
            </div>
        );
    }

    renderForm() {
        const { name, company, email, phone, message, saving } = this.state;
        const { errors } = this.props;

        return (
            <form onSubmit={this.onSubmit} className={css.contactForm}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <TextField
                            label='Your Name'
                            name='name'
                            value={name}
                            error={errors.name ? true : false}
                            helperText={errors.name}
                            autoComplete='name'
                            onChange={this.onChange}
                            type='text'
                            margin='dense'
                            fullWidth
                            className={css.textField}
                            InputLabelProps={{ className: css.label }}
                            InputProps={{ className: css.field }}
                            FormHelperTextProps={{ className: css.error }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Email Address'
                            name='email'
                            value={email}
                            error={errors.email ? true : false}
                            helperText={errors.email}
                            autoComplete='email'
                            onChange={this.onChange}
                            type='email'
                            margin='dense'
                            fullWidth
                            className={css.textField}
                            InputLabelProps={{ className: css.label }}
                            InputProps={{ className: css.field }}
                            FormHelperTextProps={{ className: css.error }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label='Your Enquiry'
                            name='message'
                            value={message}
                            error={errors.message ? true : false}
                            helperText={errors.message}
                            onChange={this.onChange}
                            type='text'
                            margin='dense'
                            fullWidth
                            multiline
                            rowsMax={6}
                            className={css.textArea}
                            InputLabelProps={{ className: css.label }}
                            InputProps={{ className: css.field }}
                            FormHelperTextProps={{ className: css.error }}
                        />
                    </Grid>

                    <Grid item xs={12} className={css.recaptcha}>
                        <div className={css.recaptchaInner}>
                            <ReCAPTCHA
                                ref={this.recaptchaRef}
                                sitekey={Params.google.recaptcha.publicKey}
                            />
                            {errors.recaptcha && <p className={css.error}>{errors.recaptcha}</p>}
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            disabled={saving}
                            variant='contained'
                            color='primary'
                            type='button'
                            className={css.btn}
                            onClick={this.onSubmit}
                            fullWidth>
                            Send <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }

    renderSent() {
        return (
            <div className={css.sent}>
                <h1>Enquiry Sent</h1>
                <p>
                    Thank you, your enquiry has been sent to us and someone will be in touch with
                    you shortly.
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(ContactForm);
