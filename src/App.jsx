import React from 'react'
import './App.css'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'

import Page1 from './components/Page1/Page1'
import Page3 from './components/page3/page3/profil1'
import Page4 from './components/page3/page3.1/profil2'
import Page5 from './components/Page5/Page5'
import Page2 from './components/Page5/Page2/Page2'
import SignUp from './components/SignUp/SignUp'
import ShoppingPage from './components/ShoppingPage/ShoppingPage'
import Bodiring from './components/Bodiring/Bodiring'
import SignIn from './components/SignIn/SignIn'

export default function App() {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <Header />

      <Routes>
        <Route path='/home' element={<Page1 />} />
        <Route path='page2' element={<Page2 t={t} />} />
        <Route path='page3' element={<Page3 t={t} />} />
        <Route path='page4' element={<Page4 t={t} />} />
        <Route path='page5' element={<Page5 t={t} />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='/' element={<SignIn />} />
        <Route path='shopping' element={<ShoppingPage t={t} />} />
        <Route path='bodiring' element={<Bodiring t={t} />} />
      </Routes>

      <Footer t={t} />
    </div>
  )
}
