import { connection } from "../../db_config.js";


export class MusicMd{

static async getAll(artist){
    if(!artist){
    const[musics,_info] = await connection.query 

    (
     
     `SELECT
     m.artist,
     GROUP_CONCAT(g.name SEPARATOR ', ') AS genres,
     m.members,
     m.start,
     m.poster,
     m.origin,
     m.songs,
     BIN_TO_UUID(m.id) AS id
 FROM
     musics m
 JOIN
     music_genres mg ON mg.music_id = m.id
 JOIN
     genres g ON mg.genre_id = g.id
     
 GROUP BY m.id
 ORDER BY m.artist`


  )
      return musics.length? musics : null ;
    }
    
    const [musics,_info] = await connection.query
(
  `SELECT
  m.artist,
  GROUP_CONCAT(g.name SEPARATOR ', ') AS genres,
  m.members,
  m.start,
  m.poster,
  m.origin,
  m.songs,
  BIN_TO_UUID(m.id) AS id
FROM
  musics m
JOIN
  music_genres mg ON mg.music_id = m.id
JOIN
  genres g ON mg.genre_id = g.id        
  WHERE artist LIKE '%' ? '%'
  GROUP BY m.id;
`,
  [artist]
  
  
  
)
   
    return musics.length? musics : null ;
}
//---------------Busqueda x ID-----------------------
static async getById (id){
  const[musics,_info] = await connection.query (`
 SELECT BIN_TO_UUID(m.id) as id ,  m.artist, m.start ,m.poster,
 m.origin,m.songs, m.members ,g.name as genres
  FROM musics m
  JOIN music_genres mg ON mg.music_id = m.id
  JOIN genres g ON mg.genre_id = g.id   
   WHERE m.id = UUID_TO_BIN(?)
 `,
  [id]
  );
 
    return musics;
  }
  //---------------Borrar x ID-----------------------
  static async deleOne (id){
    const[info] = await connection.query (`
  DELETE FROM musics WHERE musics.id = UUID_TO_BIN(?)
   `,
    [id]
    );
   
      return info.affectedRows;
    }

   //---------------Agregar ----------------------- 
    static async addOne (music){

      const{artist, start,poster,origin,songs ,members,genres} = music;
 
    
      const result = await connection.query (`
INSERT INTO musics (artist, start,poster,origin,songs ,members)
VALUES (?,?,?,?,?,?)
     `,
      [artist, start,poster,origin,songs ,members]
      );
      for (const gen of genres){
        await connection.query(
`INSERT INTO music_genres (music_id, genre_id) SELECT m.id, g.id
FROM musics m JOIN genres g ON  m.artist= ?  AND g.name IN ('${gen}')
`,
[artist]
        )
      }
     
        return result ? result : null;
      }

//---------------Editar-----------------------------------------------

/// Error al editar el genero 
  static async updateOne(id, partialMusic) {
    let queryString = "";
    for (const key in partialMusic) {
      queryString += `${key} = '${partialMusic[key]}', `;
    }
    queryString = queryString.slice(0, -2);
    const [result, _info] = await connection.query(
      `UPDATE musics SET ${queryString} WHERE musics.id = UUID_TO_BIN(?)`,
      [id]
    );
    return result.affectedRows;
  }

}