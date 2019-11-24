import React from "react";

const List = () => {
  return (
    <div className="dummyForm">
      <form
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <input placeholder="New List"></input>
        <button type="submit">Publish List</button>
      </form>
    </div>
  );
};

export default List;
