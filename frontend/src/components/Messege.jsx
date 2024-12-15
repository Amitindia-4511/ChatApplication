import React, { useEffect } from "react";
import axios from "axios";

function Messege() {
  try {
    const data = axios.get(
      "http://localhost:3000/api/message/674bff183c87115f59ff4ce1",
      {
        withCredentials: true,
      }
    );
    <h1>hi</h1>;
  } catch (error) {
    console.log(error);
  }
}

export default Messege;
