import { useCallback, useRef, useState } from 'react';
import cc from 'classcat';

export const TailwindSearch = (props) => {
  const searchRef = useRef(null);
  const [check, setCheck] = useState(false);
  const handleClick = useCallback(
    (e) => {
      const optionKeyword = check
        ? 'q=site%3Atailwindcss.com+'
        : 'q=tailwindcss.css+';
      window.open(
        'https://www.google.com/search?' +
          optionKeyword +
          encodeURIComponent(searchRef.current.value)
      );
    },
    [searchRef, check]
  );
  const handleCheckClick = useCallback(
    (e) => {
      setCheck((prev) => {
        return !prev;
      });
    },
    [check]
  );
  const handleBlur = useCallback(
    (e) => {
      searchRef.current.focus();
    },
    [searchRef]
  );
  return (
    <>
      <div className='w-full py-2 px-4 flex flex-col'>
        <div className='w-full h-12 flex flex-row space-x-2'>
          <input
            id='q'
            name='q'
            type='text'
            ref={searchRef}
            placeholder='Google or Official Page Search'
            className='w-full px-4 focus:outline-none shadow-inner border border-gray-200 rounded'
          ></input>

          <button
            onClick={handleClick}
            onBlur={handleBlur}
            title={'search'}
            className='w-16 shadow rounded-sm focus:outline-none hover:bg-blue-100 focus:bg-blue-100'
          >
            search
          </button>
        </div>
        <div className='ml-auto py-2 text-right text-sm'>
          <div className='flex flex-col space-y-2'>
            <div className='mx-auto'>official only</div>
            <div>
              {/* <input
                  type='checkbox'
                  ref={pageRef}
                  className='w-12 h-12'
                ></input> */}
              <div
                onClick={handleCheckClick}
                className={cc([
                  'w-12 h-6 p-1 mx-auto border border-gray-400 rounded-full',
                  {
                    'bg-blue-200': check,
                    'bg-white': !check,
                  },
                ])}
              >
                <div
                  className={cc([
                    'w-4 h-4 bg-white border border-gray-400 rounded-full',
                    {
                      'ml-auto': check,
                      'mr-auto': !check,
                    },
                  ])}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
TailwindSearch.defaultProps = {};
