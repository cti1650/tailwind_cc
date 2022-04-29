/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cc from 'classcat';
import React, { useCallback } from 'react';
import { useClassNameCopy } from '@hooks/useClassNameCopy';

export const SampleBox = (props) => {
  const { className, dammyStyle, size } = props;
  const { setClipboard } = useClassNameCopy();
  const handleClick = useCallback(() => {
    setClipboard(className);
  }, [className]);
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
