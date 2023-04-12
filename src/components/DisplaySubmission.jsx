import React, { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AppContext } from "../context/AppContext";
import { SubmissionCard } from "../components";

const DisplaySubmission = () => {
  let { submissionData } = useContext(AppContext);
  const [displaySubmissionData, setDisplaySubmissionData] = useState([]);
  const [sortBy, setSortBy] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFav, setIsFav] = useState(false);

  const filterData = () => {
    const sortedDataOldToNew = displaySubmissionData
      .map((item) => ({
        ...item,
        timestamp: new Date(item.timestamp),
      }))
      .sort((a, b) => a.timestamp - b.timestamp);

    const sortedDataNewToOld = displaySubmissionData
      .map((item) => ({
        ...item,
        timestamp: new Date(item.timestamp),
      }))
      .sort((a, b) => b.timestamp - a.timestamp);

    if (searchTerm) {
      const searchedSubmissions = displaySubmissionData.filter((sub) => {
        return sub.title
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase());
      });
      return searchedSubmissions;
    } else if (sortBy === "oldest") {
      return sortedDataOldToNew;
    } else {
      return sortedDataNewToOld;
    }
  };

  useEffect(() => {
    if (isFav) {
      const favSubmissions = submissionData.filter((sub) => sub.fav);
      setDisplaySubmissionData(favSubmissions);
    } else {
      setDisplaySubmissionData(submissionData);
    }
  }, [isFav]);

  return (
    <div className="md:px-20 md:py-10 bg-[#F5F5F5]">
      <div className="flex items-center py-5 justify-between">
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center">
            <p
              className={`cursor-pointer text-gray-500 ${
                !isFav && "text-black"
              }`}
              onClick={() => setIsFav(false)}
            >
              All Submissions
            </p>

            <div className={`w-40 h-1 ${!isFav && "bg-green-600"} mt-1`}></div>
          </div>

          <div className="flex flex-col items-center">
            <p
              className={`cursor-pointer text-gray-500 px-2 ${
                isFav && "text-black"
              }`}
              onClick={() => setIsFav(true)}
            >
              Favourite Submissions
            </p>

            <div className={`w-44 h-1 ${isFav && "bg-green-600"} mt-1`}></div>
          </div>
        </div>
        <div className="flex items-center md:gap-5">
          <div className="flex items-center gap-2 border border-gray-400 rounded-2xl px-2 py-2">
            <AiOutlineSearch size={25} />
            <input
              text="text"
              placeholder="Search"
              className="outline-none bg-transparent"
              onChange={(ev) => setSearchTerm(ev.target.value)}
            />
          </div>
          <div className="border px-2 py-1 border-gray-400 rounded-2xl">
            <select
              className="outline-none text-gray-400 bg-transparent"
              onChange={(e) => setSortBy(e.target.value.toLocaleLowerCase())}
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 min-h-[300px]">
        {filterData().map((submission) => (
          <SubmissionCard submission={submission} key={submission.id} />
        ))}
      </div>
    </div>
  );
};

export default DisplaySubmission;
