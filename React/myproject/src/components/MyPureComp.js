import React, { PureComponent } from 'react'

 class MyPureComp extends PureComponent {
    render() {
        // const{institute, fees}=props;
        console.log("This is my Pure Component");
        return (
            <div>
                <h1>this is My Pure Component</h1>
                <p>
                    Institute Name: <strong>{this.props.institute}</strong> <br />
                    {/* Fees : <strong>{this.props.fees}</strong> */}
                </p>
                
            </div>
        )
    }
}

export default MyPureComp
