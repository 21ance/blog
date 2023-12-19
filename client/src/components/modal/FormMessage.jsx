const FormMessage = (props) => {
	const { object, objectProperty } = props;

	if (Object.prototype.hasOwnProperty.call(object, objectProperty))
		return (
			<small className="text-sm text-red-500 text-center">
				{object[objectProperty]}
			</small>
		);
};

export default FormMessage;
