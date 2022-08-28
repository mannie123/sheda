 import First from "./Pages/First"
// import Third from "./Pages/Third";
import {data} from "./Data"
import './App.css';
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";


function App() {
  return (
<>


<Routes>


<Route path="/" element={<First/>}/>
<Route path="/Cart" element={<Cart/>}/>


</Routes>

{/* <Third name="Button" age="First" data={data}/> */}

</>
  );
}

export default App;





