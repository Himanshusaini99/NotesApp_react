import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { updatePaste, addTopaste } from '../redux/pasteSlice';
import toast from "react-hot-toast";
import React from 'react'

const ViewContent = () => {

const {id}=useParams();

const allpastes=useSelector((state)=>state.paste.pastes);
const paste=allpastes.filter((p)=>p._id===id)[0];


  return (
      <div className=''>
        <div className='flex justify-center items-center'>
      <input 
        className='border border-white rounded-2xl p-2 ' 
        type='text'
        placeholder='Enter the Title'
        value={paste.title}
        disabled
        onChange={(e)=>settitle(e.target.value)}
      />
      </div>
   

      <div>
        <textarea 
          className='border border-white w-xl rounded-2xl m-2 bg-gray-800 p-2'
          value={paste.content}
          placeholder='enter your content here'
          rows={20}
          disabled
          onChange={(e)=>setvalue(e.target.value)}
        />
      </div>
    </div>
    
  )
}

export default ViewContent;
