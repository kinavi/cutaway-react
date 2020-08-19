import React from 'react';
import { useTransition, animated } from 'react-spring';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import { About } from '../About';
import { Main } from '../Main';
import { Body } from '../../container/Body';

export const SwitcherBody = (): JSX.Element => {
  const location = useLocation();

  const transitions = useTransition(
    location,
    (location) => location.pathname,
    {
      from: {
        opacity: 0,
        transform: 'translate3d(100%, 0, 0)',
      },
      enter: {
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)',
      },
      leave: {
        opacity: 0,
        position: 'absolute',
      },
      config: {
        duration: 250,
        // delay: 1000,
      },
    },

  );

  return (
    <div className="switcher-body">
      {
        transitions.map(({ item, props, key }) => (
          <animated.div
            className="switcher-body__animated-container"
            key={key}
            style={props}
          >
            <Switch location={item}>
              <Route path="/" exact>
                <Body>
                  <Main />
                </Body>
              </Route>
              <Route path="/about">
                <Body>
                  <About />
                </Body>
              </Route>
              {/* <Route path="/projects" component={<div>Projects</div>} /> */}
            </Switch>
          </animated.div>
        ))
        }
    </div>
  );
};
