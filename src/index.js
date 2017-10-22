import React from 'react'
import ReactDOM from 'react-dom'
import AppBook from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
    <MuiThemeProvider>
        <AppBook/>
    </MuiThemeProvider>
)

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
)
