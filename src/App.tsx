import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Saved, SearchPage } from 'pages'
import { Header } from 'components'
import { store } from 'store'
import { Footer } from './components/Footer/Footer'
import { NoMatch } from './pages/NoMatch/NoMatch'

const App = () => (
  <Provider store={store}>
    <Header />
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/*" element={<NoMatch />} />
    </Routes>
    <Footer />
  </Provider>
)

export default App
