import {useState, useEffect} from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';
import {ImSpinner9} from 'react-icons/im'
import './App.css';
const url='https://course-api.netlify.app/api/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs,setJobs] = useState([]);
  const [value, setValue] =useState(0);

  const fetchJobs = async ()=>{
    const response=await fetch(url);
    const newJobs=await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(()=>{
fetchJobs();
  },[])
  
  return (
   <> {loading && <section className='section loading'><ImSpinner9 /></section>}
    <section className="title">
    
    </section>
    
    </>
  );
}

export default App;
