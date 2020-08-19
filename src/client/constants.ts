import { LinkPropsType } from './types';
import news from '../../public/news.jpg';
import { INews, ITab, IPost } from './component/types';

export const LINKS_BODY: Array<LinkPropsType> = [
  { label: 'Main', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Projects', url: '/projects' },
];

export const TITLE_BODY = 'We create design and ideas for your business';

export const NEWS: INews[] = [
  {
    label: 'Label',
    description: 'We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object. These bundles are available on unpkg, as well as in the npm package.',
    url: '/test',
    img: {
      label: 'testImg',
      alt: 'Тут картинка',
      url: news,
    },
  },
  {
    label: 'Label',
    description: 'We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object. These bundles are available on unpkg, as well as in the npm package.',
    url: '/test',
    img: {
      label: 'testImg',
      alt: 'Тут картинка',
      url: news,
    },
  },
  {
    label: 'Label',
    description: 'We provide react-bootstrap.js and react-bootstrap.min.js bundles with all components exported on the window.ReactBootstrap object. These bundles are available on unpkg, as well as in the npm package.',
    url: '/test',
    img: {
      label: 'testImg',
      alt: 'Тут картинка',
      url: news,
    },
  },
];

export const TAGS: ITab[] = [
  {
    label: 'test1',
  },
  {
    label: 'test1',
  },
  {
    label: 'test1',
  },
  {
    label: 'test1',
  },
];

export const POSTS: IPost[] = [
  {
    message: 'hello, hello, hello, hello',
    userName: 'Вася',
  },
  {
    message: 'hello, hello, hello, hello',
    userName: 'Вася',
  },
  {
    message: 'hello, hello, hello, hello',
    userName: 'Вася',
  },
  {
    message: 'hello, hello, hello, hello',
    userName: 'Вася',
  },
];
