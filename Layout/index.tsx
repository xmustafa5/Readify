import React from 'react';
import SidBar from './Sidbar';
import Footer from './Footer';
import Router, { useRouter } from 'next/router';

export default function Index({ children }: any) {
  const router = useRouter()
  const isLoginPage = router.pathname === "/login" || router.pathname === "/signup" || router.pathname === "/confirm-signup";
  return (
    <>
      {isLoginPage ? (
       <>
        {children}
      </>
      ) : (
        <>
          <SidBar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
