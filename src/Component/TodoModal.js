import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const TodoModal = ({ show, handleClose, todo, onSave }) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState({}); // State to store errors

  // Synchronize the modal fields with the `todo` prop
  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setDetails(todo.details);
    } else {
      setName("");
      setDetails("");
    }
  }, [todo]); // Re-run this effect whenever `todo` changes

  const handleSave = () => {
    const validationErrors = {};
    if (!name.trim()) validationErrors.name = "Task Name is required.";
    if (!details.trim()) validationErrors.details = "Task Details are required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show validation errors
      return;
    }

    onSave(name, details, setErrors); // Pass the data to the parent
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{todo ? "Edit Task" : "Add New Task"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="taskName" className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={!!errors.name} // Highlight field if there's an error
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="taskDetails" className="mb-3">
            <Form.Label>Task Details</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              isInvalid={!!errors.details} // Highlight field if there's an error
            />
            <Form.Control.Feedback type="invalid">{errors.details}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;
