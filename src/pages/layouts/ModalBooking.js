import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveContact } from "../action/packagesActions";

const ModalBooking = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = {};
    if (!formData.name) {
      validationErrors.name = "Name is required";
    }
    if (!formData.phone) {
      validationErrors.phone = "Phone is required";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      dispatch(saveContact(formData));
      setFormData(initialFormData);
      setDialogOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <body>
            <div className="contact-from-wrap primary-bg">
              {isDialogOpen && (
                <div className="alert alert-success">
                  <strong>Success!</strong> Request Submitted Successfully! Our
                  team will contact shortly.
                </div>
              )}
              <form
                method="get"
                className="contact-from"
                onSubmit={handleSubmit}
              >
                <p>
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </p>
                <p>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </p>
                <p>
                  <label>Phone No</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </p>
                <p>
                  <label>Reason</label>
                  <br />
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="full-width"
                  >
                    <option value="">Select reason</option>
                    <option value="visa">Visa</option>
                    <option value="uae-tours">Uae Tours</option>
                    <option value="packages">Packages</option>
                  </select>
                  {errors.reason && (
                    <span className="error-message">{errors.reason}</span>
                  )}
                </p>
                <p>
                  <label>Comments / Questions</label>
                  <textarea
                    rows="8"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message*"
                  ></textarea>
                </p>
                <p>
                  <input type="submit" name="submit" value="SUBMIT MESSAGE" />
                </p>
              </form>
            </div>
          </body>
          <footer>
            <button onClick={() => toggleModal(false)}>Close</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ModalBooking;
