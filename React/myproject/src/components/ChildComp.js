import React from 'react';

const ChildComp = (props) => {
    const {institute,fees,location,changeOver}= props;
    return (
        <div>
            <h2>This is Child Component</h2>
            <p>
                Institute Name: <strong>{institute}</strong> <br />
                {/* Fees : <strong>{fees}</strong>  <br /> */}
                {/* Location: <strong>{location}</strong> */}
                <br />
                <strong onMouseOver={changeOver}>Hover here to change</strong>
            </p>
        </div>
    )
}

// export default ChildComp
export default React.memo(ChildComp);
