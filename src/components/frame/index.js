import React,{Component} from 'react'
import Header from "../header";
import Footer from "../footer";
export default class Frame extends Component{
    render(){
        return (
            <div>
                <Header/>
                <div>content</div>
            </div>
        )
    }
}
