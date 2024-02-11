import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      description,
    };

    const response = await fetch("https://formspree.io/f/xyyqazeb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Thank you, we will reply to you soon!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setName("");
      setEmail("");
      setDescription("");
    } else {
      toast.error("Oops! Please try again", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setDescription("");
  };

  return (
    <section id="fourth" className="main">
      <header>
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            Hey there! If you've got a question, an idea, I'd love to hear from
            you, and let's start a conversation.
            <br />
            Looking forward to connecting with you soon!
          </p>
        </div>
      </header>
      <div className="content style4 featured">
        <div className="container medium">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="row gtr-50">
              <div className="col-6 col-12-mobile">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="col-6 col-12-mobile">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Your Email"
                  name="email"
                />
              </div>
              <div className="col-12">
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Your Message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions special">
                  <li>
                    <input
                      type="submit"
                      className="button"
                      value="Send Message"
                    />
                  </li>
                  <li>
                    <input
                      type="reset"
                      className="button alt"
                      value="Clear Form"
                      onClick={clearForm}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forth;
