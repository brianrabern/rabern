import React from "react";

const MemoryCard = ({ memory }) => {
  return (
    <div className="card bg-base-300 hover:bg-black m-4">
      <div className="card-body">
        <p className="text-sm md:text-lg ml-4 text-base-content">
          "{memory.content}"
        </p>

        <div className="card-actions justify-end">
          <code>{memory.author}</code>
        </div>
      </div>{" "}
    </div>
  );
};

export default MemoryCard;
