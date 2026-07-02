
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import api from '../hooks/api'
import type ITimekeeper from '../Interface/Itimekeeper';
import type IClient from '../Interface/IClient';
import type IMatter from '../Interface/IMatter';

export default function ReportPage() {
    const [timekeepers, setTimekeepers] = useState<ITimekeeper[]>([]);
    const [clients, setClients] = useState<IClient[]>([]);
    const [matters, setMatters] = useState<IMatter[]>([]);
    
    useEffect(()=>{
      api.get("timekeepers").then((response)=>setTimekeepers(response.data)).catch((e)=>console.log(e))
      api.get("clients").then((response)=>setClients(response.data)).catch((e)=>console.log(e))
      api.get("matters").then((response)=>setMatters(response.data)).catch((e)=>console.log(e))
    }, []);

    return (
      <>
        <div className='px-50 my-5'>
          <Navbar/>
          {/* the timekeepers, clients and matters should be fetched from the backend and passed to the Filters component as props (create a hook for these values) */}
            <Filter
              styles="my-2.5"
              timekeepers={timekeepers}
              clients={clients}
              matters={matters}
            />
          <div>Preview</div>
        </div>
      </>
  );
}
