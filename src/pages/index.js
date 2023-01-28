import 'react-datetime/css/react-datetime.css'
import 'react-leaflet-markercluster/dist/styles.min.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'

import Mappage from './MapPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mappage />} />
      </Routes>
    </Router>
  )
}

export default App
