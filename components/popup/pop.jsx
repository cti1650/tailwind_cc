import { useCallback, useEffect, useState } from "react";
import cc from "classcat";
import copy from "clipboard-copy";

export const Popup = (props) => {
  const { onClose, comment } = props;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if(comment){
      setOpen(true);
    }
  }, [comment]);
  useEffect(()=>{
    if(open){
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  },[open])
  return (
    <>
      <div
        className={cc([
          "fixed bottom-0 right-0 py-1 px-4 border shadow-lg bg-gray-100 text-gray-800 rounded-tl duration-300",
          {  "invisible": !open },
        ])}
      >
        {comment}
      </div>
    </>
  );
};
