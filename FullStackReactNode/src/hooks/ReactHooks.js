import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ReactHooks = () => {
    return (
        <div className='card border-primary'>
            <div className='card-header border-primary'>
                <Link to="usestate"  className="btn btn-outline-warning btn-sm m-3">useState</Link>{" "}
                <Link to="useeffect"  className="btn btn-outline-warning btn-sm m-3">useEffect</Link>{" "}
            </div>

            <div className='card-body border-primary'>
                <Outlet />
            </div>
        </div>
    )
}

export default ReactHooks
