import React, { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModelComponent = ({ data }) => {

  const [show, setShow] = useState(false)
  const [post_type, setPost_type] = useState("");
  const [post_title, setPost_title] = useState("");
  const [post_description, setPost_description] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateDescription = async e => {
    // e.preventDefault();  

    const query = 'mutation{' +
      'updatePosts(post_id:' + data.post_id + ',  post_type:' + post_type + ', post_title:' + post_title + ', post_description:' + post_description + '){' +
      'post_id,' +
      'post_type,' +
      'post_title,' +
      'post_description' +
      '}' +
      '}'

    console.log(query);

    try {
      const response = await fetch("http://localhost:8000/graphql/app?query=" + query, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      const responseData = await response.json();

      console.log(responseData);

    } catch (err) {

      throw new Error(err)
    }

  };

  return (<>
    <Button variant="warning" onClick={handleShow} size="sm">
      Edit
    </Button>

    <Modal show={show} size="lg" onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>

          <Form.Group className="mb-3 col-12" controlId="formDescription">
            <Form.Select aria-label="Default select example" onChange={(e) => setPost_type(e.target.value)}>
              <option>{data.post_type}</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Text className="text-danger">
              * Please input post Description.
            </Form.Text>
            <Form.Text className="text-success">
              * success.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <FloatingLabel
              controlId="floatingInput"
              label="Title"
              className="mb-3"
            >
              <Form.Control
                type="text"
                className="form-control"
                // value={data.post_title}
                placeholder={data.post_title}
                onChange={(e) => setPost_title(e.target.value)}
              />
              <Form.Text className="text-danger">
                * Please input post title.
              </Form.Text>
              <Form.Text className="text-success">
                * success.
              </Form.Text>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">

            <FloatingLabel controlId="" label="Recipe description">
              <Form.Control
                as="textarea"
                rows="6"
                name="description"
                style={{ height: '120px' }}
                // value={data.post_description}
                placeholder={data.post_description}
                onChange={(e) => setPost_description(e.target.value)}
              />
            </FloatingLabel>
            <Form.Text className="text-danger">
              * Please input post Description.
            </Form.Text>
            <Form.Text className="text-success">
              * success.
            </Form.Text>
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => updateDescription()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

  </>);
}

export default ModelComponent;