import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-router-dom';

import Header from './component/Header';
import Body from './component/Body';

import './style/index.sass';

const text = 'We create design and ideas for your business';
const links: Array<LinkPropsType> = [
  { label: 'one', url: 'linkOne' },
  { label: 'one', url: 'linkOne' },
];

type LinkPropsType = {
  label: string,
  url: string
}

const Link = (props: LinkPropsType) => {
  const {
    label, url,
  } = props;

  return (
    <div>
      <a href={url}>
        {label}
      </a>
    </div>

  );
};

const App = () => (
  <div className="app">
    <Header title="text">
      {
        links.map((link: LinkPropsType, index: number) => <Link {...link} key={index} />)
      }
    </Header>
    <Body />
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));
