import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default class Signup extends React.Component {
    render() {
        return (
            <SignupModal />
        );
    }
}


function SignupModal(props) {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // for form validation
    const [validated, setValidated] = React.useState(false);
    function handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Sign Up
            </Button>

            <Modal
                // for static backdrop
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

                // for vertically centered
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>


                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Control.Feedback type="invalid">Enter a valid Email-Id</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">Password Constraints</Form.Control.Feedback>
                            <Form.Text id="passwordHelpBlock" muted>
                                Password Constraints
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formGroupRePassword">
                            <Form.Control type="password" placeholder="Re-type Password" required />
                            <Form.Control.Feedback type="invalid">Password doesn't match</Form.Control.Feedback>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Go Back!
                        </Button>
                        <Button type="submit" variant="success">Sign Up</Button>
                    </Modal.Footer>
                </Form>

            </Modal>
        </>
    );
}