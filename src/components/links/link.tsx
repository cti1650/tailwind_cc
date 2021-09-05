import * as gtag from '@lib/gtag';
import React from 'react';
export const PageLink = (props) => {
  const { href, title } = props;
  const ClickEvent = () => {
    gtag.event({
      action: 'Link Click',
      category: 'Links',
      label: title,
    });
  };
  return (
    <>
      <div className='w-full h-full'>
        <a
          href={href}
          title={title}
          onClick={ClickEvent}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={'https://capture.heartrails.com/200x200/cool?' + href}
            alt='linkimg'
          />
        </a>
      </div>
    </>
  );
};
