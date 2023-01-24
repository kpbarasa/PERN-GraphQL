import React, { Fragment } from "react";
import { Button, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { BsArrowLeftCircle, BsUiRadiosGrid } from "react-icons/bs";
import {
  Routes,
  Route
} from "react-router-dom";

//components

import ErrorBoundary from "./components/utils/error-bounderies";
import InputTodo from "./components/InputTodo";
import ViewPost from "./components/ViewPosts";
import { useNavigate } from 'react-router-dom';
import ListPostData from "./components/ListTodos";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-5">
        <Container>
          <Navbar.Brand href="#home"><BsUiRadiosGrid /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Posts</Nav.Link>
              <Nav.Link href="/input-data">Add Post</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end">
          <Button variant="light"  onClick={() => navigate(-1)}>
          <BsArrowLeftCircle /> 
          </Button>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="">
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<ListPostData />}></Route>
            <Route path='/input-data' element={<InputTodo />}></Route>
            <Route path='/view-data' element={<ViewPost />}></Route>
          </Routes> 
        </ErrorBoundary>
      </Container>

      <Navbar bg="light" expand="lg" className="mt-5">
        <Container>
          <Navbar.Brand href="#home"><BsUiRadiosGrid /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Posts</Nav.Link>
              <Nav.Link href="#link">Add Post</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     // Initializing the state
//     this.state = { color: 'lightgreen' };
//   }
//   componentDidMount() {

//     // Changing the state after 2 sec
//     // from the time when the component
//     // is rendered
//     setTimeout(() => {
//       this.setState({ color: 'wheat' });
//     }, 2000);

//   }
//   render() {
//     return (
//       <div>
//         <Navbar bg="light" expand="lg" className="mb-5">
//           <Container>
//             <Navbar.Brand href="#home"><BsUiRadiosGrid /></Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link href="#home">Posts</Nav.Link>
//                 <Nav.Link href="#link">Add Post</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         <Container className="">
//           <InputTodo />
//           <ListTodos />
//           <ViewPost />
//         </Container>

//         <Navbar bg="light" expand="lg" className="mt-5">
//           <Container>
//             <Navbar.Brand href="#home"><BsUiRadiosGrid /></Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link href="#home">Posts</Nav.Link>
//                 <Nav.Link href="#link">Add Post</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//       </div>
//     );
//   }
// }


export default App;
