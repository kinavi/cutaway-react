import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export type LinkPropsType = {
    label: string,
    url: string
  }

export const Link = (props: LinkPropsType): JSX.Element => {
  const {
    label, url,
  } = props;

  const location = useLocation();
  const isActive = location.pathname === url;
  const { transform } = useSpring({
    transform: `scale(${isActive ? 2.5 : 1})`,
    config: {
      duration: 200,
    },
  });

  return (
    <animated.div
      className="header__link"
      style={{
        transform,
      }}
    >
      <RouterLink to={url} replace>
        {label}
      </RouterLink>
    </animated.div>
  );
};
