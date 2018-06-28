const validate = (values) => {
	const errors = {};

	if (!values.name || values.name.length > 10) errors.name = true;
	if (!values.password || values.password.length < 6) errors.password = true;
	if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = true;
	if (!values.adress || values.adress.length > 10) errors.adress = true;
	if (!values.deliveryMethod) errors.deliveryMethod = true;

	return errors;
};

export default validate;
