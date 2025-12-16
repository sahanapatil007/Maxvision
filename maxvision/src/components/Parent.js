import React,{Component} from "react";
import Purecomp from "./Purecomp";
import Regular from "./Regular";

class Parent extends Component{
    constructor (props){
        super(props)
        this.state ={
            name:'sahana'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'shrinivas'
            })
        },3000);
    }
    render(){
        console.log("parentcomp");
        return(
            <div>
               im parent
               <Regular name={this.state.name} />
               <Purecomp  name={this.state.name} />
            </div>
        )
    }
}
export default Parent;