import React, { Component } from "react";
import 'bootstrap';

export default class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    render() {

        return (
            <>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#signupModal">Sign Up</button>

                <div className="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
                    <div className="modal-dialog-centered" role="document">
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <form onSubmit={this.onSubmit} noValidate>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="username"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="email"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="password"
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-block btn-succes">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}








