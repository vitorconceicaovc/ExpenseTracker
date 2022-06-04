import React from 'react'
import GlobalStyle from './styles/global'
import Header from './components/Header/index'
import Resume from './components/Resume';
import Form from './components/Form';


const App = () => {
  return (
    <>
        <GlobalStyle/>
        <Header/>
        <Resume/>
        <Form/>
    </>
  )
};

export default App