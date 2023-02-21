import React from 'react';
import ReactDOM from "react-dom";
import './style.css';
import App from './app';


// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);


// const devMode = process.env.NODE_ENV === 'development';
// if (devMode && module && module.hot) {
//     module.hot.accept();
// }