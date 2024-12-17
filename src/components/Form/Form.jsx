import React, { useState } from "react";
import "./Form.css";
import img_form1 from "../../assets/img/greyBall.png";
import img_form2 from "../../assets/img/lampocka.png";


function FeedbackForm({ sectionRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка данных:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div ref={sectionRef} className="container-form" id="form-nav">
      <div className="img-form1">
        <img src={img_form1} alt="" />
      </div>

      <div className="m_feedback-form">
        <form onSubmit={handleSubmit}>
          <label>
            Ваше имя:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Ваш email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Ваше сообщение:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </label>
          <br />
          <button type="submit">Отправить</button>
        </form>
      </div>
      <div className="img-form2">
        <img src={img_form2} alt="" />
      </div>
    </div>
  );
}

export default FeedbackForm;
