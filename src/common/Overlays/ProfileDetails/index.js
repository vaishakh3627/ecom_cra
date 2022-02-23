import React from "react";
import { Form } from "react-bootstrap";
import { useOverlay } from "../../../OverlayContext";
import CustomModal from "../../components/Modal";

const ProfileDetails = () => {
  const overlays = useOverlay();

  return (
    <CustomModal
      title="Profile Details"
      size="lg"
      show={overlays.overlay.show}
      handleSubmit={() => overlays.hideOverlay()}
      handleClose={() => overlays.hideOverlay()}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </CustomModal>
  );
};

export default ProfileDetails;
