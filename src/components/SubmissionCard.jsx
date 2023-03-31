import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const SubmissionCard = ({ submission }) => {
  const { title, summary, imgUrl, id, timestamp } = submission;

  return (
    <Link
      to={`/submission-detail/${id}`}
      className="bg-white p-4 relative pb-7 rounded-xl shadow-sm shadow-slate-300 block max-h-[300px]"
    >
      <div className="flex items-center gap-4">
        <img
          src={
            imgUrl.length < 20 ? require(`../assests/${imgUrl}.png`) : imgUrl
          }
          alt="interviewMe"
          className="w-[100px] h-[100px] object-cover rounded-xl"
        />
        <h2 className="text-xl">{title}</h2>
      </div>
      <p className="mt-5 mb-5">{summary}</p>
      <span className="absolute bottom-0 right-2 text-gray-400 py-3 pr-2">
        uploaded {moment(timestamp).fromNow()}
      </span>
    </Link>
  );
};

export default SubmissionCard;
