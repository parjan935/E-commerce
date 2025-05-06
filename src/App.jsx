// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const HandleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const submitForm = (e) => {
//     e.preventDefault()
//     alert(formData.name+"---"+formData.email)
//     setName(formData.name)
//     setEmail(formData.email)
//   };

//   return (
//     <div>
//       <form action="" onSubmit={submitForm}>
//         <label htmlFor="name">Name : </label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={HandleChange}
//         />
//         <label htmlFor="email">Email : </label>
//         <input
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={HandleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <p>name:{name || "--"}</p>
//       <p>email:{email || "--"}</p>
//     </div>
//   );
// };

// export default App;


import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import ProductList from './ProductList';
import Contactus from './Contactus';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/products' element={<ProductList/>}/>
      <Route path='/contactUs' element={<Contactus/>}/>
    </Routes>
    </>
  )
}

export default App
