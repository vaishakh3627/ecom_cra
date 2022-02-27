import React, { useState } from "react";
import { useMutation } from "react-query";
import { Button, Collapse, Form, Modal } from "react-bootstrap";

import { createCategory } from "../../api";

const AddNewCategory = ({ show, onClose, onSubmit }) => {
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
  });
  const updateData = (data) =>
    setData((previousState) => ({
      ...previousState,
      ...data,
    }));

  // const [subCategoryData, setSubCategoryData] = useState([]);
  // const addSubCategory = (data) =>
  //   setSubCategoryData((previousState) => [...previousState, data]);

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
          {/* <hr />
          <h4>Subcategories</h4>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Category" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" />
          </Form.Group>
          <Collapse>
            <h4>New</h4>
          </Collapse>
          <Button onClick={() => console.log("addSubCategoru")}>
            Add Sub-category
          </Button> */}
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
