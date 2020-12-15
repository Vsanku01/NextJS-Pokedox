import React from 'react';
import Head from 'next/head';

function Layout({ title, children }) {
  return (
    <div className='bg-gray-300'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container mx-auto max-w-xl min-h-screen pt-8 '>
        {children}
      </main>
      <footer className='text-center'>
        <a>By @Vishnu Darshan ❤️</a>
      </footer>
    </div>
  );
}

export default Layout;
