import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import  TeacherService  from '../../../services/TeacherService';


let TeacherList = () => {

    let[state, setState] = useState({
        loading: false,
        teachers: [],
        errorMessage: ''
    });


    useEffect(() => {
        async function fetchTeachers(){
            try {
                setState({ ...state, loading: true });
                let response = await TeacherService.getAllTeachers();
                setState({
                    ...state,
                    loading: false,
                    teachers: response.data
                });
            } catch (error) {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                });
            }
        }
        fetchTeachers();
    }, []);
        
        

    let {loading, teachers, errorMessage} = state;
  

    return (
    <React.Fragment>
        <pre> {JSON.stringify(teachers)} </pre>
      <section className="teacher-search p-5">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Teacher Details
                  <Link to={'/teachers/add'} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2"/>
                    New
                  </Link>
                </p>
              </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <form className="row">
                        <div className="col">
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Search Names"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-2">
                                <input type="submit" className="btn btn-outline-dark" value="Search"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        </div>
    </section>

    <section className="teacher-list">
          <div className="container">
            <div className="row">
                
              <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row align-items-center d-flex justify-content-around">
                            <div className="col-md-4">
                              <img
                                src="https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg"
                                alt=""
                                className="teacher-img"
                              />
                            </div>
                            <div className="col-md-7">
                              <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                  Name:
                                  <span className="fw-bold">
                                    Rajan 
                                  </span>
                                </li>

                                <li className="list-group-item list-group-item-action">
                                  Mobile Number:
                                  <span className="fw-bold">
                                    0703783537
                                  </span>
                                </li>

                                <li className="list-group-item list-group-item-action">
                                  Email:
                                  <span className="fw-bold">
                                    rajan@gmail.com
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-1 d-flex flex-column align-items-center">
                              <Link
                                to={`/teachers/view/teacherId`}
                                className="btn btn-warning my-1"
                              >
                                <i className="fa fa-eye" />
                              </Link>

                              <Link
                                to={`/teachers/edit/teacherId`}
                                className="btn btn-primary my-1"
                              >
                                <i className="fa fa-pen" />
                              </Link>

                              <button className="btn btn-danger my-1">
                                <i className="fa fa-trash" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              
            </div>
          </div>
        </section>
  </React.Fragment>
 );
};
export default TeacherList;