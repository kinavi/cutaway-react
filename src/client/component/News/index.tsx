import React from 'react';
import { useSpring, animated } from 'react-spring';
import { NewsPropsType } from '../types';

export const News = (props: NewsPropsType): JSX.Element => {
  const {
    img, label, url, description, index,
  } = props;
  const anim = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0px, +100%, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0px, 0%, 0px)',
    },
    delay: 200 * (index),
  });
  return (
    <animated.div className="news" style={anim}>

      <div className="news__group">
        <div className="news__label">
          {label}
        </div>
        <hr />
        <div className="news__description">
          {description}
        </div>
      </div>
      {/* <div className="news__img">
          <img className="img news__img" alt={img.alt} src={img.url} />
        </div> */}
      {/* <a href={url} /> */}
    </animated.div>
  );
};
