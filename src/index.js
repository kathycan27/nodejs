import React from 'react';
import  ReactDOM from 'react-dom';
import {Hola, Hola2} from './sumar'
import Product from './producto'
import {Postd} from './post'
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <div><Product/>
    <Postd/>
    <Hola/><Hola2/><Hola2/>
    </div>
)