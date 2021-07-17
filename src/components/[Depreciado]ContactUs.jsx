import React from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ga6mkp",
        "template_3ny1vf9",
        e.target,
        "user_AcVY4pIVcM3WPeWASPt4q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset;
    alert("Você acaba de se increver em nossa newsletter!");
  }

  return (
    <div className="">
      <h2>Increva-se em nossa newsletter e receba as melhores ofertas!</h2>
      <form className="" onSubmit={sendEmail}>
        <label className="">Name</label>
        <input className="" type="text" name="user_name" />
        <label className="">Email</label>
        <input className="" type="email" name="user_email" />
        <input className="" type="submit" value="Send" />
      </form>
    </div>
  );
}
