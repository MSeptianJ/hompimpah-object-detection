const dateFormater = (date) => {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	return date?.toLocaleDateString('id-ID', options);
};

export default dateFormater;
