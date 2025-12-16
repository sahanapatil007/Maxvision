import React,{Component} from "react";

class Regular extends Component{
    render(){
        console.log("regularcomp");
        return(
            <div>
               im regular{this.props.name}
            </div>
        )
    }
}
export default Regular;