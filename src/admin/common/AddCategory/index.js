import React, { useState } from "react";
import { useMutation } from "react-query";
import { Button, Form, Modal } from "react-bootstrap";

import { createCategory } from "../../api";

const AddNewCategory = ({ show, onClose }) => {
  const createCategoryMutation = useMutation(createCategory, {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const [data, setData] = useState({
    category_name: null,
    category_description: null,
    sub_category_data: [],
  });
  const updateData = (data) =>
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));

  const onSubmit = () => createCategoryMutation.mutate(data);

  return (
    <Modal size="lg" show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Category name</Form.Label>
            <Form.Control
              onChange={(e) => updateData({ category_name: e.target.value })}
              type="text"
              placeholder="Category"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(e) =>
                updateData({ category_description: e.target.value })
              }
              as="textarea"
              placeholder="Description"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => onSubmit(data)}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewCategory;
