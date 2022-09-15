import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
function Form(props) {
  const initialValues = {
    name: props.selectedUser?.name || '',
    email: props.selectedUser?.email || '',
    username: props.selectedUser?.username || '',
    phone: props.selectedUser?.phone || '',
    id: props.selectedUser?.id || '',
    date: props.selectedUser?.date || '',
    department: props.selectedUser?.department || '',
    designation: props.selectedUser?.designation || '',
    company: props.selectedUser?.company || '',
    lastname: props.selectedUser?.lastname || '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  useEffect(() => {}, [props.selectedUser]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const uname = /^[a-zA-Z0-9]*$/;
    const emp_id = /[A-Z]{2}?-[0-9]{4}$/;

    if (!values.name) {
      console.log(values.name);
      errors.name = 'Name is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.username) {
      errors.username = 'Username is required!';
    } else if (!uname.test(values.username)) {
      errors.username = 'Use only Alphanumeric!';
    }
    if (!values.id) {
      errors.id = 'Employee ID is required!';
    } else if (!emp_id.test(values.id)) {
      errors.id = 'This is not valid format (ex. FT-0091)';
    }
    if (!values.date) {
      errors.date = 'Date is required!';
    }
    if (!values.department) {
      errors.department = 'Please select your Department!';
    } else if (values.department === '--Select Department--') {
      errors.department = 'Please select your Department!';
    }
    if (!values.designation) {
      errors.designation = 'Please select your Designation!';
    } else if (values.designation === '--Select Designation--') {
      errors.designation = 'Please select your Designation!';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);

    let array = new Array();
    var str = localStorage.getItem('employee');
    if (str != null) array = JSON.parse(str);
    if (validate) {
      const obj = {
        nid: nanoid(),
        name: formValues.name,
        email: formValues.email,
        username: formValues.username,
        phone: formValues.phone,
        id: formValues.id,
        date: formValues.date,
        company: formValues.company,
        lastname: formValues.lastname,
        department: formValues.department,
        designation: formValues.designation,
      };
      array.push(obj);
      localStorage.setItem('employee', JSON.stringify(array));
      // alert('ifg');
      console.log(formValues);
      let employee = JSON.parse(localStorage.getItem('employee')) || [];
      employee.splice(6, 1);
      console.log('jyffhfh', employee);
    }
  };

  return (
    <>
      <div className="container">
        <form id="form" onSubmit={handleSubmit}>
          <div className="grid">
            <span className="center">Add Employee</span>
            <span className=" closed right" onClick={props.handleClose}>
              &times;
            </span>
            <span></span>
          </div>
          <div className="form">
            <div>
              <label for="fname" className="form-label required">
                First name:
              </label>
              <input
                id="name"
                type="text"
                class="form-control"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
              <p>{formErrors.name}</p>
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label">
                Last name:
              </label>
              <input
                type="text"
                name="lastname"
                value={formValues.lastname}
                onChange={handleChange}
                class="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label required">
                Username:
              </label>
              <input
                type="text"
                class="form-control"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
              <p>{formErrors.username}</p>
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label required size">
                Email:
              </label>
              <input
                type="email"
                onChange={handleChange}
                value={formValues.email}
                class="form-control"
                name="email"
              />
              <p>{formErrors.email}</p>
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label required">
                Employee Id:
              </label>
              <input
                name="id"
                value={formValues.id}
                onChange={handleChange}
                type="text"
                class="form-control"
              />
              <p>{formErrors.id}</p>
            </div>
            <div>
              <label
                for="exampleInputEmail1"
                format="yyyy-MM-dd"
                class="form-label required"
              >
                Joining Date:
              </label>
              <input
                name="date"
                value={formValues.date}
                onChange={handleChange}
                type="date"
                class="form-control"
                aria-describedby="emailHelp"
              />
              <p>{formErrors.date}</p>
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label">
                Phone:
              </label>
              <input
                pattern="[0-9]{10}"
                type="text"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                class="form-control"
                aria-describedby="emailHelp"
              />
              <p>{formErrors.phone}</p>
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label">
                Company:
              </label>
              <select
                class="form-control"
                id="company"
                name="company"
                value={formValues.company}
                onChange={handleChange}
              >
                <option value="--Select Company--">--Select Company--</option>

                <option value="Global Technologies">Global Technologies</option>
                <option value="Delta Infotech">Delta Infotech</option>
                <option value="International Software Inc">
                  International Software Inc
                </option>
              </select>
            </div>
            <div>
              <label for="exampleInputEmail1" class="form-label required">
                Department:
              </label>
              <select
                class=" form-control"
                id="department"
                name="department"
                value={formValues.department}
                onChange={handleChange}
              >
                <option value="--Select Department--">
                  --Select Department--
                </option>
                <option value="Web Development">Web Development</option>
                <option value="IT Management"> IT Management</option>
                <option value="Marketing">Marketing</option>
              </select>
              <p>{formErrors.department}</p>
            </div>
            <div>
              <label
                for="exampleInputEmail1"
                class="form-label required"
                name="designation"
                value={formValues.designation}
                onChange={handleChange}
              >
                Designation:
              </label>
              <select
                class="form-control drop"
                id="designation"
                name="designation"
                value={formValues.designation}
                onChange={handleChange}
              >
                <option value="--Select Designation--">
                  --Select Designation--
                </option>
                <option value="Web Designer">Web Designer</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Android Developer"> Android Developer</option>
              </select>
              <p>{formErrors.designation}</p>
            </div>
          </div>
          <div className="middle">
            <button type="submit" class="submit">
              Submit
            </button>
            <div>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Employee Added</div>
              ) : (
                ''
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Form;
