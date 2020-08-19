import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../component/Header';
import { SwitcherBody } from '../component/SwitcherBody';
import { Link, LinkPropsType } from '../component/Link';
import { LINKS_BODY, TITLE_BODY } from '../constants';

export const App = (): JSX.Element => (
  <div className="app">
    <Header
      title={TITLE_BODY}
      extraInform="A block with additional information, advertising, etc."
    >
      {
        LINKS_BODY.map(
          (link: LinkPropsType): JSX.Element => <Link {...link} key={uuidv4} />,
        )
      }
    </Header>
    <SwitcherBody />
  </div>
);
