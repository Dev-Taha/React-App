function ContactForm() {
  return (
    <>
      <div class="contact-form">
        <form method="post" action="contact-us.html">
          <div class="first-last">
            <input class="first" type="text" placeholder="First Name" />
            <input class="last" type="text" placeholder="Last Name" />
          </div>

          <div class="select-email">
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
          <textarea class="txt-area">Message</textarea>
          <button class="send-btn">Send Message</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
