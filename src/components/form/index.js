import tpl from "./form.hbs";
import input from "../input";

export default (props = {}) => {
	const inputs = [];
	for (const { label, type, name, value, disabled } of Object.values(props)) {
		inputs.push(input(label, type, name, value, disabled));
	}
	return tpl({
		inputs,
	});
};
