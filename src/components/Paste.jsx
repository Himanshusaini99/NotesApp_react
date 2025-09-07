import React,{ useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Paste = () => {

const pastes=useSelector((state)=>state.paste.pastes)

const [searchTerm,setsearchTerm]=useState("");

const dispatch=useDispatch();


const filterData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()));


function handleDelete(pasteId){
  dispatch(removeFromPastes(pasteId))


  

}


  return (
    <div>
      <div>
      <input
      className='border border-white rounded-2xl min-w-[500px] p-2 m-4'
      type='search'
      placeholder='search here'
      value={searchTerm}
      onChange={(e)=>setsearchTerm(e.target.value)}/>
      </div>
    
    <div className='flex flex-col gap-5'>
        {
          filterData.length>0 && filterData.map((paste,index)=>{
            return(
              <div className='' >
              <div key={paste._id || index} className='border border-white m-3 p-2 flex justify-between items-start'>
               <div className='flex flex-col'>
                <div className='text-white m-2 text-3xl'>
                  {paste.title}
                </div>

                <div className='m-2'>
                  {paste.content.substring(0,100)}
                </div >
                </div>
                <div className='flex flex-col gap-7'>
                <div className='flex flex-row flex-nowrap'>



                  <Link to={`/?pasteId=${paste?._id}`}>
                  <button className='w-15 h-15'>
                    <img src="edit.png" />
                   </button></Link>
                 
                   <button className='w-15 h-15' onClick={()=>handleDelete(paste?._id)}>
                    <img src="delete.png" />
                  </button>



                  <button className='w-15 h-15' onClick={() => {
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("copied to clipboard")
                  }
                  }>
                    <img src="copy.png" />
                  </button>


                  <Link to={`/pastes/${paste?._id}`}>
                    <button className='w-15 h-15'>
                      <img src="view.png" />
                    </button>
                  </Link>

                  <button className='w-15 h-15'
                  onClick={()=>{
                    const shareURL=`${window.location.origin}/pastes/${pastes._id}`;
                    navigator.clipboard.writeText(shareURL);
                    toast.success("share Link copied");
                  }}>
                    <img src='share.png'/>
                      </button>


                    </div>
                    <div className='flex justify-end'>
                      {new Date(paste.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                      })}

                  </div>
                </div>
              </div>
              </div>
            )
          })
        }

    </div>

    </div>
  )
}

export default Paste;
