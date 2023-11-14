import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { AiOutlineLink } from "react-icons/ai";

const PublicationCard = ({ publication }) => {
  const [bibtexVisible, setBibtexVisible] = useState(false);
  const toggleBibtex = () => {
    setBibtexVisible(!bibtexVisible);
  };

  return (
    <div className="card bg-base-300 hover:bg-black m-4">
      <div className="card-body">
        <h2 className="text-xl text-base-content">{publication.title}</h2>

        {publication.journal && (
          <>
            <p className="text-lg font-bold ml-4 text-info">
              {publication.journal}
            </p>
            <p className="text-md ml-4 text-base-content">
              {publication?.year && `(${publication.year})`}
              {publication?.volume && `, ${publication.volume}`}
              {publication?.number && `(${publication.number})`}
              {publication?.pages && `, ${publication.pages}`}
            </p>
          </>
        )}
        {publication.booktitle && (
          <>
            {" "}
            <p className="text-lg font-bold ml-4 text-info">
              {publication.booktitle}
            </p>
            <p className="text-md ml-4 text-base-content">
              {publication?.year}, {publication?.pages}
            </p>
          </>
        )}

        <p className="text-lg ml-4 text-base-content">{publication.author}</p>
        {publication.doi && (
          <p className="mb-2 ml-4 text-sm text-warning">
            DOI: {publication.doi}
          </p>
        )}

        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-success  hover:btn-accent"
            onClick={toggleBibtex}
          >
            <Icon icon="file-icons:bibtex" className="text-2xl" />
          </button>{" "}
          <a href={publication.url}>
            <button className="btn btn-sm btn-info hover:btn-warning">
              <AiOutlineLink className="text-2xl" />
            </button>
          </a>
        </div>

        <div>
          {bibtexVisible && (
            <textarea
              id={publication?.ID}
              defaultValue={publication?.bibtex}
              className="mt-1 text-xs w-full h-64 p-2 rounded border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
            ></textarea>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
