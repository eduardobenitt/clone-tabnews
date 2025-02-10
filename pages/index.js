import React from "react";
import Image from "next/image";

function Home() {
  return (
    <>
      <div>
        <h1>
          Eu amo você, Maria Eduarda Pacheco Anunciato. Também amo muito o
          Chiquin fedido. ❤
        </h1>
      </div>
      <div>
        <Image
          src="/images/chico.png"
          alt="Chiquin"
          width={500}
          height={300}
        />
      </div>
    </>
  );
}

export default Home;
