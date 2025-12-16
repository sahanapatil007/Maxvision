import React from "react";

const Update = Originalcomp =>{
    class NewComp extends React.Component{
        render(){
            return <Originalcomp name ="the user"/>;
        }
    }
    return NewComp;
}
export default Update;
