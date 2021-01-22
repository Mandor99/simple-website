import React from 'react';
import { Profile, Ul, Article, Skill, Hr } from './SkillsStyle';
import {H3} from '../Styles/Global';

function Skills() {
    const profile = [{id: 1, head: 'name', content: 'mahmoud mandor'}, {id: 2, head: 'birthday', content: '8/4/1998'}, {id: 3, head: 'address', content: 'el mahalla'}, {id: 4, head: 'phone', content: '01275722580'}, {id: 5, head: 'email', content: 'mahmoudmandor65@gmail.com'}];

    const skills = [{id: 1, lang: 'html', progress: '100%'}, {id: 2, lang: 'css',progress:'90%'}, {id: 3, lang: 'javaScript', progress: '80%'}, {id: 4, lang: 'react', progress: '85%'}];

    const profileDetails = profile.map((item) =>
        <div className="profile__wrapper" key={item.id}>
            <h4 className="profile__heading">{item.head}</h4>
            <li className="profile__details">{item.content}</li>
        </div>
    );

    const skillsDetails = skills.map((item) =>
        <div className="skill__wrapper" key={item.id}>
            <Skill progress={item.progress}>
                <p className="skill__lang">{item.lang}</p>
                <p className="skill__progress">{item.progress}</p>
            </Skill>
            <Hr width={item.progress}></Hr>
        </div>
    );
    return (
        <section className="main__gap">
            <div className="container">
                <Profile>
                    <article className="profile">
                        <H3>my profile</H3>
                        <Ul>
                            {profileDetails}
                        </Ul>
                    </article>
                    <Article className="skills">
                        <H3>some skills</H3>
                        <p className="skills__details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam quas soluta velit nostrum sint laudantium rerum doloremque tenetur totam?</p>
                        {skillsDetails}
                    </Article>
                </Profile>
            </div>
        </section>
    )
}

export default Skills
