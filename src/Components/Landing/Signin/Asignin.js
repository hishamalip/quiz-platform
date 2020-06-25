import React, { Component } from "react";
import 'bootstrap';

export default class UserForm extends Component {

    render() {
        return (
            <>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal" data-whatever="signup">Sign Up</button>

                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog-centered" role="document">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Sign Up</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <form>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email"

                                        />
                                        {isError.email.length > 0 && (
                                            <span className="invalid-feedback">{isError.email}</span>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-block btn-success">Sign Up</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
}