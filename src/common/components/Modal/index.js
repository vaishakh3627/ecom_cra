import React from "react";
import { Button, Modal } from "react-bootstrap";

const CustomModal = ({
  show,
  handleClose,
  handleSubmit,
  size,
  title,
  children,
}) => {
  return (
    <Modal size={size} centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
