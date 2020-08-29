import React from "react";
import uploadImage from "../Images/note uploades image.png";
import xlsIcon from "../Images/xls icon.png";
import pdfIcon from "../Images/pdf icon.png";
import pptIcon from "../Images/ppt icon.png";
function Xls() {
  return (
    <p className={"attachments"}>
      <img src={xlsIcon} alt="" /> Demo1
    </p>
  );
}
function Pdf() {
  return (
    <p className={"attachments"}>
      <img src={pdfIcon} alt="" />
      Demo3
    </p>
  );
}
function Ppt() {
  return (
    <p className={"attachments"}>
      <img src={pptIcon} alt="" /> Demo2
    </p>
  );
}
function Image() {
  return (
    <div className={"uploadImage"}>
      <img src={uploadImage} alt="uploadImage" />
    </div>
  );
}
export { Xls, Pdf, Ppt, Image };
