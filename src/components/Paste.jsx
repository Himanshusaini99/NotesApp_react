import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const [searchTerm, setsearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId))
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-black overflow-x-hidden">
      {/* Search Input */}
      <div className="w-full flex justify-center">
        <input
          type="search"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          className="border border-white rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl p-2 m-4 bg-black text-white"
        />
      </div>

      {/* Notes List */}
  {/* Notes List */}
<div className="flex flex-col gap-4 w-full px-3">
  {filterData.length > 0 &&
    filterData.map((paste, index) => (
      <div
        key={paste._id || index}
        className="border border-white rounded-xl p-3 flex flex-col gap-3 bg-black 
                   break-words shadow-md w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto"
      >
        {/* Title + Content */}
        <div className="flex flex-col min-w-0">
          <div className="text-base sm:text-lg font-bold text-white mb-1 break-words">
            {paste.title}
          </div>
          <div className="text-white text-sm sm:text-base line-clamp-2 break-words">
            {paste.content}
          </div>
        </div>

        {/* Actions + Date */}
        <div className="flex flex-wrap items-center justify-between gap-3 w-full">
          {/* Buttons */}
          <div className="flex flex-row flex-wrap gap-2">
            <Link to={`/?pasteId=${paste._id}`}>
              <button className="w-8 h-8 sm:w-10 sm:h-10">
                <img src="edit.png" alt="edit" />
              </button>
            </Link>
            <button
              className="w-8 h-8 sm:w-10 sm:h-10"
              onClick={() => handleDelete(paste._id)}
            >
              <img src="delete.png" alt="delete" />
            </button>
            <button
              className="w-8 h-8 sm:w-10 sm:h-10"
              onClick={() => {
                navigator.clipboard.writeText(paste.content);
                toast.success("Copied to clipboard");
              }}
            >
              <img src="copy.png" alt="copy" />
            </button>
            <Link to={`/pastes/${paste._id}`}>
              <button className="w-8 h-8 sm:w-10 sm:h-10">
                <img src="view.png" alt="view" />
              </button>
            </Link>
            <button
              className="w-8 h-8 sm:w-10 sm:h-10"
              onClick={() => {
                const shareURL = `${window.location.origin}/pastes/${paste._id}`;
                navigator.clipboard.writeText(shareURL);
                toast.success("Share link copied");
              }}
            >
              <img src="share.png" alt="share" />
            </button>
          </div>

          {/* Date */}
          <div className="text-white text-xs sm:text-sm shrink-0">
            {new Date(paste.createdAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    ))}
</div>

    </div>
  );
};

export default Paste;
