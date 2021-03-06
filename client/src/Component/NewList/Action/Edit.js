import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Modal from "react-bootstrap/Modal";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import TextField from "@material-ui/core/TextField";

const Edit = (props) => {
  const [open, setOpen] = React.useState(false);
  //   const [projects, setProjects] = useState();

  const [formState, setFormState] = useState({
    name: "",
    status: "",
    date: "",
    comment: "",
    projectId: "",
  });

  const handleSubmit = (e) => {
    console.log("submit button click");
    e.preventDefault();
    fetch(`/api/todos/${formState.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    }).then((response) => {
      console.log("Edit response:", response);
      props.setShowEdit("")
      props.reload();
    });
    
  };

  const handleChange = (e) => {
    console.log("what happens here?? ");
    console.log("event: ", e.target);
    const newState = { ...formState };
    console.log("new state", newState);
    newState[e.target.name] = e.target.value;
    console.log("new state", newState);
    setFormState(newState);
    console.log("form state", formState);
  };
  useEffect(() => {
    console.log("props id: ", props.showEdit);
    console.log("use effect");
    console.log("form data", formState);
    fetch(`/api/todos/${props.showEdit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Edit response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("data :", data);
        setFormState(data);
      });

    console.log("props.showEdit", props.showEdit);

    console.log("edit use effect");
  }, [props.showEdit]);

  const handleClose = () => props.setShowEdit("");
  // const handleShow = () => setShow(true);

  return (
    <div className="modal">
      <Container maxWidth="sm">
      
        <Dialog
          open={props.showEdit ? true : false}
          handleClick={handleChange}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            please edit your task B
          </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              name="name"
              value={formState.name}
              onChange={handleChange}
            />

            <TextField
              id="datetime-local"
              name="date"
              value={formState.date}
              onChange={handleChange}
              label="Date"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <div>
              <select
                id="select"
                name="status"
                value={formState.status}
                onChange={handleChange}
              >
                <option>Assigned</option>
                <option>Working</option>
                <option>Completed</option>
                <option>None</option>
              </select>
            </div>

            <TextField
              autoFocus
              margin="dense"
              id="comment"
              label="comment"
              type="text"
              fullWidth
              name="comment"
              value={formState.comment}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="secondary" color="primary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" color="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};
export default Edit;
