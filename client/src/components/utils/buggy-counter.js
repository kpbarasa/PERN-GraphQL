import React from "react";
import { Badge, Button, ButtonGroup, Card, Dropdown, DropdownButton, Form, InputGroup } from "react-bootstrap";
import { BsFillGridFill, BsList, BsSearch, BsSortAlphaDownAlt, BsSortAlphaUpAlt, BsSortDown, BsSortDownAlt } from "react-icons/bs";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from 'react-bootstrap/Table';
import ModelComponent from "../modol-window";


// export default BuggyCounter;

class BuggyCounter extends React.Component {

    state = {
        query: "",
        postaData: [""],
        showModal: false,
        filterView: "",
        category: "",
        SortFilter: "",
        searchFilter: "",
        searchResults: "",
        searchResults_count: ""
    };

    handlesDeleteData = async (id) => {

        const query_deleteData = 'mutation{' +
            'deletePost(' +
            'post_id:' + JSON.stringify(this.state.title) +
            '){' +
            "post_id" +
            "}" +
            '}'

        const data = await fetch("http://localhost:8000/graphql/app?query=" + query_deleteData);
        const jsonData = await data.json();
        this.setState({ postaData: jsonData.data.filter_posts });

    };

    handlesGetPostData = async () => {

        const query_getAllData = '{' +
            'filter_posts(post_type:"a,c,g",post_cat:"b"){' +
            'post_id,' +
            'post_title,' +
            'post_type,' +
            'post_description,' +
            'author_id,' +
            '}' +
            '}'

        try {

            const data = await fetch("http://localhost:8000/graphql/app?query=" + query_getAllData);
            const jsonData = await data.json();
            this.setState({ postaData: jsonData.data.filter_posts });

        } catch (error) {

            throw new Error(error);

        }
    };

    // ===========================
    // ___________________________
    // SEARCH & FILTERS START HERE
    // ___________________________
    // ===========================

    filter_Data = async (filter) => {

        if (filter === "cat") {
            this.state.postaData.filter(res => { res.post_type === "a" });
            console.log(this.state.postaData);
        }

    }

    sort_Data = async (filter) => {

        if (filter === "asc") {
            this.setState({ SortFilter: filter })
            this.state.postaData.filter(res => { res.post_type === "a" });
            console.log(this.state.postaData);
        }

        else if (filter === "dsc") {
            this.setState({ SortFilter: filter })
            this.state.postaData.filter(res => { res.post_type === "a" });
            console.log(this.state.postaData);
        }

        else if (filter === "a-z") {
            this.setState({ SortFilter: filter })
            this.state.postaData.filter(res => { res.post_type === "a" });
            console.log(this.state.postaData);
        }

        else if (filter === "z-a") {
            this.setState({ SortFilter: filter })
            this.state.postaData.filter(res => { res.post_type === "a" });
            console.log(this.state.postaData);
        }

    }

    handlesChangeView = async (view) => {

        if (view === "grid") {
            this.setState({ filterView: view })
            this.state.postaData.filter(res => { res.post_type === "a" });
            console.log(this.state.postaData);
        }

        else if (view === "list") {
            this.setState({ filterView: view })
            this.state.postaData.filter(res => { res.post_type === "a" });
            console.log(this.state.postaData);
        }

    }

    handlesSearchData = async (event) => {

        const query = event.target.value;
        console.log(query);

        // const seach_results = this.state.postaData.filter(res => res.post_title === "Harry Potter and the Chamber of Secrets");
        const updatedList = this.state.postaData.filter((item) => {
            return Object.values(item.post_title).join('').toLowerCase().includes(query.toLowerCase())
        });
        console.log(updatedList);
        this.setState({
            searchFilter: query,
            postaData: updatedList,
            searchResults_count: updatedList.length,
        })
    }

    // ===========================
    // ___________________________
    // SEARCH & FILTERS ENDS HERE
    // ___________________________
    // ===========================

    componentDidMount() {
        this.handlesGetPostData();
    }


    render() {

        // var post_data = this.state.postaData;

        if (!this.state.postaData) {
            throw new Error(this.state.error);
        }
        return (
            <div>
                <Card className="p-5" style={{ width: '100%' }}>

                    <Row>
                        <Col className="d-flex justify-content-between ">

                            <h4 className="mb-3">Posts</h4>
                            <Col className="col-4">
                                <InputGroup size="sm" className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search data"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                        onChange={this.handlesSearchData}
                                    />
                                    <Button variant="outline-secondary" id="button-addon1" onClick={() => this.handlesSearchData()}>
                                        <BsSearch />
                                    </Button>

                                </InputGroup>
                            </Col>

                        </Col>
                    </Row>

                    <Row>
                        <hr />
                        <Col className="d-flex justify-content-between mb-4">


                            <Col className="col-auto  d-flex" >
                                {/* <Button variant="light" size="sm"><BsPlusLg /> add post</Button>
                                &nbsp;
                                &nbsp; */}
                                <Button variant="light" size="sm"><Badge bg="secondary">0{this.state.searchResults_count} </Badge> Results for: <b>{this.state.searchFilter}</b></Button>
                            </Col>


                            <Col className="col-auto  d-flex" >
                                <Button variant="light" size="sm"><BsFillGridFill /> | {this.state.filterView}</Button>
                                <DropdownButton variant="light" id="dropdown-basic-button" title="" size="sm">
                                    <Dropdown.Item href="#/action-1" onClick={() => this.handlesChangeView("grid")}><BsFillGridFill /> | <small>Grid</small> </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={() => this.handlesChangeView("list")}><BsList /> | <small>List</small></Dropdown.Item>
                                </DropdownButton>

                                <Button variant="light" size="sm"><BsSortAlphaDownAlt /> | {this.state.SortFilter}</Button>
                                <DropdownButton variant="light" id="dropdown-basic-button" title="" size="sm">
                                    <Dropdown.Item href="#/action-1" onClick={() => this.sort_Data("a-z")}><BsSortAlphaDownAlt /> | <small>A-Z</small> </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={() => this.sort_Data("z-a")}><BsSortAlphaUpAlt /> | <small>Z-A</small></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={() => this.sort_Data("asc")}><BsSortDown /> | <small>ASC</small></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={() => this.sort_Data("dsc")}><BsSortDownAlt /> | <small>DSC</small> </Dropdown.Item>
                                </DropdownButton>
                            </Col>

                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th> <a href="#">#id</a> </th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th> <a href="#">Type</a> </th>
                                        <th>Author Id</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.postaData.map((res, index) => (
                                        <tr key={index}>
                                            <td>{res.post_id}</td>
                                            <td>{res.post_title}</td>
                                            <td>{res.post_description}</td>
                                            <td>{res.post_type}</td>
                                            <td>{res.author_id}</td>
                                            <td>
                                                {/* <EditTodo todo={todo} index={index} /> */}

                                                <ModelComponent data={res} />
                                            </td>
                                            <td>
                                                <Button

                                                    size="sm"
                                                    className="btn btn-danger"
                                                    onClick={() => handlesDeleteData(res.post_id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <thead>
                                    <tr>
                                        <th> <a href="#">#id</a> </th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th> <a href="#">Type</a> </th>
                                        <th>Author Id</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                            </Table>
                        </Col>
                    </Row>

                    <Row>
                        <hr />
                        <Col className="d-flex justify-content-between">
                            <ButtonGroup>
                                <Button variant="secondary" size="sm"> <FaAngleDoubleLeft /> </Button>
                                <Button variant="dark" size="sm">1</Button>
                                <Button variant="secondary" size="sm">2</Button>
                                <Button variant="secondary" size="sm">3</Button>
                                <Button variant="secondary" size="sm">4</Button>
                                <Button variant="secondary" size="sm">5</Button>
                                <Button variant="secondary" size="sm"> <FaAngleDoubleRight /> </Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button variant="secondary" size="sm">  <Badge bg="dark">0</Badge> </Button>
                                <Button variant="secondary" size="sm">of</Button>
                                <Button variant="secondary" size="sm"> <Badge bg="dark">0{this.state.searchResults_count}</Badge> </Button>
                            </ButtonGroup>
                        </Col>
                    </Row>

                </Card>

            </div>
        );
    }

}

export default BuggyCounter;