import React, { useState } from "react";
import uploadImage from "../Images/upload images_icon.png";
import uploadActivity from "../Images/upload uctivity icon.png";
import uploadNotes from "../Images/upload notes icon.png";
import uploadFiles from "../Images/upload files.png";
import editIcon from "../Images/edit icon.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(() => ({
  input: {
    display: "none"
  }
}));

function Description(props) {
  const classes = useStyles();

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className={"Description"}>
      <form className={"Form"}>
        <input
          type="text"
          name="title"
          placeholder="Title goes here"
          onChange={handleChange}
          value={note.title}
        />

        <img src={editIcon} className={"editIcon"} alt="" />

        <br />
        <input
          type="text"
          name="content"
          placeholder="Description"
          onChange={handleChange}
          value={note.content}
        />

        <img src={editIcon} className={"editIcon"} alt="" />

        <div className={"uploadElements"}>
          <p>
            <input
              accept="image/*"
              className={classes.input}
              id="upload-image"
              multiple
              type="file"
            />
            <label htmlFor="upload-image">
              <Button component="span">
                <img src={uploadImage} alt="" /> Upload Images
              </Button>
            </label>
          </p>

          <p>
            <input
              accept="file/*"
              className={classes.input}
              id="upload-activity"
              multiple
              type="file"
            />
            <label htmlFor="upload-activity">
              <Button component="span">
                <img src={uploadActivity} alt="" />
                Upload Activity
              </Button>
            </label>
          </p>

          <p>
            <input
              accept="files/*"
              className={classes.input}
              id="upload-notes"
              multiple
              type="file"
            />
            <label htmlFor="upload-notes">
              <Button component="span">
                <img src={uploadNotes} alt="" />
                Upload Notes
              </Button>
            </label>
          </p>

          <p>
            <input
              accept="files/*"
              className={classes.input}
              id="upload-file"
              multiple
              type="file"
            />
            <label htmlFor="upload-file">
              <Button component="span">
                <img src={uploadFiles} alt="" />
                Upload Files
              </Button>
            </label>
          </p>

          <p>
            <button className={"postButton"} onClick={submitNote}>
              Post
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Description;
