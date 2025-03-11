import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
function Counter(){
  const [count,setCount]=useState(0);
  // const [calculation,setCalculation]=useState(0);
  // useEffect(()=>{
  //   setCalculation(()=>count * 2);
  // },[count]);
  return(
    <>
    <p>Count:{count}</p>
    <button onClick={()=>setCount((c)=>c+1)}>+</button>
    {/* <p>Calculations:{calculation}</p> */}
    </>
  )
}
export default Counter

// function Timer(){
//   const [count,setCount]=useState(2);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount((count)=>count+34);
//     },1000);
//   },[]);
//   return (
//     <>
//     <h1>i have rendered {count} times</h1>
//     </>
//   )
// }
// export default Timer
// function Car(){
//   const [car,setCar]=useState({
//     brand:"Ford",
//     model:"Musteng",
//     year:"2222",
//     color:"red"
//   });
//   const updateColor=()=>{
//     setCar(priviousState=>{
//       return {...priviousState,color:"Yellow"}
//     });
//   }
//   return (
//     <>
//     <h1>My car {car.brand}</h1>
//     <p>
//       It is {car.color} {car.model} {car.year} {car.color}
//     </p>
//     <button type="button" onClick={updateColor}>Yellow</button>
//     {/* <button onClick={()=>setCar({... car,color:"pink",brand:"nothing"})}>change color</button> */}
//     </>
//   )
// }
// export default Car


// function FavoriteColor(){
//   const [color,Colors]=useState('red')
//   return (
//     <>
//     <h1>{color}</h1>
//     <button type="button" onClick={()=>Colors("blue")}>Blue</button>
//     </>
//   )
// }
// export default FavoriteColor

// function Car(){
  // const [barand,setBrand]=useState("Ford");
  // const [model,setModel]=useState("Mustang");
  // const [year,setYear]=useState("2222");
  // const [color,setColor]=useState("red")

//   return (
//     <>
//     <h1>My {barand}</h1>
//     <p>
//       {color} {model} from {year}
//     </p>
//     </>
//   )
// }
// export default Car
// function FavoriteColor(){
//   const [color,setColor]=useState("red")
  
//    return (
//     <>
//     <h1>my FavoriteColor color is  {color}</h1>
//     {/* <button onClick={clicme}>Click me</button> */}
//     </>
//    )
// }
// export default FavoriteColor;













// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// export default App
