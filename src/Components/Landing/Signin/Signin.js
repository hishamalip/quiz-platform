import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export default class Signin extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { email_text: "asf"}
    // }

    render() {
        return (
            <SigninModal />
        );
    }
}


function SigninModal(props) {
    // let x = new Signin();

    // for modal operetion
    const [show, setShow] = React.useState(false);
    const handleClose = () => { setShow(false); }
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

    // function emailChangeEvent(event) {
    //     var x = new Signin();
    //     let t = event.target.value;
    //     // x.conte( { email_text: t});
    //     x.state.setState({ email_text: t});
    //     console.log(x.state.email_text);
    //     // x/s.setState({
    //     //     email_text: e.target.value
    //     // });
    //     // console.log(this.state.email_text);
    // }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Sign In
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
                    <Modal.Title>Sign In</Modal.Title>

                </Modal.Header>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Body>
                        {/* <input type="text" onChange={emailChangeEvent}/> */}
                        <Form.Group controlId="formGroupEmail">
                            <Form.Control type="text" placeholder="Enter email" required />
                            <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formGroupPassword">
                            <Form.Control type="password" placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>Go Back!</Button>
                        <Button type="submit" variant="primary">Sign In</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}