import React, { useState } from "react";
import { Badge, Button, Col, Row, Table } from "react-bootstrap";
import { BsEye } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ModelComponent from "../modol-window";

const DataPagination = ({ data, handlesDeleteData }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(0)
    const [postsPerPage] = useState(13);

    // GET CURRENT POSTS LOCATION (DATA)
    const indexOfLastPost = currentPage * postsPerPage;
    const IndexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = Object.values(data).slice(IndexOfFirstPost, indexOfLastPost);
    const totalPosts = Object.values(data).length;

    // Change page 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (currentPage == (totalPosts / postsPerPage)) {
        setCurrentPage(currentPage = 11)
    }
    const nextPg = () => {
        if (currentPage === pageNumbers.length) throw new Error("End")
        setCurrentPage(currentPage + 1)
    };
    const prevtPg = () => {
        if (currentPage === 1) throw new Error("End")
        setCurrentPage(currentPage - 1)
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers);
    console.log({ currentPosts });

    return (
        <Row>
            <Col className="col-12">
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
                                    <th>Date</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPosts.map((res, index) => (
                                <tr key={index}>
                                    <td>{res.post_id}</td>
                
                                    <td><Link className="btn btn-light"  to={"/view-data"} state={{data:res}}  variant="light"  size="sm"> <BsEye /> | {res.post_title} </Link> </td>
                                    <td>{res.post_description}</td>
                                    <td>{res.post_type}</td>
                                    <td>{res.author_id}</td>
                                    <td>{res.date}</td>
                                    <td>

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
                                    <th>Date</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                        </Table>
                    </Col>
                </Row>
            </Col>
            <Col className="col-12 d-flex justify-content-between">

                <div className="d-flex justify-content-start">
                    <span className="card-title mt-2 text-end">
                        Showing  <Badge bg="dark"><b>{currentPage}</b></Badge> of &nbsp; <Badge bg="dark">{pageNumbers.length}</Badge> Total &nbsp; <Badge bg="dark">{totalPosts}</Badge>
                    </span>
                </div>
                <div className="text-center">
                    <center className="d-flex justify-content-end">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">

                                <li className="page-item-nav">
                                    <Badge bg="dark" className="page-link" onClick={() => prevtPg()}> <FaAngleLeft> </FaAngleLeft></Badge>
                                </li>
                                {pageNumbers.map(number => (
                                    <li key={number} className="page-item">
                                        <Badge bg="dark" className="page-link" onClick={() => paginate(number)} >{number}</Badge>
                                    </li>
                                ))}
                                <li className="page-item-nav">
                                    <Badge bg="dark" className="page-link" onClick={() => nextPg()} > <FaAngleRight></FaAngleRight></Badge>
                                </li>
                            </ul>
                        </nav>
                    </center>
                </div>
            </Col>
        </Row>
    );
}

export default DataPagination;