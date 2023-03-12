export const getAuthorNames = (list, ids) => {
	const authors = list.filter((author) => ids.includes(author.id));
	return authors.map((author) => author.name).join(', ');
};
