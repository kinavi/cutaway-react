import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// import classnames from 'classnames';
import {
  MainPropsType, ITab, IPost, INews,
} from '../types';
import { NEWS, TAGS, POSTS } from '../../constants';
import { Tag } from '../Tag';
import { Post } from '../Post';
import { News } from '../News';

export const Main = (props: MainPropsType): JSX.Element => {
  const {
    news = NEWS,
  } = props;
  return (
    <div className="main">
      <div className="row ">
        <div className="col-sm-8 main__tags-container">
          {
            TAGS.map((tag: ITab) => <Tag key={uuidv4} {...tag} mix="main__tag" />)
          }
        </div>
        <div className="col-sm main__tags-container">
          {
            TAGS.map((tag: ITab) => <Tag key={uuidv4} {...tag} mix="main__tag" />)
          }
        </div>
      </div>
      <div className="row main">
        <div className="col-sm-8 main__news-container">
          {
            news.map((item: INews, index: number) => <News index={index} key={uuidv4} {...item} />)
          }
        </div>

        {/* <div className="col-sm main__news-container">
          {
            news.map((item: INews) => <News key={uuidv4} {...item} />)
          }
        </div> */}
        <div className="col-sm main__blog-container">
          {
              POSTS.map((post: IPost) => <Post key={uuidv4} {...post} mix="main__post" />)
            }
        </div>
      </div>
      {/* <Field label="" placeholder="Search" mix="main__field" /> */}

    </div>
  );
};
