import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<AuthContextProvider><App /></AuthContextProvider>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
)

// ReactDOM.render(
//     <React.StrictMode>
//       <AuthContextProvider>
//         <App />
//       </AuthContextProvider>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
