import { useCallback } from 'react';
import cc from 'classcat';
import copy from 'clipboard-copy';

export const SampleItem = (props) => {
  const { className, title, optionStyle, onCopy } = props;
  const handleClick = () => {
    copy(className);
    const comment = 'コピーしました「' + className + '」';
    onCopy(comment);
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
export const SampleInlineItem = (props) => {
  const { className, title, optionStyle, onCopy } = props;
  const handleClick = () => {
    copy(className);
    const comment = 'コピーしました「' + className + '」';
    onCopy(comment);
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

export const SampleBox = (props) => {
  const { className, dammyStyle, size, onCopy } = props;
  const handleClick = () => {
    copy(className);
    const comment = 'コピーしました「' + className + '」';
    onCopy(comment);
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
              { 'h-full w-full': !size, 'h-6 w-6': size === 'small' },
            ])}
          ></div>
        </div>
      </div>
    </>
  );
};

export const SampleBoxs = (props) => {
  const { className, dammyStyle, boxCount, size, onCopy, children } = props;
  const handleClick = useCallback(() => {
    copy(className);
    const comment = 'コピーしました「' + className + '」';
    onCopy(comment);
    console.log(comment);
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
  onCopy: () => {},
};

export const tw_colors = () => {
  return [
    'bg-gray-50',
    'bg-gray-100',
    'bg-gray-200',
    'bg-gray-300',
    'bg-gray-400',
    'bg-gray-500',
    'bg-gray-600',
    'bg-gray-700',
    'bg-gray-800',
    'bg-gray-900',
    'bg-red-50',
    'bg-red-100',
    'bg-red-200',
    'bg-red-300',
    'bg-red-400',
    'bg-red-500',
    'bg-red-600',
    'bg-red-700',
    'bg-red-800',
    'bg-red-900',
    'bg-yellow-50',
    'bg-yellow-100',
    'bg-yellow-200',
    'bg-yellow-300',
    'bg-yellow-400',
    'bg-yellow-500',
    'bg-yellow-600',
    'bg-yellow-700',
    'bg-yellow-800',
    'bg-yellow-900',
    'bg-green-50',
    'bg-green-100',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
    'bg-green-600',
    'bg-green-700',
    'bg-green-800',
    'bg-green-900',
    'bg-blue-50',
    'bg-blue-100',
    'bg-blue-200',
    'bg-blue-300',
    'bg-blue-400',
    'bg-blue-500',
    'bg-blue-600',
    'bg-blue-700',
    'bg-blue-800',
    'bg-blue-900',
    'bg-indigo-50',
    'bg-indigo-100',
    'bg-indigo-200',
    'bg-indigo-300',
    'bg-indigo-400',
    'bg-indigo-500',
    'bg-indigo-600',
    'bg-indigo-700',
    'bg-indigo-800',
    'bg-indigo-900',
    'bg-purple-50',
    'bg-purple-100',
    'bg-purple-200',
    'bg-purple-300',
    'bg-purple-400',
    'bg-purple-500',
    'bg-purple-600',
    'bg-purple-700',
    'bg-purple-800',
    'bg-purple-900',
    'bg-pink-50',
    'bg-pink-100',
    'bg-pink-200',
    'bg-pink-300',
    'bg-pink-400',
    'bg-pink-500',
    'bg-pink-600',
    'bg-pink-700',
    'bg-pink-800',
    'bg-pink-900',
  ];
};

export const SampleColors = (props) => {
  const { onCopy } = props;
  const colors = tw_colors();
  return (
    <>
      <div className='grid grid-cols-10 select-none'>
        {colors.map((color, index) => {
          return (
            <div key={index} className='h-8 rounded-xl'>
              <SampleItem onCopy={onCopy} className={color} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const SampleFontFamilies = (props) => {
  const { onCopy } = props;
  const FontFamilies = ['font-sans', 'font-serif', 'font-mono'];
  return (
    <>
      <div className='grid grid-cols-3 select-none'>
        {FontFamilies.map((family, index) => {
          return (
            <div key={index} className='text-center text-xl rounded-xl p-1'>
              <SampleItem onCopy={onCopy} className={family} title='tailwind' />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const SampleFontStyles = (props) => {
  const { styleItems, optionStyle, baseStyle, onCopy } = props;
  return (
    <>
      <div className={cc([optionStyle, 'grid grid-cols-3 select-none'])}>
        {styleItems.map((item, index) => {
          return (
            <div key={index} className='text-center rounded-xl p-1'>
              <SampleItem
                onCopy={onCopy}
                className={item}
                optionStyle={baseStyle}
                title={item.replace('text-', '').replace('font-', '')}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export const SampleInlineStyles = (props) => {
  const { styleItems, optionStyle, baseStyle, onCopy } = props;
  return (
    <>
      <div className={cc([optionStyle, 'grid grid-cols-3 select-none'])}>
        {styleItems.map((item, index) => {
          return (
            <div key={index} className='text-center rounded-xl'>
              <SampleInlineItem
                onCopy={onCopy}
                className={item}
                optionStyle={baseStyle}
                title={item}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
