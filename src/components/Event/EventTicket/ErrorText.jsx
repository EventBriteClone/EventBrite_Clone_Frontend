import React, { useEffect, useState } from "react";

function ErrorBanner(props) {
  return (
    <div style={{ backgroundColor: "red", color: "white", padding: "10px" }}>
      {props.message}
    </div>
  );
}

function ErrorText() {
  return (
    <div>
      <ErrorBanner message="Please fill out all of the required fields correctly" />
    </div>
  );
}
export default ErrorText;
