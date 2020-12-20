import { Formik, Form, Field, ErrorMessage } from 'formik';
import { EMAIL, VALIDATION_SCHEMA } from './constant';
import { postNewsletterApi } from 'lib/api';

interface Props {}

const CForm: React.FC<Props> = () => {
  return (
    <Formik
      enableReinitialize
      initialValues={{ [EMAIL]: '' }}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        const { data } = await postNewsletterApi(values[EMAIL]);
        if (data) {
          resetForm();
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            name={EMAIL}
            aria-label="subscribe-email"
            placeholder="Email Address"
          />
          <ErrorMessage name={EMAIL} />
          <button type="submit" disabled={isSubmitting}>
            Subscribe
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CForm;
