import { Formik, Form, Field } from 'formik';
import { EMAIL } from './constant';
import { postSubscribeEmail } from 'lib/api';

interface Props {}

const CForm: React.FC<Props> = () => {
  return (
    <Formik
      enableReinitialize
      initialValues={{ [EMAIL]: '' }}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        const { res } = await postSubscribeEmail(values[EMAIL]);
        if (res) {
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
          <button type="submit" disabled={isSubmitting}>
            Subscribe
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CForm;
