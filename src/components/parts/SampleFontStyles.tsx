import cc from 'classcat';
import { SampleItem } from './SampleItem';

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
