import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { updatePaste, addTopaste } from '../redux/pasteSlice';
import toast from "react-hot-toast";

const Home = () => {
  const [title, settitle] = useState("");
  const [value, setvalue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allpastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allpastes.find((p) => p._id === pasteId);

      if (paste) {
        settitle(paste.title);
        setvalue(paste.content);
      }
    }
  }, [pasteId, allpastes]);

  function createPaste() {
    const paste = {
      content: value,
      title: title,
      _id: pasteId ||  Date.now().toString(30),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updatePaste(paste));
    } else {
      dispatch(addTopaste(paste));
    }

    settitle("");
    setvalue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className='flex justify-between'>
      <input 
        className='border border-white w-full sm:w-80 md:w-96 rounded-2xl p-2 ml-2' 
        type='text'
        placeholder='Enter the Title'
        value={title}
        onChange={(e)=>settitle(e.target.value)}
      />

      <button 
        onClick={createPaste} 
        className='border border-white rounded-2xl p-2 ml-4 hover:bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-110'
      >
        {pasteId ? "Update my Note" : "Create my Note"}
      </button>
</div>
      <div className='w-full'>
        <textarea 
          className='border border-white w-full sm:w-[500px] md:w-[700px] rounded-2xl m-4 bg-gray-800 p-2'
          value={value}
          placeholder='enter your content here'
          rows={20}
          onChange={(e)=>setvalue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Home;
