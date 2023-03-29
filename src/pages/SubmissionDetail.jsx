import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  AiOutlineStar,
  AiOutlineCalendar,
  AiFillDelete,
  AiFillGithub,
  AiFillStar,
} from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getSubmissionById } from "../utils/data";
import { DeleteModal } from "../components";

const fetchSubmissionData = (id) => {
  const allSubmissionData = JSON.parse(localStorage.getItem("submissionData"));
  const submissionDetail = allSubmissionData.find((sub) => {
    return sub.id === id;
  });
  return submissionDetail;
};

const SubmissionDetail = () => {
  const { setSubmissionData } = useContext(AppContext);
  const { id: subId } = useParams();
  const [submissionDetail, setSubmissionDetail] = useState(
    fetchSubmissionData(subId)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const {
    imgUrl,
    title,
    summary,
    desc,
    hackathonName,
    startDate,
    endDate,
    githubLink,
    otherLink,
    id,
  } = submissionDetail;

  const addToFav = (id) => {
    const submission = getSubmissionById(id);
    const allSubmissions = JSON.parse(localStorage.getItem("submissionData"));
    const restSubmissions = allSubmissions.filter((sub) => sub.id !== id);
    localStorage.setItem(
      "submissionData",
      JSON.stringify([
        ...restSubmissions,
        {
          ...submission,
          fav: true,
        },
      ])
    );
    setSubmissionData([
      ...restSubmissions,
      {
        ...submission,
        fav: true,
      },
    ]);
    setSubmissionDetail({ ...submission, fav: true });
  };

  const removeFromFav = (id) => {
    const submission = getSubmissionById(id);
    const allSubmissions = JSON.parse(localStorage.getItem("submissionData"));
    const restSubmissions = allSubmissions.filter((sub) => sub.id !== id);
    localStorage.setItem(
      "submissionData",
      JSON.stringify([
        ...restSubmissions,
        {
          ...submission,
          fav: false,
        },
      ])
    );
    setSubmissionData([
      ...restSubmissions,
      {
        ...submission,
        fav: false,
      },
    ]);
    setSubmissionDetail({ ...submission, fav: false });
  };

  const deleteSubmission = (id) => {
    const submission = getSubmissionById(id);
    const allSubmissions = JSON.parse(localStorage.getItem("submissionData"));
    const restSubmissions = allSubmissions.filter((sub) => sub.id !== id);
    localStorage.setItem(
      "submissionData",
      JSON.stringify([...restSubmissions])
    );
    setSubmissionData([...restSubmissions]);
    navigate("/");
  };

  return (
    <div className="">
      <div className="bg-[#003145] px-20 py-20 flex items-center gap-3">
        <div className="grow">
          <div className="flex items-center gap-4 md:gap-8">
            <img
              src={
                imgUrl.length < 20
                  ? require(`../assests/${imgUrl}.png`)
                  : imgUrl
              }
              className="h-[120px] w-[120px] object-cover rounded-md"
            />
            <h2 className="text-3xl text-white font-bold">{title}</h2>
          </div>
          <p className="py-4 text-white">{summary}</p>
          <div className="flex items-center text-white gap-5">
            <button className="">
              {submissionDetail.fav ? (
                <AiFillStar size={20} onClick={() => removeFromFav(id)} />
              ) : (
                <AiOutlineStar size={20} onClick={() => addToFav(id)} />
              )}
            </button>
            <div className="w-[1px] h-[28px] bg-white"></div>
            <div className="flex items-center gap-2 bg-[#255973] py-1 px-2 rounded-md">
              <AiOutlineCalendar size={20} />
              <p>12 March</p>
            </div>
          </div>
        </div>

        <div className="shrink-0 self-start">
          <div className="py-2 px-2 md:px-6 border text-white rounded-xl mb-4">
            <Link
              to={`/edit-submission/${id}`}
              className="flex items-center gap-2"
            >
              <FiEdit2 />
              Edit
            </Link>
          </div>
          <div className="py-2 px-2 md:px-6 border text-white rounded-xl">
            <button
              className="flex items-center gap-2"
              onClick={() => setIsModalOpen(true)}
            >
              <AiFillDelete />
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr] px-2 md:px-16 md:py-10 py-4">
        <div>
          <h2 className="text-xl py-2">Description</h2>
          <p className="text-sm md:text-base text-gray-600">{desc}</p>
        </div>

        <div>
          <p className="text-gray-400 text-lg">Hackathon</p>

          <h2 className="text-xl font-medium py-4">{hackathonName}</h2>
          <div className="flex items-center gap-2 text-gray-500">
            <AiOutlineCalendar size={20} />
            <p>{startDate}</p>
            {"-"}
            <p>{endDate}</p>
          </div>

          <div className="text-gray-500">
            {githubLink ? (
              <a
                href={githubLink}
                target="_blank"
                className="flex items-center justify-center w-[80%] gap-1 py-1 px-3 border border-black rounded-xl mt-5"
              >
                <AiFillGithub size={25} />
                Github Repository
              </a>
            ) : (
              <button className="flex items-center justify-center w-[80%] gap-1 py-1 px-3 border border-black rounded-xl mt-5">
                <AiFillGithub size={25} />
                Github Repository
              </button>
            )}

            {otherLink ? (
              <a
                href={githubLink}
                target="_blank"
                className="flex items-center justify-center w-[80%] gap-1 py-1 px-3 border border-black rounded-xl mt-5"
              >
                <FaExternalLinkAlt size={25} />
                Other Link
              </a>
            ) : (
              <button className="flex items-center justify-center w-[80%] gap-1 py-1 px-3 border border-black rounded-xl mt-5">
                <FaExternalLinkAlt size={25} />
                Other Link
              </button>
            )}
          </div>
        </div>
      </div>
      <DeleteModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        id={id}
        deleteSubmission={deleteSubmission}
      />
    </div>
  );
};

export default SubmissionDetail;
