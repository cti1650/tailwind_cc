import { useCallback, useRef } from 'react';

export const TailwindSearch = (props) => {
  const { href } = props;
  const searchRef = useRef(null);
  const pageRef = useRef(null);
  const handleClick = useCallback(
    (e) => {
      const optionKeyword = pageRef.current.checked
        ? 'q=site%3Atailwindcss.com+'
        : 'q=tailwindcss.css+';
      window.open(
        'https://www.google.com/search?' +
          optionKeyword +
          encodeURIComponent(searchRef.current.value)
      );
    },
    [searchRef]
  );
  const handleBlur = useCallback(
    (e) => {
      searchRef.current.focus();
    },
    [searchRef]
  );
  return (
    <>
      <div className='w-full p-2 flex flex-col'>
        <div className='w-full h-8 flex flex-row space-x-2'>
          <input
            type='text'
            ref={searchRef}
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
          <label>
            <div className='flex flex-row space-x-2'>
              <div>official only</div>
              <div>
                <input type='checkbox' ref={pageRef}></input>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};
TailwindSearch.defaultProps = {};
