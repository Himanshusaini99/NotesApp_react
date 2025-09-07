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
    <div className="w-full flex flex-col items-center">
      {/* Search Input */}
      <div className='w-full flex justify-center'>
        <input
          type='search'
          placeholder='Search here'
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          className='border border-white rounded-2xl w-full sm:w-[500px] md:w-[600px] p-2 m-4'
        />
      </div>

      {/* Notes List */}
      <div className='flex flex-col gap-5 w-full max-w-3xl px-4 sm:px-0'>
        {filterData.length > 0 && filterData.map((paste, index) => (
          <div
            key={paste._id || index}
            className='border border-white rounded-2xl p-3 flex flex-col gap-3'
          >
            {/* Title + Content */}
            <div className='flex flex-col w-full'>
              <div className='text-xl sm:text-2xl font-bold text-white mb-2'>
                {paste.title}
              </div>
              <div className='text-white text-sm sm:text-base'>
                {paste.content.substring(0, 100)}...
              </div>
            </div>

            {/* Buttons + Date in one row */}
            <div className="flex flex-row justify-between items-center w-full">
              {/* Buttons */}
              <div className='flex flex-row gap-3 items-center'>
                <Link to={`/?pasteId=${paste._id}`}>
                  <button className='w-8 h-8 sm:w-10 sm:h-10'>
                    <img src="/edit.png" />
                  </button>
                </Link>

                <button
                  className='w-8 h-8 sm:w-10 sm:h-10'
                  onClick={() => handleDelete(paste._id)}
                >
                  <img src="/delete.png" />
                </button>

                <button
                  className='w-8 h-8 sm:w-10 sm:h-10'
                  onClick={() => {
                    navigator.clipboard.writeText(paste.content)
                    toast.success("Copied to clipboard")
                  }}
                >
                  <img src="/copy.png" />
                </button>

                <Link to={`/pastes/${paste._id}`}>
                  <button className='w-8 h-8 sm:w-10 sm:h-10'>
                    <img src="/view.png" />
                  </button>
                </Link>

                <button
                  className='w-8 h-8 sm:w-10 sm:h-10'
                  onClick={() => {
                    const shareURL = `${window.location.origin}/pastes/${paste._id}`;
                    navigator.clipboard.writeText(shareURL);
                    toast.success("Share link copied")
                  }}
                >
                  <img src='/share.png' />
                </button>
              </div>

              {/* Date */}
              <div className='text-white text-sm sm:text-base'>
                {new Date(paste.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Paste
