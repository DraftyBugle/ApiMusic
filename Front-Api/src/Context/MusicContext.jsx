import { createContext,useEffect,useState } from "react";
import { initialMusic } from "../services/initialMusic";
import { getAllMusics } from "../services/MusicService";

export const MusicContext = createContext (initialMusic);

export const MusicContextProvider = ({children})=>{
const [musics ,setMusics] =useState([]);
const [isLoading, setIsLoading] = useState (true);
const[error,setError] = useState (null);

const fetchData = async ()=> {
    try {
        setError(null);
        setIsLoading(true);
        const data = await getAllMusics();
        setMusics (data)
    }
    catch (error){
        console.log(error);
        setError(error.message);
    } finally {
        setIsLoading (false);
    }
};
useEffect(()=>{
    fetchData()
},[]);
return (
    <MusicContext.Provider
    value={{musics,isLoading,error}}>
  {children}
    </MusicContext.Provider>
)
}