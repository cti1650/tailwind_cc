import { ReactNode, VFC } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const Section: VFC<Props> = ({ title, children }) => {
  return (
    <div className='w-full flex flex-col space-y-2 mb-6'>
      <div className='sticky top-0 h-[40px] bg-white opacity-75 z-10 text-lg font-bold pt-4'>
        {title}
      </div>
      {children}
    </div>
  );
};