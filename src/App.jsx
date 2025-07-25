import React from 'react'
import HomepageHero from './ZyveFitWebsite'
import Website1 from './Website1'
import Website2 from './Website2'
import Website3 from './Website3'
import Website4 from './Website4'
import Website5 from './Website5'
import Website6 from './Website6'
import Website7 from './Website7'
import Website8 from './Website8'
import Website9 from './Website9'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Website from './Website'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< HomepageHero />} />
          <Route path='/0' element={< Website />} />
          <Route path='/1' element={< Website1 />} />
          <Route path='/2' element={< Website2 />} />
          <Route path='/3' element={< Website3 />} />
          <Route path='/4' element={< Website4 />} />
          <Route path='/5' element={< Website5 />} />
          <Route path='/6' element={< Website6 />} />
          <Route path='/7' element={< Website7 />} />
          <Route path='/8' element={< Website8 />} />
          <Route path='/9' element={< Website9 />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
