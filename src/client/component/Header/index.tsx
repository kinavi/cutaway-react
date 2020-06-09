import React from 'react';

type HeaderType = {
    title: string,
    children: Array<JSX.Element>
}

const Header = (props: HeaderType): JSX.Element => {
  const {
    title, children,
  } = props;

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__title-group">
          <p>
            {title}
          </p>
        </div>
        <div className="header__links-group">
          <div className="header__links-container">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
