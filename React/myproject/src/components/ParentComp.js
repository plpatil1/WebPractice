import React, { Component } from 'react';
import ChildComp from './ChildComp';
import MyPureComp from './MyPureComp';
import MemoComp from './MemoComp';

 class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             institute:"Cdac",
             fees:106000,
             location:"Pashan"
        }
    }
    changeFees(){
        this.setState((prevState)=>({institute:"Infoway",fees:this.state.fees+500}));
    }

    changeOver(){
        this.setState((prevState)=>({institute:"Infoway", fees:this.state.fees+5}))
    }
    
    render() {
        const{institute,fees,location} = this.state; //destructuring of state
        console.log("This is my Parent Component");
        return (
            <div>
                <h2>This is Class Component</h2>
                <p>
                    Institute Name:<strong>{this.state.institute}</strong> <br />
                    Fess : <strong>{this.state.fees}</strong>  <br />
                    Location:<strong>{this.state.location}</strong> <br />
                    <button type="button" onClick={()=>this.changeFees()}>ChangeFees</button>
                    <br />
                    {/* <strong onMouseOver={()=>this.changeOver()}>Hover here to change</strong> */}
                </p>
              <hr />
              <ChildComp institute={institute} fees={fees} location={location} changeOver={()=>this.changeOver()} ></ChildComp>
             <hr />
              <MyPureComp institute={institute} />
              <hr />
              <MemoComp institute={institute} />
   
            </div>
        )
    }
}

export default ParentComp
