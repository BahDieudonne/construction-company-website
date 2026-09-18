import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter,useLocation} from 'react-router-dom';
import App from './App';
import './styles.css';
function ScrollToTop(){const {pathname}=useLocation();useEffect(()=>window.scrollTo(0,0),[pathname]);return null}
createRoot(document.getElementById('root')).render(<BrowserRouter><ScrollToTop/><App/></BrowserRouter>);
