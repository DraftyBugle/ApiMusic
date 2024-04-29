export const getAllMusics = async ()=> {
    const res = await fetch ("http://localhost:3000/music");
    if(!res.ok) throw new Error ("No responde");
const data = await res.json ();
return data;
};