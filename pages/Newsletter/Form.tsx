import { Formik, Form, Field } from 'formik';
import Button from '@material-ui/core/Button';
import { EMAIL, VALIDATION_SCHEMA } from './constant';
import { postNewsletterApi } from 'lib/api';
import { TextFieldFormik } from 'components/Form';

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
            inputProps={{
              'aria-label': 'subscribe-email',
            }}
            placeholder="Email Address"
            variant="outlined"
            component={TextFieldFormik}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Subscribe
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CForm;
