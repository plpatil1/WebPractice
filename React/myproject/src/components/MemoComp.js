import React from 'react'

const MemoComp = (props) => {
    const{institute}=props;
    console.log("This is my Child Component");

    return (
        <div>
            <h2>This is MemoComp</h2>
            <p>
                Institute Name: <strong>{institute}</strong>
            </p>
        </div>
    )
}

// export default MemoComp;
export default React.memo(MemoComp
    
);
