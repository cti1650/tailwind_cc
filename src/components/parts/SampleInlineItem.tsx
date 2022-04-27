/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cc from 'classcat';
import copy from 'clipboard-copy';
import * as gtag from '@lib/gtag';
import React from 'react';

export const SampleInlineItem = (props) => {
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
          'border h-full w-full rounded select-none',
        ])}
        title={className}
        onClick={handleClick}
      >
        <span>{title}</span>
      </div>
    </>
  );
};