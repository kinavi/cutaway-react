import React from 'react';

type AboutPropsType = {
    mix?: string
}

const About = (props: AboutPropsType): JSX.Element => {
  const {
    mix,
  } = props;
  return (
    <div className={`about ${mix}`} />
  );
};

export default About;
