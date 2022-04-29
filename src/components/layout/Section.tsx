import { ReactNode, VFC } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const Section: VFC<Props> = ({ title, children }) => {
  return (
    <div className='w-full flex flex-col space-y-2 mb-6'>
      <div className='text-lg font-bold pt-4'>
        {title}
      </div>
      {children}
    </div>
  );
};
