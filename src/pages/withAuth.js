// withAuth.js

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = Cookies.get('authToken');
      if (!isAuthenticated) {
        router.push('/signin');
      }
    }, []);
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
