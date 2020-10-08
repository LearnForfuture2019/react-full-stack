import React,{Component} from 'react'
import Header from "../header";
import Footer from "../footer";
import {} from 'react-router-dom'
export default class Frame extends Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}
