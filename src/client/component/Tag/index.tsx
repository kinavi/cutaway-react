import React from 'react';
import classnames from 'classnames';
import { useSpring, animated } from 'react-spring';
import { TagPropsType } from '../types';

export const Tag = (props: TagPropsType): JSX.Element => {
  const {
    label, mix,
  } = props;
  const anim = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0px, -100%, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0px, 0%, 0px)',
    },
    delay: 200,
  });
  return (
    <animated.div
      style={anim}
      className={classnames('tag', mix)}
    >
      {label}
    </animated.div>
  );
};
