import React from "react";
import $ from "jquery";
function CreateClassRoom(props) {

  return (
    <div>
      {
        <button className="classRooms" id={props.id} onClick={()=>{ 
          $(".classRooms").removeClass("styleClassroom")
          $("#"+props.id).addClass("styleClassroom")}} >
          {props.text}
        </button>
      }

    </div>
  );
}

export default CreateClassRoom;
