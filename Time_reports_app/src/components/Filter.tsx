import Dropdown from "./Dropdown";
import {useState} from "react";
export interface IfilterProps {
    timekeepers: string[];
    clients: string[];
    matters: string[];
}

export default function FilterComponent(
                                        {
                                            timekeepers,
                                            clients,
                                            matters,
                                        }
                                        : IfilterProps
                                    )
    {
        // state for the filters
        const [timekeeper, setTimekeeper] = useState<string>('');
        const [clientId, setClientId] = useState<string>('');
        const [matterId, setMatterId] = useState<string>('');
        const [workDateFrom, setWorkDateFrom] = useState<string>('');
        const [workDateTo, setWorkDateTo] = useState<string>('');

        // handling button and filter logic
        const handleApplyFilter = ():void => {
            // this function should apply the filters to the data and update the preview
            console.log('Applying filters:', {timekeeper, clientId, matterId, workDateFrom, workDateTo});
    }
        return (
            <>
                <div className="flex justify-center-safe">
                    <Dropdown options={timekeepers} setFilter={setTimekeeper} />
                    <Dropdown options={clients} setFilter={setClientId} />
                    <Dropdown options={matters} setFilter={setMatterId} />
                    <input type="date" placeholder='Work Date From' onChange={(e)=>setWorkDateFrom(e.target.value)} />
                    <input type="date" placeholder='Work Date To' onChange={(e)=>setWorkDateTo(e.target.value)}/>
                    <button onClick={handleApplyFilter}> Apply Filters </button> 
                </div>
            </>
        );
    }
