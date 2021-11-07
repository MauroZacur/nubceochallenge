import React from 'react';




const Info = ({bandId, genreId,todos,albums,bandGenre}) => {

 

var bandInfo = todos;
var bandAlbums = albums;
var bandsGenre= bandGenre;



var bandFilter = bandInfo.filter(element => element.id === bandId); //I Get the selected band and filter the array
var albumFilter = bandAlbums.filter(element => element.bandId === bandId);
var genreFilter = bandsGenre.filter(element => element.code === genreId);

genreFilter.push({code: "goth-metal", name:"Goth Metal"}); // I push this register because is not on the api file




console.log(bandId);
    
    
    return ( 

        <div className= "bands-container">

            <h2 >Info</h2>
            <div>

            <ul className="bands-info">
                <li><h2>{bandFilter[0].name}</h2></li>
                <li><p>Genre: {genreFilter[0].name}</p></li>
                <li><p>Year: {bandFilter[0].year}</p></li>
                <li><p>Country: {bandFilter[0].country}</p></li>
            </ul>
            <div className="info-grid">
              <ul className="bands-info">
                  <li>Members:{bandFilter[0].members.map(element => {
                            
                            return <p>- {element.name}</p>
                            }) }  
                      </li>
                </ul>

                <ul className="bands-info">
                  <li>Albums:{albumFilter.map(element => {
                            
                            return <p>- {element.name} ({element.year})</p>
                            }) }  
                      </li>
                </ul>

            </div>
            

        </div>
            

            
        </div>
     );
}
 
export default Info;