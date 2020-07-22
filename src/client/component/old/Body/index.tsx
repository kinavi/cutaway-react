import React from 'react';

type BodePropsType = {
  title: string;
}

const Body = (props: BodePropsType): JSX.Element => {
  const {
    title,
  } = props;

  return (
    <div className="body">
      {title}
    </div>
  );
};

export default Body;
