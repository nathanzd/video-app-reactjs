import ReactDOM from 'react-dom';
import React from 'react';
import {App} from "./app"
//import '../dist/style.css'

//Antes do babel-core e do babel-preset-react
// ReactDOM.render(App(),document.getElementById('root'));

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.css'



ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
,document.getElementById('root'));