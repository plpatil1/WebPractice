import { createBrowserRouter } from 'react-router-dom';
import MyImageComp from '../components/MyImageComp';
import StateComp from '../components/StateComp';
import CssComp from '../components/CssComp';
import PageNotFound from '../layout/PageNotFound';
import UseEffectHookComp from '../hooks/UseEffectHookComp';
import UseStateHookComp from '../hooks/UseStateHookComp';
import ReactHooks from '../hooks/ReactHooks';
import MainDashBoard from '../layout/MainDashBoard';
import LoginComp from '../layout/LoginComp';
import SlidingImgComp from '../tasks/SlidingImgComp';
import ProductDasComp from '../CRUD/ProductDasComp';
import ProductAddComp from '../CRUD/ProductAddComp';
import ProductUpdate from '../CRUD/ProductUpdate';


let router = createBrowserRouter([
    {path:"", element:<LoginComp/>},
    {path:"/login", element:<LoginComp/>},
    {path:"main", element:<MainDashBoard/>, children:[
        //1.naming routing
        {path:"state", element: <StateComp />},
        {path:"slidingImg", element:<SlidingImgComp/>},
        {path:"productdash", element:<ProductDasComp/>}, 
        {path:"productAdd", element:<ProductAddComp/>},
        {path:"productUpdate/:id", element:<ProductUpdate/>},
        //2. default routing
        {path:"", element: <MyImageComp /> },
    {path:"myimages", element: <MyImageComp /> },
    //3. paramterise routing
    {path:"csscomp", element:<CssComp />},
    {path:"csscomp/:id", element:<CssComp />},
     // 4. child routing
     {path:"hooks", element:<ReactHooks/>,  children:[
        {path:"usestate", element:<UseStateHookComp/>},
        {path:"useeffect", element:<UseEffectHookComp/>}
     ]},
    ]},
    
     
    //5. wildcard routing
    {path:"*", element:<PageNotFound />}

])

export default router;