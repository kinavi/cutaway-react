import React from 'react';

interface IName {
    test: string,
    value: number
}

const Test = (porps:IName): JSX.Element => {
  const { test, value } = porps;
  return (
    <div>
      {test}
      {' '}
      -
      {' '}
      {value}
    </div>
  );
};

export default Test;
