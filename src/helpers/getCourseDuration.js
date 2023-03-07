export const convertDuration = (minutes) => {
	const date = new Date(0);
	date.setMinutes(minutes);
	const timeString = date.toISOString().substring(11, 16);
	const hours = Number(timeString.split(':')[0]) > 1 ? 'hours' : 'hour';

	return `${timeString} ${hours}`;
};
