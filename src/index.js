import {render} from 'react-dom'
import React, { Suspense, lazy} from 'react'
import './styles.css'
import imgPath from './public/images/profile.jpg';
import voice from './public/voice/birthday.mp3';

// Create a lazy-loaded split bundle for the canvas
const Canvas = lazy(() => import('./Canvas'))

render(
    <>
        <Suspense fallback={null}>
            <Canvas/>
        </Suspense>
        {/*<div class="header">
      <span class="active">ART</span>
      <span>ABOUT</span>
      <span>VISIT</span>
      <span>SHOP</span>
      <span>SEARCH</span>
    </div>*/}
        <div className="middle">
            <img className="profile" src={imgPath}/>
            <h2>Happy</h2>
            <h1>BirthDay</h1>
            <h3>Marzi</h3>
        </div>
    </>,
    document.getElementById('root'),
)
