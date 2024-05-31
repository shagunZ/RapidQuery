'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [input,setInput] = useState<string>('')
  const [searchresults,setSearchResults]=useState<{
    results:string[],
    duration:number
}>()

useEffect(()=>{
  const fetchdata = async()=>{
    if(!input)return setSearchResults(undefined);
    
    const res = await fetch(`/api/search?q=${input}`)
  }
  fetchdata();  
},[input]);

  return (
    <main className='h-screen w-screen grainy'>
      <h1 className="flex flex-col gap-6 items-center pt-32 duration-500 animate-in fade-in-5 slide-in-from-bottom-2.5 font-bold">
fldksj;ajdflsaj; 
    <input value={input} onChange={(e)=>{setInput(e.target.value)}} 
    type="text" 
    className="text-zinc-900"/>
    </h1>
    </main>
  );
}
