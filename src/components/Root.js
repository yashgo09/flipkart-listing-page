import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Root() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  return (
    <>
      <Header mode={mode} setMode={setMode} />
      <div className={mode}>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
