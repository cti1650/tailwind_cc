import { SampleItem } from './SampleItem';

export const SampleFontFamilies = (props) => {
  const FontFamilies = ['font-sans', 'font-serif', 'font-mono'];
  return (
    <>
      <div className='grid grid-cols-3 select-none'>
        {FontFamilies.map((family, index) => {
          return (
            <div key={index} className='text-center text-xl rounded-xl p-1'>
              <SampleItem className={family} title='tailwind' />
            </div>
          );
        })}
      </div>
    </>
  );
};
