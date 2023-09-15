import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  purchase_history: yup.string().required(),
  last_purchase_date: yup.date().required(),
  total_spent: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
