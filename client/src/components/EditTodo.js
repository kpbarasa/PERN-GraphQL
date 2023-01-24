import React, { Fragment, useState } from "react";
import { Button } from 'react-bootstrap';

const EditTodo = ({ todo, index }) => {
  const [post_id, setPost_idn] = useState(todo.post_id);
  const [post_type, setPost_type] = useState(todo.post_type);
  const [post_title, setPost_title] = useState(todo.post_title);
  const [post_description, setPost_description] = useState(todo.post_description);

  const updateDescription = async e => {
    e.preventDefault();
    try {

      const query = 'mutation{' +
        'updatePosts(post_id:' + post_id + ',  post_type:' + post_type + ', post_title:' + post_title + ', post_description:' + post_description + '){' +
        'post_id,' +
        'post_type,' +
        'post_title,' +
        'post_description' +
        '}' +
        '}'
      console.log(query);
      const response = await fetch("http://localhost:8000/graphql/app?query=" + query, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      const responseData = await response.json();

      console.log(responseData);
      // Submit Form Response HERE?
      // Toast Response HERE?
      // _____________________________________________________________________________________
      // =====================================================================================


      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }

    // try {
    //   const body = { description };
    //   const response = await fetch(
    //     `http://localhost:5000/todos/${todo.todo_id}`,
    //     {
    //       method: "PUT",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(body)
    //     }
    //   );

    //   window.location = "/";
    // } catch (err) {
    //   console.error(err.message);
    // }

  };

  return (
    <Fragment>
      <Button
        size="sm"
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${index}`}
      >
        Edit
      </Button>

      {/* 
        id = id10
      */}
      <div
        className="modal"
      // id={`id${todo.todo_id}`}
      // onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <Button
                size="sm"
                type="button"
                className="close"
                data-dismiss="modal"
              // onClick={() => setDescription(todo.description)}
              >
                &times;
              </Button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={post_description}
              // onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <Button
                size="sm"
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
              // onClick={e => updateDescription(e)}
              >
                Edit
              </Button>
              <Button
                size="sm"
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              // onClick={() => setDescription(todo.description)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
