import * as yup from 'yup';

export const clientManagerValidationSchema = yup.object().shape({
  client_portfolio: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
