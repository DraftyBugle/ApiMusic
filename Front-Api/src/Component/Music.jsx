
const Musics =({mus})=> {
    return (
        <>
        <div key={mus.id}>
            <h1>{mus.artist}</h1>
            <img src={mus.poster} alt="" />
            <p>{mus.members}</p>
            <p>{mus.start}</p>
            <p>{mus.songs}</p>
            <p>{mus.origin}</p>
        </div>
        </>
    )
}
export default Musics;