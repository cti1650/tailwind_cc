/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cc from 'classcat';
import copy from 'clipboard-copy';
import * as gtag from '@lib/gtag';
import React from 'react';

export const SampleBox = (props) => {
    const { className, dammyStyle, size, onCopy } = props;
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
        <div className='p-2 h-24 w-24 select-none' title={className}>
          <div
            className={cc([
              'border bg-white p-2 rounded w-full h-full',
              dammyStyle ? dammyStyle : className,
            ])}
            onClick={handleClick}
          >
            <div
              className={cc([
                'border bg-blue-400 rounded',
                {
                  'h-full w-full': !size,
                  'h-6 w-6': size === 'small',
                },
              ])}
            ></div>
          </div>
        </div>
      </>
    );
  };