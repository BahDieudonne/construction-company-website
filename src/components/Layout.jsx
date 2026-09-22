import {useEffect,useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {LanguageProvider} from '../language';
import {ProjectProvider} from '../projectStore.jsx';

function getInitialTheme(){
	const savedTheme = window.localStorage.getItem('cam-theme');
	if(savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function Layout({children}){
	const [theme,setTheme] = useState(getInitialTheme);

	useEffect(()=>{
		document.documentElement.dataset.theme = theme;
		window.localStorage.setItem('cam-theme',theme);
	},[theme]);

	return <LanguageProvider><ProjectProvider><Navbar theme={theme} onToggleTheme={()=>setTheme((current)=>current === 'dark' ? 'light' : 'dark')}/><main>{children}</main><Footer/></ProjectProvider></LanguageProvider>;
}
