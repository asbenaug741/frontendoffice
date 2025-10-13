import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import axios from "axios";
import type { Office } from "../types/type";

export default function OfficeWrapper(){
    const [offices,setOffices] = useState<Office[]>([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(()=>{
        axios
        .get("http://backendoffice.test/api/offices",{
            headers: {
                "X-API-KEY": "asdw1212f3g4"
            },
        })
        .then((response)=>{
            setOffices(response.data.data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error);
            setLoading(false);
        });

    },[])

    if(loading){
        return <p>Loading......</p>
    }

    if(error){
        return <p>Error</p>
    }
    return(
        <section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
            <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
            Browse Our Fresh Space.
            <br />
            For Your Better Productivity.
            </h2>
            <div  className="grid grid-cols-3 gap-[30px]">
            {offices.map((office)=>(
                <OfficeCard key={office.id} office={office}></OfficeCard>
            ))}
            </div>
        </section>
    )
}