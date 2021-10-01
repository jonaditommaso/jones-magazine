import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {

  useEffect(() => {
    // if(window.location.pathname !== "/library") {
        const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
        });
        unlisten();
    // }

    return () => {
        
            unlisten();
        
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);