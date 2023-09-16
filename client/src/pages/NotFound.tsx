import { Link  } from "react-router-dom";
const NotFound = () => {
  return (
    <>
       <div className="h-screen flex flex-col justify-center items-center text-7xl text-white font-bold"><h1>No Pokemon Found</h1>
       <Link className="text-base text-slate-300 font-light" to="/">Go Home</Link>
       </div>

    </>
 
  )
}

export default NotFound