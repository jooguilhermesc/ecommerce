import React from "react";
import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = () => {
  const comprar = () => {
    alert("Obrigado por adquirir um dos nossos livros");
  };

  return (
    <div className={styles.card}>
      <Image
        src="../images/capa_gui_mochileiro.jpg"
        alt="Capa do livro O Guia do Mochileiro das Galáxias"
      />
      <div className={styles.salesInfo}>
        <div className={styles.booksInfo}>
          <h3 className="text-gray-700"> [Título do Livro] </h3>
        </div>
        <span className={styles.price}>R$ 0000.00</span>
      </div>
      <button onClick={comprar} className={styles.button}>
        COMPRAR
      </button>
    </div>
  );
};

export default Card;
