import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { saveContact } from "../../action/packagesActions";
import { Modal } from "react-bootstrap";

const ModalBooking = ({ show, handleClose, message }) => {
  const dispatch = useDispatch();
  const initialFormData = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      reason: "Query",
      message: message,
    }),
    [message]
  );
  const [formData, setFormData] = useState(initialFormData);
  const [isDialogOpen, setDialogOpen] = useState(false);
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        reason: "Query",
        message: "",
      });
      setDialogOpen(true);
      setErrors({});
      setTimeout(() => {
        handleClose();
        setDialogOpen(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (!show) {
      console.log(initialFormData);
      setFormData(initialFormData);
      setErrors({});
    }
  }, [initialFormData, show]);

  return (
    <Modal show={show} onHide={handleClose} size="md">
      <Modal.Body>
        <div className="row">
          <div className="contact-from-wrap primary-bg">
            {isDialogOpen && (
              <div className="alert alert-success">
                <strong>Success!</strong> Request Submitted Successfully! Our
                team will contact shortly.
              </div>
            )}
            <form method="get" className="contact-from" onSubmit={handleSubmit}>
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
                <label>Comments / Questions</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message*"
                ></textarea>
              </p>
              <p>
                <input type="submit" name="submit" value="SUBMIT" />
              </p>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBooking;
