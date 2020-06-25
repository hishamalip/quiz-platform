import React, { Component } from "react";
import 'bootstrap';

const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export default class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            isError: {
                name: '',
                email: '',
                password: ''
            }
        }
    }


    onSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };


    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const { isError } = this.state;

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

                                <form onSubmit={this.onSubmit} noValidate>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                                                name="name"
                                                placeholder="username"
                                                onChange={this.formValChange}
                                            />
                                            {isError.name.length > 0 && (
                                                <span className="invalid-feedback">{isError.name}</span>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                                                name="email"
                                                placeholder="email"
                                                onChange={this.formValChange}
                                            />
                                            {isError.email.length > 0 && (
                                                <span className="invalid-feedback">{isError.email}</span>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                                                name="password"
                                                placeholder="password"
                                                onChange={this.formValChange}
                                            />
                                            {isError.password.length > 0 && (
                                                <span className="invalid-feedback">{isError.password}</span>
                                            )}
                                        </div>

                                        <button type="submit" className="btn btn-block btn-success">Sign Up</button>
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