import React from "react";
// import EarthVideo from "../components/Planets/EarthVideo";
// import Neptune from "../components/Planets/Neptune";
import Mars from "../components/Planets/Mars";
import Earth2 from "../components/Planets/Earth2";

const Home = () => {
  return (
    <div className="m-20 w-full text-white relative ">
      {/* Background */}
      <div className="w-full top-10 absolute object-cover z-0">
        <Mars />
      </div>

      {/* frontground */}
      <div>
        <div className="absolute flex-col top-20 items-center">
          <h2 className="text-6xl mb-6 tracking-wide font-[font1]">
            BIOLOGY ENGINE
          </h2>
          <p className="w-90 mb-20 font-[font2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellendus, voluptatibus soluta molestias modi exercitationem
            voluptatem animi ipsa quo ex. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam facere provident animi veniam sequi ipsa.
            Soluta quo accusamus fuga odit?
          </p>
          <div className="absolute w-250 font-[font2]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              labore hic provident quos veritatis pariatur ea tenetur ipsum eos
              sunt? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, alias animi facere esse dolorem perferendis vero
              quidem nobis suscipit eos, minus impedit aspernatur mollitia iure
              blanditiis harum maiores nesciunt voluptatibus? Quod maxime saepe
              amet optio, quia esse commodi. Laborum, incidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
