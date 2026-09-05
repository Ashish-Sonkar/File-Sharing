import {useState,useEffect} from "react"
import logo from './assets/logo.png'
import image from "./assets/undraw-upload.svg"
import { uploadFile } from "./services/api"


function App() {
  const[file,setFile]=useState("")

  const[result,setResult]=useState("")

  console.log(file)
  useEffect(()=>{
    const getImage=async ()=>{
      if(file){
        const data=new FormData()
        data.append("name",file.name)
        data.append("file",file)

        let response=await uploadFile(data)
        setResult(response.path)
      }
    }
    getImage()
  },[file])

  return (
    <div className='bg-[#eff5fe] min-h-screen flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 flex items-center justify-center p-4'>
        <div className='bg-white w-full max-w-[680px] min-h-[400px] rounded-2xl flex items-center justify-center p-4'>
          <div className='w-full max-w-[600px] min-h-[320px] border-2 border-dashed rounded-[10px] border-[#87CEEB]'>
            <h1 className='text-[#2b7694] text-2xl sm:text-3xl md:text-4xl flex justify-center mt-7'>Simple File Sharing!</h1>
            <p className='flex justify-center mt-7'>Upload and share the download link</p>
            <label className='bg-[#87CEEB] text-white px-6 py-3 rounded-[10px] cursor-pointer flex justify-center mt-8 w-[150px] mx-auto'>
              Upload
              <input type="file" className='hidden ' onChange={(data)=>setFile(data.target.files[0])} />
            </label>
            <a href={result} target="_blank" className="flex justify-center mt-7 mx-auto break-all text-center">{result} </a>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex items-center justify-center p-6'>
        <img className='w-full max-w-[600px] h-auto' src={image} alt="Image" />
      </div>
    </div>
  )
}

export default App
