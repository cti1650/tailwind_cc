import cc from 'classcat';
import { SampleInlineItem } from './SampleInlineItem';

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
