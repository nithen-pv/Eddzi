import React, { useState } from "react";
import Logo from "../Images/logo_.png";
import InputArea from "./InputArea";
import CreateClassRoom from "./CreateClassRoom";
import TeacherInfo from "./TeacherInfo";
import AddCircleIcon from "@material-ui/icons/AddCircle";
function SideNavBar() {
  const [isExpand, setExpand] = useState(false);

  function expand() {
    setExpand(true);
  //   $(document).ready(function(){
  //   $(".textBox").click(() => {
  //     alert("hello");
  //   });
  // });
  
  }

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  window.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      setExpand(false);
    }
  });

  return (
    <div>
      <div className={"navEdzzi"}>
        <img className={"navBarImg"} src={Logo} alt="classRoomImage" />

        <p className={"classRoomTitle"}>Classrooms</p>
        <AddCircleIcon onClick={expand} className="addButton" />

        <hr className={"sideNavBarHR"} />
      </div>
      <div className={"sidenav"}>
        {isExpand ? (
          <div>
            <InputArea addItem={addItem} />
          </div>
        ) : null}
        <div>
          {items.map((classRoom, index) => (
            <CreateClassRoom
              key={index}
              id={index}
              text={classRoom}
              value={classRoom} 
            />
          ))}
        </div>
      </div>

      <TeacherInfo />
    </div>
  );
}
export default SideNavBar;
