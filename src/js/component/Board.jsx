import React from "react";

function Board({ days, hours, minutes, seconds }) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="fa-regular fa-clock"></i>
      </div>
      <div className="days">{days}d</div>
      <div className="hours">{hours}h</div>
      <div className="mins">{minutes}m</div>
      <div className="secs">{seconds}s</div>
    </div>
  );
}

export default Board;