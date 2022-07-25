import tpl from "./input.hbs";

export default (label, type, name, value = undefined, disabled = null) => {
	return tpl({ label, type, name, value, disabled });
};
