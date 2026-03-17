import React from 'react'
import './styles/style.scss'
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import Component from './components/Component';
function App() {

  return (
    <>
     <Header/>
     <Main>
      <Component />
     </Main>
     <Footer />
    </>
  )
}

export default App
