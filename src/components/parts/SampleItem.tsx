/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cc from 'classcat';
import React, { useCallback } from 'react';
import { useClassNameCopy } from '@hooks/useClassNameCopy';

export const SampleItem = (props) => {
  const { className, title, optionStyle } = props;
  const { setClipboard } = useClassNameCopy();
  const handleClick = useCallback(() => {
    setClipboard(className);
  }, [className]);
  return (
    <>
      <div
        className={cc([
          className,
          optionStyle,
          'h-full w-full select-none',
          {
            rounded: !~(className + optionStyle).indexOf('rounded'),
            border: !~(className + optionStyle).indexOf('border'),
          },
        ])}
        title={className}
        onClick={handleClick}
      >
        {title}
      </div>
    </>
  );
};
