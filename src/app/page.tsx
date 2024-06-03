'use client'
import { CommandDialog, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Command, CommandGroup } from "cmdk";
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

    const data = (await res.json()) as {results:string[];duration:number}
    setSearchResults(data);
  }
  fetchdata();  
},[input]);

  return (
    <main className='h-screen w-screen grainy'>
      <div className="flex flex-col gap-6 items-center pt-32 duration-500 animate-in fade-in-5 slide-in-from-bottom-2.5 font-bold">
        <h1 className="text-5xl tracking-tight font-bold">SpeedoMeter 🚀</h1>
        <p className='text-zinc-600 text-lg max-w-prose text-center'>
        Type your query below and receive lightning-fast results in milliseconds. <br />{' '}
        Experience unparalleled speed and efficiency with our cutting-edge technology stack.
        </p> 

<div className="max-w-md w-full">
    <Command>
      <CommandInput value={input} onValueChange={setInput} placeholder="search countries..." className="placeholder:text-zinc-500" />


<CommandList>
  {searchresults?.results.length===0 ? (
<CommandEmpty>
  No results found!
</CommandEmpty>
  ) : null}

  {searchresults?.results?(
    <CommandGroup heading="Results">
{
  searchresults?.results.map((result)=>(
    <CommandItem key={result} value={result}
    onSelect={setInput}>
      {result}
    </CommandItem>
  ))}
    </CommandGroup>
  ):null}

  {searchresults?.results?(
    <>
    <div className='h-px w-full bg-zinc-200'/>
    <p className="p-2 text-xs text-zinc-500">
      Found {searchresults.results.length} results in {searchresults?.duration.toFixed(0)}ms
    </p>
    </>
  ):null}
</CommandList>

    </Command>
</div>
    </div>
    </main>
  );
}
