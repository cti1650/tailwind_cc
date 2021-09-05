import { useCallback, useEffect, useState } from 'react';
import cc from 'classcat';
import copy from 'clipboard-copy';
import React from 'react';

export const Popup = (props) => {
  const { onClose, comment } = props;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (comment) {
      setOpen(true);
    }
  }, [comment]);
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  }, [open]);
  return open ? (
    <>
      <div
        className={cc([
          'fixed bottom-0 right-0 py-2 px-4 border shadow-lg bg-gray-100 text-gray-800 rounded-tl duration-300',
          { invisible: !open },
        ])}
      >
        {comment}
      </div>
    </>
  ) : null;
};
