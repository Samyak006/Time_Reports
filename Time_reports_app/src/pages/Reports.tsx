
import Filters from '../components/Filter';
import { useState } from 'react';

export default function ReportPage() {
    const [timekeepers] = useState<string[]>(["John Doe", "Jane Smith", "Bob Johnson"]);
    const [clients] = useState<string[]>(["001", "002", "003"]);
    const [matters] = useState<string[]>(["001-001", "001-002", "002-001"]);
    return (
      <>
        <h1>Reports</h1>
        {/* the timekeepers, clients and matters should be fetched from the backend and passed to the Filters component as props (create a hook for these values) */}
        <Filters 
            timekeepers={timekeepers}
            clients={clients}
            matters={matters}
        />
        <div>Preview</div>
      </>
  );
}
