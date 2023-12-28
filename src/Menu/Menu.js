import React,{useState} from 'react'
import "./Menu.css"
import { menuItems } from './configuration'
import { HashRouter, Link, Route, Routes,Navigate } from 'react-router-dom'
import Home from '../Home'
import Mother from '../Mother'
import Brother from '../Brother'
import Father from '../Father'
import Sister from '../Sister'


const Menu = () => {
    const handleMenuItemClr= (eve)=>{
        var menuitems=document.querySelectorAll('ul li a');
        menuitems.forEach((item)=>{
            item.classList.remove('menuItemClr');
        })
        eve.target.className="menuItemClr";
    };
    const[top,setTop]=useState('-150px')
    const handleMenuButton= (eve)=>{
      console.log(eve.view.screenX);
      if (eve.view.screenX>500){
        console.log("yes")
        setTop(top==='70px'?'-150px':'70px');
      }
      else{
      setTop(top==='-150px'?'70px':'-150px');
      }
    };
  return (
    <div> 
        <HashRouter>
        <div>
        <ul className='menu-animation' style={{top}}>
          {
            menuItems.map(({name,link},ind)=>{
                return <li key={`li_${ind}`} onClick={handleMenuItemClr}  ><Link to={link} >{name}</Link></li>
            })
          }
        </ul> 
        <button className='menu-btn' onClick={handleMenuButton}><span className='bi bi-list  menu-icon'></span></button>
        </div>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/mother" element={<Mother/>}/>
            <Route path="/father" element={<Father/>}/>
            <Route path="/brother" element={<Brother/>}/>
            <Route path="/sister" element={<Sister/>}/>
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        </HashRouter>
        
        </div>
  )
}
export default Menu
