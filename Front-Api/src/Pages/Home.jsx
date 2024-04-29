import React from "react";
import Musics from "../Component/Music"
import NavBar from "../Component/Nav"
import { useContext } from 'react'
import { MusicContext } from '../Context/MusicContext'
import "./Home.css"
function Home(){
    const {musics}= useContext(MusicContext)
 
return (<>


    <div className="body">
<NavBar/>
    {musics.map((m)=>(
<Musics key={m.id} mus={m}/>

    ))}
    </div>
    </>
)
}

export default Home;