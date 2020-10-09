import React,{Component} from 'react'
import Footer from "../footer";
import {} from 'react-router-dom'
import './frame.css'
export default class Frame extends Component{
    render(){
        return (
            <div className='outer-frame'>
                <div className='outer-div'>
                    {this.props.children}
                </div>
                <Footer classname='footer-frame'/>
            </div>
        )
    }
}
