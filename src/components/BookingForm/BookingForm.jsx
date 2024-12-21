import { toast } from "react-hot-toast";
import Button from "../Button/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
  const ProfileValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Required")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    bookingDate: Yup.date()
      .required("Required")
      .min(new Date(), "Date must be in the future"),
  });

  const handleSubmit = (values, { resetForm }) => {
    toast.success("Camper successfully booked!");
    console.log(values);

    resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <h2>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: null,
          comment: "",
        }}
        validationSchema={ProfileValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, setFieldValue, values }) => (
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={css.errorText}
            />
            <div className={css.datepickerWrapper}>
              <DatePicker
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                dateFormat="dd.MM.yyyy"
                minDate={new Date()}
                placeholderText="Booking date"
                className={css.input}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className="error-message"
              />
            </div>
            <Field
              as="textarea"
              name="comment"
              className={`${css.input} ${css.textarea}`}
              placeholder="Comment"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="error-message"
            />
            <Button
              type="submit"
              name="Send"
              disabled={Object.keys(errors).length > 0}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
