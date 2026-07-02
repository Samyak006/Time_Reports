import type IClient from "../Interface/IClient";
import type IMatter from "../Interface/IMatter";
import type ITimekeeper from "../Interface/Itimekeeper";
import TimekeeperDropdown from "./TimekeeperDropdown"
import ClientDropdown from "./ClientDropdown"
import MatterDropdown from "./MatterDropdown"
import {useState} from "react";

export interface IfilterProps {
    styles:string;
    timekeepers: ITimekeeper[];
    clients: IClient[];
    matters: IMatter[];
}

export default function FilterComponent(
                                        {   
                                            styles,
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
                <div className={`${styles} flex flex-row justify-center-safe`}>
                    <TimekeeperDropdown styles="" options={timekeepers} setFilter={setTimekeeper} />
                    <ClientDropdown styles="" options={clients} setFilter={setClientId} />
                    <MatterDropdown styles="" options={matters} setFilter={setMatterId} />
                    <div><input type="date" placeholder='Work Date From' onChange={(e)=>setWorkDateFrom(e.target.value)} /></div>
                    <div><input type="date" placeholder='Work Date To' onChange={(e)=>setWorkDateTo(e.target.value)}/></div>
                    <div><button onClick={handleApplyFilter}> Apply Filters </button></div>
                </div>
            </>
        );
    }
