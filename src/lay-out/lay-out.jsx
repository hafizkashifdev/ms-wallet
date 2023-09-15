import React from 'react';
import Footer from './footer/footer';
import Header from './header/header';




function Layout({ children }) {
  return (
<div>
   
        <Header/>
      
      <main>{children}</main>
      <footer><Footer/></footer>
      </div>
  );
}

export default Layout;
