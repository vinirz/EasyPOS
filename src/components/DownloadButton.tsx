'use client'

import { useEffect, useState } from "react"
import axios from 'axios';

export default function DownloadButton(){
    const [path, setPath] = useState<string>('/')

    useEffect(() => {
        async function getData(){
            const response = await axios.get('/api/update')
            console.log(response.data[0].link)
            setPath(response.data[0].link)
        }

        getData()
    }, [])

    return(
        <a href={path} className={path == '/' ? `opacity-50 pointer-events-none bg-indigo-950/10 text-zinc-50 rounded-full` : ''} download>
            <div className="w-60 h-14 border-2 rounded-full flex items-center justify-center text-xl border-indigo-950 cursor-pointer relative overflow-hidden group hover:bg-green-500 hover:border-green-500 transition-all">
                <h1 className="text-indigo-950 pointer-events-none z-10 group-hover:text-zinc-50 transition-all">Download</h1>
            </div>
        </a>
    )
}