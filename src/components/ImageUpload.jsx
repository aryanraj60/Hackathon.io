import React from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
const ImageUpload = ({ imgUrl, handleImageUpload, imgName }) => {
  return (
    <>
      <label
        for="cover"
        className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
      >
        Cover Image
      </label>
      <p className="text-gray-400 pb-1">Minimum resolution: 360px X 360px</p>

      <div className="flex items-center justify-center w-full">
        {imgUrl ? (
          <div className="bg-[#F8F9FD] w-full flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-2">
              <img
                src={
                  imgUrl.length < 20
                    ? require(`../assests/${imgUrl}.png`)
                    : imgUrl
                }
                className="w-12 h-12 border rounded-xl object-fit"
              />
              <p className="text-base text-gray-600">{imgName}</p>
            </div>

            <label
              for="reupload"
              className="flex items-center gap-2 cursor-pointer"
            >
              <p className="text-base text-gray-400 font-semibold">Reupload</p>
              <div className="flex items-center gap-3">
                <BsFillCloudUploadFill size={25} />
                <input
                  id="reupload"
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </label>
          </div>
        ) : (
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <BsFillCloudUploadFill size={25} />
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        )}
      </div>
      {!imgUrl && (
        <p className="my-4 text-sm text-red-500">Please Upload a Cover Image</p>
      )}
    </>
  );
};

export default ImageUpload;
