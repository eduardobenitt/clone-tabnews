import React from "react";
import chicoImage from './images/chico.jpg'

function Home(){
    return  (
        <><div>
            <h1>Eu amo você, Maria Eduarda Pacheco Anunciato. Também amo muito o Chiquin fedido. ❤</h1>
        </div>
        <div>
            <img src={chicoImage} alt="Chiquin" />
        </div></>        

    );
}

export default Home;