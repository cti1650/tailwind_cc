import copy from 'clipboard-copy';
import * as gtag from '@lib/gtag';
import toast from 'react-hot-toast';
import { useCallback } from 'react';

type Type = () => {
    setClipboard: (className: string) => void;
}

export const useClassNameCopy:Type = () => {
    const setClipboard = useCallback((className:string) =>{
        copy(className);
      const comment = 'Copy ClassName\n「' + className + '」';
      toast.success(comment);
      gtag.event({
        action: 'Class Copy',
        category: 'Classes',
        label: className,
      });
      console.log(comment);
    },[])
    return {
        setClipboard
    }
}