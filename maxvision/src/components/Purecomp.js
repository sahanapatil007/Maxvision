import React,{PureComponent} from "react";

class Purecomp extends PureComponent{
    render(){
        console.log("puecomp");
        return(
            <div>
               im pure {this.props.name}
            </div>
        )
    }
}
export default Purecomp;