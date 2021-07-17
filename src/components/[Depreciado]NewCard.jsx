import React from "react";
import Image from "next/image";
import guiaDoMochileiro from "../images/capa_gui_mochileiro.jpg";

const NewCard = () => {
  return (
    <div>
      <div className="flex p-6 bg-gray-900 rounded-lg w-82">
        <div className="flex-none w-44 relative">
          <Image
            src={guiaDoMochileiro}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <form className="flex-auto pl-6">
          <div className="flex flex-wrap items-baseline">
            <h1 className="w-full flex-none text-gray-400 font-semibold mb-2.5">
              Guia do Mochileiro das Galáxias
            </h1>
            <div className="text-4xl leading-7 font-bold text-gray-600">
              R$39.00
            </div>
            <div className="text-sm font-medium text-gray-400 ml-3">
              Em estoque
            </div>
          </div>

          <div className="flex space-x-3 mb-4 text-sm font-semibold">
            <div className="flex-auto flex space-x-3">
              <button
                className="w-40 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white"
                type="submit"
              >
                Compre agora
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Entrega grátis pra região norte e nordeste
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewCard;
