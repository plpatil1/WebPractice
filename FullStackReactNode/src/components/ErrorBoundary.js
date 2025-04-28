import React, { Component } from 'react'

 class ErrorBoundary extends Component {
    constructor(props){
        super(props)

        this.state = {
            isCond:false
        }
    }
   
    static getDerivedStateFromError(){
        return {
            isCond:true
        }
    }

    render() {
       if(this.state.isCond){
        return <h4>Not a User</h4>
       } 
        return this.props.children;
        
       
    }
}

export default ErrorBoundary
