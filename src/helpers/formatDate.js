import { format } from 'date-fns';

export const formatDate = (date, delimeter = '.') => {
	return format(new Date(date), 'dd.MM.yyyy');
};
