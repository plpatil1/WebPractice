import React from 'react'

 const UserComp = ({uname}) => {
    if(uname==="Rahul"){
        throw Error("Not A User");
    }
    return <p>{uname} Login Succussfully</p>
}

export default UserComp;