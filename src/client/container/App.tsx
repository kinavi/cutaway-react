import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Router, Switch, Route,
} from 'react-router-dom';
import Header from '../component/old/Header';
import Body from '../component/old/Body';
import { Link, LinkPropsType } from '../component/old/Link';
import About from '../component/About';
import Page from './Page';

const links: Array<LinkPropsType> = [
  { label: 'Hello', url: 'hello' },
  { label: 'Main', url: '/' },
];
const text = 'We create design and ideas for your business';

type DragContainerPropsType = {
  children: Array<JSX.Element> | JSX.Element
}

const DragContainer = (props: DragContainerPropsType): JSX.Element => {
  const {
    children,
  } = props;
  return (
    <div className="test-perp">
      {children}
    </div>
  );
};

const useMousePosition = () => {
  const [getX, setX] = useState();
  const [getY, setY] = useState();

  useEffect(() => {

  }, []);

  return [getX, getY];
};

type DragElementPropsType = {
  label: string;
}
const DragElement = (props: DragElementPropsType): JSX.Element => {
  const {
    label,
  } = props;
  const [isStartDrag, setIsStartDrag] = useState(false);

  const handleDragStart = () => {
    console.log('Star drug');
  };

  const cls = `test-perp__item ${isStartDrag && 'test-perp__item_drag-start'}`;

  return (
    <div
      onDragStart={() => setIsStartDrag(true)}
      onDragEnd={() => setIsStartDrag(false)}
      draggable
      className={cls}
    >
      {label}
    </div>
  );
};

const App = (): JSX.Element => (
  <Page>
    <DragContainer>
      <DragElement label="1" />
      <DragElement label="2" />
      <DragElement label="3" />
    </DragContainer>
  </Page>

  // <div className="app">
  //   <Header title={text}>
  //     {
  //           links.map((link: LinkPropsType, index: number): JSX.Element => <Link {...link} key={index} />)
  //       }
  //   </Header>
  //   <Switch>
  //     <Route path="/hello"><Body title="Hello" /></Route>
  //     <Route><Body title="Buy" /></Route>
  //   </Switch>
  // </div>
);

export default App;
