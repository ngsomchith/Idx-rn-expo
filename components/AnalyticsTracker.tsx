import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../config/firebase';
// import { analytics } from './firebase';  // Importez votre instance Firebase Analytics

const AnalyticsTracker = ({pageView}) => {
  const location = useLocation();

  useEffect(() => {
    logEvent(analytics, pageView, {
    // logEvent(analytics, 'page_view', {
      page_location: window.location.href,
      page_path: location.pathname,
    });
  }, [location]);

  return null;
};
export default AnalyticsTracker

