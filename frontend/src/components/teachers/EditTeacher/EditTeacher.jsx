import React from 'react';
import {Link} from 'react-router-dom';

let EditTeacher = () => {
    return(
        <React.Fragment>
            <section className="add-teacher p-5">
                <div className="container">
                    <div className="row">
                        <div className="co">
                            <p className="h3 text-primary fw-bold">Edit Teacher</p>
                            <p className="fst-italic h6"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptatem earum libero dolorum nostrum voluptatibus quisquam optio, itaque, ad odit fugiat! Fuga dignissimos quas totam et quisquam quibusdam sapiente aperiam.</p> 
   
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form>
                                
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Name"/> 
                                </div>

                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Photo Url"/> 
                                </div>

                                <div className="mb-2">
                                    <input type="number" className="form-control" placeholder="Mobile Number"/> 
                                </div>

                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Email"/> 
                                </div>

                                <div className="mb-2">
                                    <select className="form-control">
                                        <option value=""> Select the Subject</option>
                                    </select>
                                </div>  

                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary" value="Update"/> 
                                    <Link to={'/teachers/list'} className="btn btn-dark ms-2"> Cancel </Link>
                                </div>                               
                                
                                
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="https://icon-library.com/images/user-png-icon/user-png-icon-16.jpg" alt="" className="teacher-img"/>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default EditTeacher;
