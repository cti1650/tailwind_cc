import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtag from '@lib/gtag';

export const usePageView = () => {
  const router = useRouter();
  console.log(gtag.GA_ID);
  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    const handleRouteChange = (path, { shallow }) => {
      if (!shallow) {
        gtag.pageview(path);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};
