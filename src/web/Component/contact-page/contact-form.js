function ContactForm() {
  return (
    <>
      <div className="contact-form">
        <form method="post" action="contact-us.html">
          <div className="first-last">
            <input className="first" type="text" placeholder="First Name" />
            <input className="last" type="text" placeholder="Last Name" />
          </div>

          <div className="select-email">
            <input type="email" placeholder="Email" />
            <select>
              <option disabled selected value="">
                Select A Department
              </option>
              <optgroup label="Software Development">
                <option value="option1">Dev Ops Engineer</option>
                <option value="option2">Back-end Engineer</option>
              </optgroup>
              <optgroup label="Data Science">
                <option value="option3">Machine Learning - ML</option>
                <option value="option4">Data Analyst - DA</option>
              </optgroup>
            </select>
          </div>
          <textarea className="txt-area">Message</textarea>
          <button className="send-btn">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
