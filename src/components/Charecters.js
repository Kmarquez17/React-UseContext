import React, { useContext, useEffect } from "react";
import characterContext from "../context/characterContext";

const Charecters = () => {
  //Extraer proyecto del state inicial
  const charactersContext = useContext(characterContext);
  const { characters, getCharacters } = charactersContext;

  useEffect(() => {
    getCharacters();
    //eslint-disable-next-line
  }, []);

  console.log(characters);
  return (
    <div className="container mx-auto my-5 ">
      <p className="text-lg text-gray-800 font-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5">
        Rick and Morty API
      </p>

      <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 m-3">
        {characters.length > 0 ? (
          characters.map((character, index) => {
            let { name, status, species, gender, image } = character;
            return (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg"
                key={index}
              >
                <img
                  className="w-full"
                  src={image}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-1">
                  <div className="font-bold text-xl">{name}</div>
                </div>
                <div className="px-6 py-2">
                  <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 ">
                    {status}
                  </span>
                  <span className="inline-block bg-pink-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
                    {species}
                  </span>
                  <span className="inline-block bg-indigo-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
                    {gender}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-lg text-gray-800 font-black text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5">
            No hay datos que mostrar :(
          </p>
        )}
      </div>
    </div>
  );
};

export default Charecters;
