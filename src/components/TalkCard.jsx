import React from "react";

const TalkCard = ({ talk }) => {
  return (
    <div className="card bg-secondary hover:bg-secondary-focus m-4">
      <div className="card-body">
        <h2 className="text-xl text-base-content">{talk.title}</h2>
        <p className="text-lg font-bold ml-4 text-secondary-content">
          {talk.event}
        </p>
        <p className="text-md ml-4 text-info-content">
          {talk.date}, {talk.location}
        </p>
        {/* <p className="mb-2 ml-4 text-sm text-warning"></p> */}
      </div>
    </div>
  );
};

export default TalkCard;
