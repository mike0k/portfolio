import React, { Component } from 'react';

import css from 'static/css/app.module.css';

class About extends Component {
    render() {
        return (
            <article className={css.about} id='about'>
                <h2 className={css.title}>A bit about me</h2>
                <div className={css.imgFrameRound}>
                    <img src='/img/misc/profile.jpg' alt='Photo of Michael' />
                </div>
                <p>
                    I'm a web developer based in Kennet, near Alloa in Scotland and have a honours
                    degree in Wed Design & Development from Abertay University in Dundee. I started
                    out my career working for a company at churning out websites, ecoms, fixes and
                    updates in a conveyor-belt fashion. Not very exciting but great from
                    encountering a large number of the various tasks that can be required of a
                    developer
                </p>
                <p>
                    I then moved on to I.T. management with mid-level estate agent, McEwan Fraser
                    Legal. I saw great success with them in a high pressure environment and left
                    having been a key part in helping the company become the top Scottish estate
                    agency and earning innovation awards for my work. I began to branch out in
                    contractual work to have more control over my career by focusing on working with
                    a small number of clients on long-term projects to develop their sales tools and
                    online marketing.
                </p>
                <p>
                    Through my freelance company, Animite Media, I have continued to work in estate
                    agency but have widened my scope of that industry to include holiday lets,
                    property management and solicitors. I have also worked on long-term projects
                    with economists to provide in-depth reporting tools using 'big-data'.
                </p>
                <p>
                    I have worked as part of a team, as a team leader and as the sole person
                    involved in projects with both internal and external clients. I have designed,
                    developed, fixed and extended software that is not only the backbone of the
                    business but that also offered significant financial gains and set industry
                    trends. I've provided I.T support to teams of hundreds of people, managed I.T
                    recruitment and product procurement as well as giving presentation to corporate
                    board rooms and large company-wide conventions.
                </p>
            </article>
        );
    }
}

export default About;
