import React, { useContext, useEffect, useState } from "react";
import { ImageUpload } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { getSubmissionById } from "../utils/data";
import { AppContext } from "../context/AppContext";
import { v4 } from "uuid";

const SubmissionForm = () => {
  const [title, setTitle] = useState("");
  const [remainingWords, setRemainingWords] = useState(null);
  const [summary, setSummary] = useState("");
  const [desc, setDesc] = useState("");
  const [hackathonName, setHackathonName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [otherLink, setOtherLink] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [imgName, setImgName] = useState("");
  const { setSubmissionData } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Url = reader.result;
      setImgUrl(base64Url);
      console.log(typeof base64Url);
    };
    setImgName(file.name);
  };

  const handleDescChange = (e) => {
    const target = e.target;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;
    setRemainingWords(`${currentLength}/${maxLength} characters`);
    setDesc(e.target.value);
  };

  //Function to upload Submission
  const uploadSubmission = (e) => {
    e.preventDefault();
    const id = v4();
    const formData = {
      id,
      title,
      summary,
      desc,
      hackathonName,
      startDate,
      endDate,
      githubLink,
      otherLink,
      imgUrl,
      timestamp: new Date(),
    };

    if (imgUrl) {
      const submissionData = JSON.parse(localStorage.getItem("submissionData"));

      localStorage.setItem(
        "submissionData",
        JSON.stringify([...submissionData, formData])
      );
      setSubmissionData([...submissionData, formData]);
      alert("Submission Uploaded!");
      navigate("/");
    }
  };

  //Function to update Submission With Id
  const updateSubmission = (ev, id) => {
    ev.preventDefault();
    if (imgUrl) {
      const currentSubmission = getSubmissionById(id);
      const { timestamp } = currentSubmission;
      const updatedFormData = {
        id,
        title,
        summary,
        desc,
        hackathonName,
        startDate,
        endDate,
        githubLink,
        otherLink,
        imgUrl,
        timestamp,
      };
      const allSubmissions = JSON.parse(localStorage.getItem("submissionData"));
      const restSubmissions = allSubmissions.filter((sub) => sub.id !== id);
      localStorage.setItem(
        "submissionData",
        JSON.stringify([...restSubmissions, updatedFormData])
      );
      setSubmissionData([...restSubmissions, updatedFormData]);
      alert("Submission Updated");
    }
  };

  useEffect(() => {
    if (id) {
      const currentSubmission = getSubmissionById(id);
      const {
        title,
        summary,
        desc,
        hackathonName,
        startDate,
        endDate,
        githubLink,
        otherLink,
        imgUrl,
      } = currentSubmission;
      setTitle(title);
      setSummary(summary);
      setDesc(desc);
      setHackathonName(hackathonName);
      setStartDate(startDate);
      setEndDate(endDate);
      setGithubLink(githubLink);
      setOtherLink(otherLink);
      setImgUrl(imgUrl);
    }
  }, []);

  return (
    <form
      className="px-6 py-2 pt-4 max-w-4xl mx-auto bg-white"
      onSubmit={(ev) => {
        if (id) {
          updateSubmission(ev, id);
        } else {
          uploadSubmission(ev);
        }
      }}
    >
      <h2 className="text-xl text-gray-800 font-semibold">
        {id ? "Edit" : "New"} Hackathon Submission
      </h2>
      <div>
        <div className="py-3">
          <label
            for="first_name"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title of your submission"
            required
            value={title}
          />
        </div>

        <div className="py-3">
          <label
            for="Summary"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Summary
          </label>
          <input
            onChange={(e) => setSummary(e.target.value)}
            type="text"
            id="Summary"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="A short summary of your submission (this will be visible with your submission)"
            required
            value={summary}
          />
        </div>

        <div className="py-3 relative">
          <label
            for="description"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            type="text"
            id="description"
            maxLength="3000"
            onChange={handleDescChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-40 mb-4"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            required
            value={desc}
          />
          <span className="absolute bottom-1 right-2 text-gray-400">
            {remainingWords}
          </span>
        </div>

        <div className="py-3">
          <ImageUpload
            imgName={imgName}
            imgUrl={imgUrl}
            handleImageUpload={handleImageUpload}
          />
        </div>

        <div className="py-3">
          <label
            for="hackathonName"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Hackathon Name
          </label>
          <input
            type="text"
            onChange={(e) => setHackathonName(e.target.value)}
            id="hackathonName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter the name of the hackathon"
            required
            value={hackathonName}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 py-3">
          <div>
            <h2 className="pb-1">Hackathon Start Date</h2>
            <div>
              <div class="">
                <input
                  type="date"
                  onChange={(e) => setStartDate(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select date"
                  required
                  value={startDate}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="pb-1">Hackathon End Date</h2>
            <div>
              <div class="">
                <input
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Select date"
                  required
                  value={endDate}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-3">
          <label
            for="github"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            GitHub Repository
          </label>
          <input
            type="text"
            onChange={(e) => setGithubLink(e.target.value)}
            id="github"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your submission’s public GitHub repository link"
            required
            value={githubLink}
          />
        </div>

        <div className="py-3">
          <label
            for="otherLink"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Other Links
          </label>
          <input
            type="text"
            onChange={(e) => setOtherLink(e.target.value)}
            id="otherLink"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="You can upload a video demo or URL of you demo app here."
            value={otherLink}
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-[#44924C] rounded-xl text-white mt-8"
        >
          Upload Submission
        </button>
      </div>
    </form>
  );
};

export default SubmissionForm;
