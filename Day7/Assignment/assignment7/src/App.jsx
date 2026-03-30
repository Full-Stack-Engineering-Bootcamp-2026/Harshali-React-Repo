import { useFormik } from "formik";

function App() {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },

    // Validation
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Name is required";
      }

      if (!values.email) {
        errors.email = "Email is required";
      }

      return errors;
    },

    // Submit
    onSubmit: (values) => {
      console.log("Form Data:", values);
    }
  });

  return (
    <div>
      <h1>User Registration Form</h1>

      <form onSubmit={formik.handleSubmit}>

        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && <p>{formik.errors.name}</p>}
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <p>{formik.errors.email}</p>}
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;