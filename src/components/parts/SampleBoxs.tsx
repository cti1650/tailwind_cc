/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useCallback } from 'react';
import cc from 'classcat';
import React from 'react';
import { useClassNameCopy } from '@hooks/useClassNameCopy';

export const SampleBoxs = (props) => {
  const { className, dammyStyle, boxCount, size, children } = props;
  const { setClipboard } = useClassNameCopy();
  const handleClick = useCallback(() => {
    setClipboard(className);
  }, [className]);
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
};
