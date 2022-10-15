import React from "react";


const MyStyle = {

    backgroundColor: 'white',
    border: '3px solid red'
        
}

export class Container extends React.Component {




    render() {

        return(
            <>
            <div style={MyStyle}>{this.props.title}</div>
            </>
        )
    }
}