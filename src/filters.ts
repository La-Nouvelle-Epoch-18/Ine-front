import { format } from 'date-fns';

export const formatDate = (value: string): string =>
  format(value, 'DD MMMM YYYY HH:mm:ss');
