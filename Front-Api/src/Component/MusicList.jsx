import { useContext } from "react";
import { MusicContext } from "../Context/MusicContext";
import './MusicList.css';
import NavBar from "../Component/Nav"
const MusicList =() => {
    const { musics, isLoading,error} = useContext(MusicContext);
    if(isLoading)
    return(
<div>
    <h1>Cargando</h1>
</div>
 )
 if(error)
 return (
<div>
    <h2>{error}</h2>
</div>

    )
    return(
        musics?.length && (
<>
<NavBar/>
<h1>Music</h1>
<div className="Card" >  
{musics.map((m)=>(
   
    <p key={m.id} className="CardOne">
       <p className="title"> {m.artist} </p> 
       
        <img src={m.poster} alt=""  className="Img"/>
        <p> {m.origin}  </p>
        <p className="members">{m.members}</p>
            <p>{m.start}</p>
            <p>{m.songs}</p>
    </p>
   
))}
 </div>
</>

        )
    )
}
export default MusicList;