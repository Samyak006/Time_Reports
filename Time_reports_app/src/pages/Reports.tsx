
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import onPageLoad from '../hooks/onPageLoad'

export default function ReportPage() {
    const [timekeepers] = useState<string[]>(["John Doe", "Jane Smith", "Bob Johnson"]);
    const [clients] = useState<string[]>(["001", "002", "003"]);
    const [matters] = useState<string[]>(["001-001", "001-002", "002-001"]);
    
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
            <button onClick={onPageLoad}>click me</button>
          <div>Preview</div>
        </div>
      </>
  );
}
