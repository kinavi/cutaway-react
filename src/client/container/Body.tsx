import React from 'react';

type BodyPropsType = {
    title?: string;
    children?: Array<JSX.Element> | JSX.Element;
}

export const Body = (props: BodyPropsType): JSX.Element => {
  const {
    children,
  } = props;
  return (
    <div className="body-container">
      {children}
    </div>
  );
};
