import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type LinkPropsType = {
    label: string,
    url: string
  }

export const Link = (props: LinkPropsType): JSX.Element => {
  const {
    label, url,
  } = props;
  const location = useLocation();
  const isActive = location.pathname === url;

  // const bemGenerator = {

  // }

  // console.log(location.pathname);
  // useEffect(()=>{
  //   if()
  // }, [location])
  return (
    <div>
      <a className={`header__link ${isActive && 'header__link_active'}`} href={url}>
        {label}
      </a>
    </div>

  );
};
