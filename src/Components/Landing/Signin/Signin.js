import React from "react";
import 'bootstrap';

export default class Signin extends React.Component {
    render() {
        return (
            <>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#signinModal">Sign In</button>

                <div className="modal fade" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="signinModalLabel" aria-hidden="true">
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
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="username or email"

                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="password"
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-block btn-primary">Sign In</button>
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
