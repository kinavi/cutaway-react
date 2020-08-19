import React, { useState } from 'react';
import { DragContainerPropsType, DragElementPropsType } from './types';

export const DragContainer = (props: DragContainerPropsType): JSX.Element => {
  const {
    children,
  } = props;
  return (
    <div className="test-perp">
      {children}
    </div>
  );
};

export const DragElement = (props: DragElementPropsType): JSX.Element => {
  const {
    label,
  } = props;
  const [isStartDrag, setIsStartDrag] = useState<boolean>(false);

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
