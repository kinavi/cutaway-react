import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Router, Switch, Route,
} from 'react-router-dom';
import Header from '../component/Header';
import Body from '../component/Body';
import { Link, LinkPropsType } from '../component/Link';


const links: Array<LinkPropsType> = [
  { label: 'Hello', url: 'hello' },
  { label: 'Main', url: '/' },
];
const text = 'We create design and ideas for your business';

const App = (): JSX.Element => (
  <div className="app">
    <Header title={text}>
      {
            links.map((link: LinkPropsType, index: number): JSX.Element => <Link {...link} key={index} />)
        }
    </Header>
    <Switch>
      <Route path="/hello"><Body title="Hello" /></Route>
      <Route><Body title="Buy" /></Route>
    </Switch>
  </div>
);

export default App;
