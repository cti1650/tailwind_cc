/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cc from 'classcat';
import copy from 'clipboard-copy';
import * as gtag from '@lib/gtag';
import React from 'react';

export const SampleItem = (props) => {
  const { className, title, optionStyle, onCopy } = props;
  const handleClick = () => {
    copy(className);
    const comment = 'コピーしました「' + className + '」';
    onCopy(comment);
    gtag.event({
      action: 'Class Copy',
      category: 'Classes',
      label: className,
    });
    console.log(comment);
  };
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