import React from "react";
import { Button, Modal } from "react-bootstrap";

// static backdrop
// with animation
// vertically centered
// custom size

export default class SigninModal extends React.Component {
    render() {
        function Signin(props) {
            const [show, setShow] = React.useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

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
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            I will not close if you click outside me. Don't even try to press
                            escape key.
                            </Modal.Body>

                        <Modal.Footer>
                            <Button variant="dark" onClick={handleClose}>
                                Go Back!
                                </Button>
                            <Button variant="primary">Sign In</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            );
        }
        return (
            <Signin />
        );
    }
}