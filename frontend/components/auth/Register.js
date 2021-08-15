import React from "react";

export default function Register() {
  return (
    <form action="/register" method="POST" className="text">
      <input type="text" name="" id="" placeholder="First Name" />
      <input type="text" name="" id="" placeholder="Last Name" />
      <input type="email" name="" id="" placeholder="Emmail" />
      <input type="password" name="" id="" />
      <input type="submit" value="Register" />
    </form>
  )
}