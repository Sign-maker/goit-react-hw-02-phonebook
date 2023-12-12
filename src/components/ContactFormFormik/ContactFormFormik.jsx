import { nanoid } from 'nanoid';
import {
  Button,
  Label,
  Input,
  StyledForm,
  StyledErrorMessage,
} from './ContactFormFormik.styled';
import { Formik } from 'formik';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().integer().required(),
});

const initialValues = {
  name: '',
  number: '',
};
const nameInputId = nanoid();
const telInputId = nanoid();

export const ContactFormFormik = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit({ name: values.name.trim(), number: values.number.trim() });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          placeholder="Vasyl Pupkin"
          type="text"
          name="name"
          required
        />
        <StyledErrorMessage name="name" component="div" />
        <Label htmlFor={telInputId}>Number</Label>
        <Input
          id={telInputId}
          placeholder="999111999"
          type="tel"
          name="number"
          required
        />
        <StyledErrorMessage name="number" component="div" />
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
// disabled={!(name && number)}
