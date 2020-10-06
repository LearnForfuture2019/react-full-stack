import React,{Component} from 'react'
import logo from '../imgs/logo/logo.jpg'
import './logo.css'
export default class Logo extends Component{
    render(){
        return (
            <div className="logo-container">
                <img src={logo} alt="logo" className='logo-img'/>
            </div>
        )
    }
}
