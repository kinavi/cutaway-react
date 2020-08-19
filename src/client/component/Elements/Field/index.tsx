import React from 'react';
import classnames from 'classnames';
import { FieldType } from '../types';

type FieldPropsType = {
  dataId?: string;
} & FieldType

export const Field = (props: FieldPropsType): JSX.Element => {
  const {
    label, placeholder, mix, isRequired, dataId,
  } = props;
  return (
    <div className={classnames(`field`, mix)}>
      <label htmlFor={dataId}>{label}</label>
      <input required={isRequired} type="text" className="field__input" id="" name={dataId} placeholder={placeholder} />
    </div>
  );
};
