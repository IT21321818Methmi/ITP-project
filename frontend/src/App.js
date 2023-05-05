import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import HeaderNew from "./components/Header/HeaderNew";
import TeacherList from "./components/teachers/TeacherList/TeacherList";
import AddTeacher from "./components/teachers/AddTeacher/AddTeacher";
import ViewTeacher from "./components/teachers/ViewTeacher/ViewTeacher";
import EditTeacher from "./components/teachers/EditTeacher/EditTeacher";



let App = () => {
  return (
    
      <React.Fragment>
        
        <HeaderNew/>
          <Routes>
            <Route exact path={"/"} element={<Navigate to={'/teachers/list'}/>}/>
            <Route path={"/teachers/list"} element={<TeacherList/>}/>
            <Route path={"/teachers/add"} element={<AddTeacher/>}/>
            <Route path={"/teachers/view/:teachersId"} element={<ViewTeacher/>}/>
            <Route path={"/teachers/edit/:teachersId"} element={<EditTeacher/>}/>
          </Routes>
        
      </React.Fragment>
      
    
  );
}

export default App;
