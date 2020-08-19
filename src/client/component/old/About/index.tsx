import React, { useState } from 'react';
import lenivec from '../../../../public/lenivec.jpg';
import jslogo from '../../../../public/js-logo.png';

type AboutPropsType = {
    mix?: string
}

interface ISkill {
  label: string;
  url: string;
}

const skills: Array<ISkill> = [
  {
    label: 'JS',
    url: jslogo,
  },
  // {
  //   label: 'Mobile',
  //   url: '',
  // },
  // {
  //   label: '3D',
  //   url: '',
  // },
  // {
  //   label: 'Desktop',
  //   url: '',
  // },
  // {
  //   label: 'Games',
  //   url: '',
  // },
  // {
  //   label: 'UI/UX',
  //   url: '',
  // },
];

type SkillPropsType = {

} & ISkill;
const Skill = (props: SkillPropsType) => {
  const {
    label, url,
  } = props;
  return (
    <div className="skills__item">
      <img className="img" src={url} />
    </div>
  );
};

const About = (props: AboutPropsType): JSX.Element => {
  const {
    mix,
  } = props;
  const [showSkill, setShowSkill] = useState<boolean>(false);

  // ${showSkill ? 'scroll__photo_filter-on' : 'scroll__photo_filter-off'}
  // ${showSkill ? 'scroll__text-container_collapse' : 'scroll__text-container_expand'}
  return (
    <div className={`about ${mix}`}>
      <div className="scroll">
        <div className="scroll__photo scroll__photo_filter-off">
          <img className="img" src={lenivec} />
        </div>
        <div className="scroll__text-container">
          <div className="scroll__label">About</div>
          <div className="scroll__text" onClick={() => setShowSkill(!showSkill)}>
            Hello. What can i use?
            {' '}
            <br />
            {' '}
            Click by contine
          </div>
        </div>
      </div>
      { showSkill
        && (
        <div className="skills">
          {skills.map((item: ISkill, index: number) => <Skill key={index} {...item} />)}
        </div>
        )}
    </div>
  );
};

export default About;
