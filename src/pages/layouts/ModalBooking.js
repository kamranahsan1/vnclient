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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="contact-form-wrap primary-bg">
          {isDialogOpen && (
            <div className="alert alert-success">
              <strong>Success!</strong> Request Submitted Successfully! Our team
              will contact you shortly.
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
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
            {/* Other form fields and validation messages */}
            <p>
              <input type="submit" name="submit" value="SUBMIT MESSAGE" />
            </p>
          </form>
        </div>
        <footer>
          <button onClick={() => toggleModal(false)}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default ModalBooking;
