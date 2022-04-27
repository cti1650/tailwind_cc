/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback } from 'react';
import cc from 'classcat';
import copy from 'clipboard-copy';
import * as gtag from '@lib/gtag';
import React from 'react';

export const SampleBoxs = (props) => {
    const { className, dammyStyle, boxCount, size, onCopy, children } = props;
    const handleClick = useCallback(() => {
      copy(className);
      const comment = 'コピーしました「' + className + '」';
      onCopy(comment);
      gtag.event({
        action: 'Class Copy',
        category: 'Classes',
        label: className,
      });
      console.log(comment);
    }, [className, onCopy]);
    return (
      <>
        <div className='p-2 h-24 w-24 select-none' title={className}>
          <div
            className='relative border bg-white p-2 rounded w-full h-full'
            onClick={handleClick}
          >
            <div
              className={cc([
                { 'h-full w-full': !size, [size]: size },
                dammyStyle ? dammyStyle : className,
              ])}
            >
              {[...Array(boxCount)].map((value, index) => {
                return children ? (
                  children
                ) : (
                  <div
                    key={index}
                    className='w-full h-full border bg-blue-400 rounded'
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  SampleBoxs.defaultProps = {
    boxCount: 8,
    onCopy: () => {},
  };