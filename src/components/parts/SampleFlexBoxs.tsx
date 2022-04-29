/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cc from 'classcat';
import React, { useCallback } from 'react';
import { useClassNameCopy } from '@hooks/useClassNameCopy';

export const SampleFlexBoxs = (props) => {
  const {
    className,
    dammyStyle,
    childClasses,
    boxCount,
    size,
    children,
  } = props;
  const { setClipboard } = useClassNameCopy();
  const handleClick = useCallback((classValue) => {
    setClipboard(classValue);
  }, []);
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
  childClasses: [],
};
