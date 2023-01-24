import React from "react";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { Form, Row, Col, Card, Button, ButtonGroup, FormLabel, FormGroup } from 'react-bootstrap';
import { BsArrowCounterclockwise, BsCardImage, BsCheck, BsFolderPlus, BsPlusCircleDotted, BsPlusLg, BsSortAlphaDownAlt } from "react-icons/bs";


class InputTodo extends React.Component {
    state = {
        postaData: "",
        title: "",
        posTtype: "",
        description: "",
        error: "",
        success: false
    };

    onSubmitForm = async e => {
        e.preventDefault();
        const query = 'mutation{' +
            'addPost(' +
            'post_title:' + JSON.stringify(this.state.title) + ', ' +
            'post_type:' + JSON.stringify(this.state.posTtype) + ',' +
            'post_description:' + JSON.stringify(this.state.description) + '' +
            '){' +
            "post_title," +
            "post_type," +
            "post_description" +
            "}" +
            '}'


        await fetch("http://localhost:8000/graphql/app?query=" + query, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
            .then(async (res) => await res.json())
            .then(res => {
                this.setState({
                    postaData: res.data.addPost,
                    success: true
                })
            })
            .catch(err => {
                this.setState({
                    error: err
                })

            })
            console.log(this.state.postaData);
    };

    render() {
        if (this.state.error !== "") {
            // Simulate an error!
            throw new Error(this.state.error);
        }
        return (
            <div>
                <Card className="p-5" style={{ width: '100%' }}>
                    <h4 className="mb-3">New {this.state.posTtype}</h4>
                    <Row>
                        <hr />
                        <Col className="d-flex justify-content-between mb-1">
                            <ButtonGroup className="col-6" aria-label="Basic example" disabled>
                                <Button variant="light" size="sm">Posts</Button>
                                <Button variant="light" size="sm">Documents</Button>
                                <Button variant="light" size="sm">Images</Button>
                                {/* <Button variant="light" size="sm">Gallery</Button> */}
                                <Button variant="light" size="sm">Video</Button>
                            </ButtonGroup>

                            <ButtonGroup className="col-3" aria-label="Basic example" disabled>
                                <Button variant="light" size="sm">four</Button>
                                <Button variant="light" size="sm">five</Button>
                            </ButtonGroup>

                        </Col>
                        <hr />
                    </Row>

                    <Row>
                        <Col lg={"12"}>

                            <Form>

                                <Row>
                                    <Col className="d-flex">
                                        <Form.Group className="mb-3 col-4" controlId="formType">

                                            <Form.Select aria-label="Default select example" onChange={e => this.setState({ posTtype: e.target.value })}>
                                                <option>Select Post type</option>
                                                <option value="one">One</option>
                                                <option value="two">Two</option>
                                                <option value="three">Three</option>
                                            </Form.Select>

                                            <Form.Text className="text-danger">
                                                * Please select post type.
                                            </Form.Text>
                                            <Form.Text className="text-success">
                                                <BsCheck /> success.
                                            </Form.Text>

                                        </Form.Group>
                                        &nbsp;
                                        &nbsp;
                                        <Form.Group className="mb-3 col-4" controlId="formType">
                                            <Button variant="light" className="" size="sm"> <BsPlusCircleDotted /> <small>Cat</small></Button>
                                        </Form.Group>

                                    </Col>

                                </Row>

                                <Row>
                                    <FormLabel className="small">

                                        <Form.Text>Sub Category Parent: </Form.Text>
                                        <Form.Text><b>{this.state.posTtype}</b></Form.Text>
                                    </FormLabel>
                                    <Form.Group className="mb-3 col-3" controlId="formDescription">
                                        <Form.Select aria-label="Default select example" >
                                            <option>Select Post type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                        <Form.Text className="text-danger">
                                            * Please input post Description.
                                        </Form.Text>
                                        <Form.Text className="text-success">
                                            <BsCheck /> success.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-3" controlId="formDescription">
                                        <Form.Select aria-label="Default select example" >
                                            <option>Select Post type</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                        <Form.Text className="text-danger">
                                            * Please input post Description.
                                        </Form.Text>
                                        <Form.Text className="text-success">
                                            <BsCheck /> success.
                                        </Form.Text>
                                    </Form.Group>
                                </Row>


                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Title"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            type="text"
                                            className="form-control"
                                            value={this.state.title}
                                            onChange={e => this.setState({ title: e.target.value })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-danger">
                                        * Please input post title.
                                    </Form.Text>
                                    <Form.Text className="text-success">
                                        <BsCheck /> success.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formDescription">

                                    <FloatingLabel controlId="" label="Recipe description">
                                        <Form.Control
                                            as="textarea"
                                            rows="6"
                                            name="description"
                                            style={{ height: '120px' }}
                                            placeholder="Post description"
                                            onChange={e => this.setState({ description: e.target.value })}
                                        />
                                    </FloatingLabel>
                                    <Form.Text className="text-danger">
                                        * Please input post Description.
                                    </Form.Text>
                                    <Form.Text className="text-success">
                                        <BsCheck /> success.
                                    </Form.Text>
                                </Form.Group>
                                
                                <Form.Group className="mb-3 col-3" controlId="formDescription">
                                    <Col className="d-flex">
                                        <Card style={{ width: '100%' }}>
                                            <Card.Img variant="top" src="" />
                                            <Card.Body className="text-center">
                                                <Card.Title>
                                                    <BsFolderPlus />
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                        &nbsp;
                                        &nbsp;
                                        <Form.Group className="mb-3" controlId="formDescription">
                                            <Button variant="light" className="" size="sm"> <BsPlusCircleDotted /> <small></small></Button>
                                        </Form.Group>
                                    </Col>
                                    <Form.Group controlId="formFile" className="mb-3 d-none">
                                        <Form.Control type="file" />
                                    </Form.Group>

                                    <Form.Text className="text-danger">
                                        * Please input post Description.
                                    </Form.Text>
                                    <Form.Text className="text-success">
                                        <BsCheck /> success.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3 col-3" controlId="formDescription">
                                    <Col className="d-flex">
                                        <Card style={{ width: '100%' }}>
                                            <Card.Img variant="top" src="" />
                                            <Card.Body className="text-center">
                                                <Card.Title>
                                                    <BsCardImage />
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                        &nbsp;
                                        &nbsp;
                                        <Form.Group className="mb-3" controlId="formDescription">
                                            <Button variant="light" className="" size="sm"> <BsPlusCircleDotted /> <small></small></Button>
                                        </Form.Group>
                                    </Col>
                                    <Form.Group controlId="formFile" className="mb-3 d-none">
                                        <Form.Control type="file" />
                                    </Form.Group>

                                    <Form.Text className="text-danger">
                                        * Please input post Description.
                                    </Form.Text>
                                    <Form.Text className="text-success">
                                        <BsCheck /> success.
                                    </Form.Text>
                                </Form.Group>

                                <Button className="m-2" size="lg" variant="light" type="submit" onClick={this.onSubmitForm}>
                                    Submit
                                </Button>
                                <Button className="m-2" size="lg" variant="secondary" type="submit">
                                    cancle
                                </Button>

                            </Form>

                        </Col>
                    </Row>

                </Card>
            </div>
        );
    }

}

export default InputTodo;
