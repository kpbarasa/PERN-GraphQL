import React, { Fragment, useState } from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Row, Col, Card, Button, ButtonGroup, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import { BsArrowCounterclockwise, BsArrowLeftCircle, BsCalendar, BsCardImage, BsFillFileEarmarkWordFill, BsFolderPlus, BsPlusCircleDotted, BsPlusLg, BsSortAlphaDownAlt } from "react-icons/bs";

const ViewPost = () => {

  const { state } = useLocation();
  console.log(state.data);


  return (

    <Card className="p-5" style={{ width: '100%' }}>
      <Col className="col-12 d-flex justify-content-between">
        <Col className="col-auto">
          <small className="text-muted mb-2"> <BsCalendar /> Posted - 02/20/2023</small>
          <h4 className="mb-3">  {state.data.post_title} </h4>
        </Col>
        <Col className="col-auto text-right">
        </Col>
      </Col>
      <Row>
        <hr />
        <Col className="mb-3 col-9">
          <Form.Group className="mb-3 col-12" controlId="formDescription">
            <Col className="d-flex">
              <Card style={{ width: '100%' }}>
                <Card.Body className="">
                  <Card.Title className="">
                  </Card.Title>
                  <Card.Text>
                    {/* <h5>Title here</h5> */}
                    {state.data.post_description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Form.Group controlId="formFile" className="mb-3 d-none">
              <Form.Control type="file" />
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3 col-12 d-none" controlId="formDescription">
            <Col className="d-flex">
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                <Card.Body className="d-none text-center">
                  <Card.Title className="">
                    <BsFolderPlus />
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Form.Group controlId="formFile" className="mb-3 d-none">
              <Form.Control type="file" />
            </Form.Group>
            <Form.Text className=" mt-4">
              <h6>Type</h6>
              <Col className="mb-2">
                <Button variant="light" className="mr-2">
                  <small> <BsCardImage /> Type</small>
                </Button>
                <Button variant="light" className="mr-2">
                  <small> <BsFillFileEarmarkWordFill /> Type</small>
                </Button>
              </Col>
            </Form.Text>
            <Form.Text className=" mt-4">
              <h6>Description</h6>
              <p>
                Donec mollis nisl a dui placerat condimentum. Nam ac orci quis elit rutrum euismod non vitae dolor. Phasellus semper lorem sit amet efficitur sollicitudin. Etiam vulputate pretium arcu, vitae ultrices est congue et. Vivamus quis lorem condimentum, auctor nibh et, vehicula lorem. Nulla in nibh lectus. Maecenas pharetra vehicula nulla sit amet bibendum.
              </p>
            </Form.Text>
            <Form.Text className="text-muted">
              <h6>Categories</h6>
              <h6>
                <Badge bg="secondary" className="m-2">New</Badge>
                <Badge bg="secondary" className="m-2">New</Badge>
                <Badge bg="secondary" className="m-2">New</Badge>
                <Badge bg="secondary" className="m-2">New</Badge>
              </h6>
            </Form.Text>
          </Form.Group>
        </Col>
        <Col className="mb-3 col-lg-3  col-lg-3 col-12">
          <h6>Post info</h6>
          <Row>
            <hr />
            <Col className="col-12">
              <Row>
                <Col className="col-auto p-1">
                  <h5 className="mb-1 d-flex">  <BsFolderPlus /> </h5>
                </Col>
                <Col className="col-10">
                  <h6 className="mb-1 d-flex"> <Col className="pl-4">{state.data.post_title}</Col> </h6>

                </Col>

                <Col className="col-1 p-1"></Col>
                <Col className="col-10">
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                <Form.Text className="col-11">
                  <Col className="ml-2">
                    <Col className=" d-block"> <b>Type</b> </Col>
                    <Col className="text-muted d-block">{state.data.post_type}</Col>
                    {/* <Col className=" d-block"> <b>Size</b> </Col> */}
                    {/* <Col className="text-muted d-block">0.0 kb</Col> */}

                    <Col className=" d-block"><b>Description</b></Col>
                    <Col className="text-muted d-block">{state.data.post_description} </Col>
                    <Col className=" d-block mt-3"><b>Categories</b></Col>
                    <Col>
                      <Badge bg="secondary" className="m-1">{state.data.post_type}</Badge>
                    </Col>
                  </Col>

                </Form.Text>

              </Form.Group>

                </Col>
              </Row>
              <hr />
            </Col>
          </Row>
        </Col>



        <Col className="mb-3 col-3 d-none">
          <h6>My posts</h6>
          <Row>
            <hr />
            <Col className="col-12">
              <h6 className="mb-1">  <BsFolderPlus /> Title</h6>
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                {/* <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted/> </Button>
                  </Form.Group> */}
                <Col className="col-1">
                  {/* <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card> */}
                </Col>
                <Form.Text className="col-11">
                  <Col className="">
                    <small className="text-muted d-block">12/02/2023</small>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">Size</small>
                  </Col>
                  <hr />
                </Form.Text>

              </Form.Group>
              <hr />
            </Col>
            <Col className="col-12">
              <h6 className="mb-3">  <BsFolderPlus /> Title</h6>
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                {/* <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted/> </Button>
                  </Form.Group> */}
                <Col className="col-1">
                  {/* <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card> */}
                </Col>
                <Form.Text className="col-11">
                  <Col className="">
                    <small className="text-muted d-block">12/02/2023</small>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">Size</small>
                  </Col>
                  <hr />
                </Form.Text>

              </Form.Group>
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                {/* <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted/> </Button>
                  </Form.Group> */}
                <Col className="col-1">
                  {/* <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card> */}
                </Col>
                <Form.Text className="col-11">
                  <Col className="">
                    <small className="text-muted d-block">12/02/2023</small>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">Size</small>
                  </Col>
                  <hr />
                </Form.Text>

              </Form.Group>\
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                {/* <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted/> </Button>
                  </Form.Group> */}
                <Col className="col-1">
                  {/* <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card> */}
                </Col>
                <Form.Text className="col-11">
                  <Col className="">
                    <small className="text-muted d-block">12/02/2023</small>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">Size</small>
                  </Col>
                  <hr />
                </Form.Text>

              </Form.Group>
              <hr />
            </Col>
            <Col className="col-12">
              <h6 className="mb-3">  <BsFolderPlus /> Title</h6>
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted /> </Button>
                </Form.Group>
                <Col className="col-5">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card>
                </Col>
                <Form.Text className="m-2">
                  <Col>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">12/02/2023</small>
                  </Col>
                </Form.Text>

              </Form.Group>
              <hr />
            </Col>
            <Col className="col-12">
              <h6 className="mb-3">  <BsFolderPlus /> Title</h6>
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted /> </Button>
                </Form.Group>
                <Col className="col-5">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card>
                </Col>
                <Form.Text className="m-2">
                  <Col>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">12/02/2023</small>
                  </Col>
                </Form.Text>

              </Form.Group>
              <hr />
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted /> </Button>
                </Form.Group>
                <Col className="col-5">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card>
                </Col>
                <Form.Text className="m-2">
                  <Col>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">12/02/2023</small>
                  </Col>
                </Form.Text>

              </Form.Group>
              <hr />
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted /> </Button>
                </Form.Group>
                <Col className="col-5">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card>
                </Col>
                <Form.Text className="m-2">
                  <Col>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">12/02/2023</small>
                  </Col>
                </Form.Text>

              </Form.Group>
              <hr />
            </Col>
            <Col className="col-12">
              <h6 className="mb-3">  <BsFolderPlus /> Title</h6>
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted /> </Button>
                </Form.Group>
                <Col className="col-5">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card>
                </Col>
                <Form.Text className="m-2">
                  <Col>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">12/02/2023</small>
                  </Col>
                </Form.Text>

              </Form.Group>
              <hr />
            </Col>
            <Col className="col-12">
              <h6 className="mb-3">  <BsFolderPlus /> Title</h6>
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted /> </Button>
                </Form.Group>
                <Col className="col-5">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card>
                </Col>
                <Form.Text className="m-2">
                  <Col>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">12/02/2023</small>
                  </Col>
                </Form.Text>

              </Form.Group>
              <hr />
            </Col>
            <Col className="col-12">
              <h6 className="mb-3">  <BsFolderPlus /> Title</h6>
              <Form.Group className="co-12 d-flex" controlId="formDescription">
                <Form.Group>
                  <Button variant="light" size="sm"> <BsPlusCircleDotted /> </Button>
                </Form.Group>
                <Col className="col-5">
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
                  </Card>
                </Col>
                <Form.Text className="m-2">
                  <Col>
                    <h6 className="d-block mb-0"><small className="text dark">Title</small></h6>
                    <small className="text-muted d-block">Type</small>
                    <small className="text-muted d-block">12/02/2023</small>
                  </Col>
                </Form.Text>

              </Form.Group>
              <hr />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <hr />
      </Row>
    </Card>

  );
};

export default ViewPost;
