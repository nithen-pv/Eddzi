import React from "react";
import { NoteProfilePic } from "./TeacherInfo";
import { Xls, Pdf, Ppt, Image } from "./Attachments";

function Note(props) {
  const day = new Date().getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const m = new Date().getMonth();
  const month = monthNames[m];
  const year = new Date().getFullYear();

  const currDate = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  };
  const time = new Intl.DateTimeFormat("en-US", options).format(currDate);
  const date = day + "/" + month + "/" + year + " " + time;
  return (
    <div className="note">
      <NoteProfilePic />

      <div className={"content"}>
        <h1>{props.title}</h1>
        <div className={"date"}>{date}</div>
        <br />
        <p>{props.content}</p>
        <div className={"attachmentBlock"}>
          <Xls />
          <Ppt />
          <Pdf />
        </div>
      </div>

      <Image />
    </div>
  );
}

export default Note;
