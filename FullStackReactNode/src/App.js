// import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import UserComp from './components/UserComp';
import PageNotFound from './layout/PageNotFound';
import MyImageComp from './components/MyImageComp';
// import ChildComp from './components/ChildComp';
// import CssComp from './components/CssComp';
// import ParentComp from './components/ParentComp'; 
// import FunctionComp from './components/FunctionComp';
// import ClassComp from './components/ClassComp';
// import MethodEventComp from './components/MethodEventComp';
// import StateComp from './components/StateComp';
// import ConditionRenComp from './components/ConditionalRenComp';
// import MyDetailsComp from './components/MyDetailsComp';

// import FunctionComp from '../components/unctionComp';  

function App() {
  return (
    <div className="App">
      <h1><strong>Welcome to React Session</strong></h1>

      <PageNotFound />



      {/* <CssComp /> */}

       {/* <FunctionComp name="Pawan" post="FullStackDevloper" />
       <ClassComp name="Himanshu" post="JAVA Devloper" />
       {/* <MyDetailsComp /> */}
       {/* <MethodEventComp />
       <StateComp />  */}
       

       {/* <ConditionRenComp /> */}


       {/* <ParentComp /> */}

       {/* <MyImageComp /> */}

       {/* <ChildComp /> */}


       <ErrorBoundary> 
        <UserComp uname="Pawan" />
       </ErrorBoundary>
       <ErrorBoundary> 
        <UserComp uname="Rahul" />
       </ErrorBoundary>
       <ErrorBoundary> 
        <UserComp uname="Himanshu" />
       </ErrorBoundary>
       <ErrorBoundary> 
        <UserComp uname="Yash" />
       </ErrorBoundary>

    </div>
  );
}

export default App;
