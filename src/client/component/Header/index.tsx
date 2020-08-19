import React from 'react';

type HeaderType = {
    title: string;
    extraInform: string;
    children: Array<JSX.Element>;
}

const Header = (props: HeaderType): JSX.Element => {
  const {
    title, children, extraInform,
  } = props;

  return (
    <div className="header">
      <div className="header__title-group">
        <p>
          {title}
        </p>
      </div>
      <div className="header__links-group">
        {/* <div className="header__links-container"> */}
        {children}
        {/* </div> */}
      </div>
      <div className="header__extra-information">
        {extraInform}
      </div>
    </div>
  );
};

export default Header;
