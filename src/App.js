import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";

import NavEmpresa from "./NavEmpresa";
import PiePagina from "./components/PiePagina";
// import Home from "./components/Home";
import Contacto from "./components/Contacto";
// import Ubicacion from "./components/Ubicacion";
import "./App.css";

// import Gallery from "./containers/Gallery";
import Gallery from "./Gallery";
// import Portada2 from "./components/image/portada2.jpg";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
       
          <header>
            <nav class="navbar">
           <h1> A ver si aparece..</h1>
              <NavEmpresa />
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Gallery} />
              <Route exact path="/contacto" component={Contacto} />
            </Switch>
          </main>
          <footer> 
           <PiePagina />
           </footer>
        </Router>
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [date, setDate] = useState(null);
//   useEffect(() => {
//     async function getDate() {
//       const res = await fetch('/api/date');
//       const newDate = await res.text();
//       setDate(newDate);
//     }
//     getDate();
//   }, []);
//   return (
//     <main>
//       <h1>Create React App + Go API</h1>
//       <h2>
//         Deployed with{' '}
//         <a
//           href="https://vercel.com/docs"
//           target="_blank"
//           rel="noreferrer noopener"
//         >
//           Vercel
//         </a>
//         !
//       </h2>
//       <p>
//         <a
//           href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
//           target="_blank"
//           rel="noreferrer noopener"
//         >
//           This project
//         </a>{' '}
//         was bootstrapped with{' '}
//         <a href="https://facebook.github.io/create-react-app/">
//           Create React App
//         </a>{' '}
//         and contains three directories, <code>/public</code> for static assets,{' '}
//         <code>/src</code> for components and content, and <code>/api</code>{' '}
//         which contains a serverless <a href="https://golang.org/">Go</a>{' '}
//         function. See{' '}
//         <a href="/api/date">
//           <code>api/date</code> for the Date API with Go
//         </a>
//         .
//       </p>
//       <br />
//       <h2>The date according to Go is:</h2>
//       <p>{date ? date : 'Loading date...'}</p>
//     </main>
//   );
// }

// export default App;
