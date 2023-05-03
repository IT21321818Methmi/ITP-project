import React from 'react';
import {Link} from 'react-router-dom';

let ViewTeacher = () => {
    return(
        <React.Fragment>
            <section className="view-teacher-intro">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <p className="h3 text-warning">View Teacher</p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptatem nobis quam? Aspernatur modi doloribus laudantium esse laborum officia rem voluptatum, consequuntur exercitationem tempora amet dolorem aut est iure adipisci!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="view-teacher mt-2 fw-bold">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg" alt="" className="teacher-img"/>
                        </div>
                        <div className="col-md-8">
                        <ul className="list-group">
                            
                            <li className="list-group-item list-group-item-action">
                            Title: <span className="fw-bold">Rajan</span>
                            </li>
                            
                            <li className="list-group-item list-group-item-action">
                            Name: <span className="fw-bold">Rajan</span>
                            </li>

                            <li className="list-group-item list-group-item-action">
                            Mobile Number: <span className="fw-bold">0703783536</span>
                            </li>

                            <li className="list-group-item list-group-item-action">
                            Email: <span className="fw-bold">rajan@gmail.com</span>
                            </li>

                            <li className="list-group-item list-group-item-action">
                            Subject: <span className="fw-bold">rajan@gmail.com</span>
                            </li>

                        </ul>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to={'/teachers/list'} className="btn btn-warning"> Back </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </React.Fragment>
    )
};

export default ViewTeacher;
