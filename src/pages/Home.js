import React from 'react'
import Form from '../components/Form/index'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function HomePage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
      let utmSource = searchParams.get("utm_source");
      let utmMedium = searchParams.get("utm_medium");
      let utmTerm = searchParams.get("utm_term");
      localStorage.setItem('utm_source', utmSource);
      localStorage.setItem('utm_medium', utmMedium);
      localStorage.setItem('utm_term', utmTerm);
  }, [searchParams])
  
  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <Form />
    </div>
  )
}

export default HomePage