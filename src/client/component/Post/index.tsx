import React from 'react';
import classnames from 'classnames';
import { useSpring, animated } from 'react-spring';
import { PostPropsType } from '../types';

export const Post = (props: PostPropsType): JSX.Element => {
  const {
    mix, message, userName,
  } = props;
  const anim = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(100%, 0%, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0px, 0%, 0px)',
    },
    delay: 400,
  });
  return (
    <animated.div
      className={classnames('post', mix)}
      style={anim}
    >
      <div className="post__user-name">
        {userName}
      </div>
      <hr style={{ background: 'black', margin: '5px 0' }} />
      <div className="post__message">
        {message}
      </div>
    </animated.div>
  );
};
