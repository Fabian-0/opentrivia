import * as React from "react";

export default function DangerNotification({ textInfo, handleError }) {
  return (
    <div className="notification is-danger">
      <button className="delete" onClick={handleError}></button>
      <p className="error">{textInfo}</p>
    </div>
  )
}