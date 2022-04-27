/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cc from 'classcat';
import copy from 'clipboard-copy';
import * as gtag from '@lib/gtag';
import React from 'react';

export const SampleFlexBoxs = (props) => {
    const {
      className,
      dammyStyle,
      childClasses,
      boxCount,
      size,
      onCopy,
      children,
    } = props;
    const handleClick = (classValue) => {
      copy(classValue);
      const comment = 'コピーしました「' + classValue + '」';
      onCopy(comment);
      gtag.event({
        action: 'Class Copy',
        category: 'Classes',
        label: classValue,
      });
      console.log(comment);
      return classValue;
    };
    return (
      <>
        <div className='p-2 h-24 w-full select-none' title={className}>
          <div className='border bg-white px-2 py-4 rounded w-full h-full'>
            <div
              className={cc([
                { 'h-full w-full': !size, [size]: size },
                dammyStyle ? dammyStyle : className,
              ])}
            >
              {childClasses.map((value, index) => {
                return children ? (
                  children
                ) : (
                  <div
                    key={index}
                    title={value}
                    className={cc([
                      'border bg-blue-400 rounded',
                      { [value]: value },
                    ])}
                    onClick={() => {
                      handleClick(value);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  SampleFlexBoxs.defaultProps = {
    boxCount: 8,
    onCopy: () => {},
    childClasses: [],
  };