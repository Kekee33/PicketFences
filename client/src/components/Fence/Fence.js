import React from "react";
import "./Fence.css";

const Fence = props =>
<div
  className="fence"
  style={{ backgroundImage: `url(${props.backgroundImage})` }}
>
  {props.children}
</div>;

export default Fence;
