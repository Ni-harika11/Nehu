import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import FavoriteColor  from './App.tsx'
// import Car  from './App.tsx'
// import FavoriteColor from './App.tsx'
// import Timer from './App.tsx'
import Counter from './App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {<Counter/>}
    {/* {<Timer/>} */}
    {/* {<Car/>} */}
    {/* {<FavoriteColor/>} */}
    {/* <App /> */}
  </StrictMode>,
)
