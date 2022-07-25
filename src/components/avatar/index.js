import tpl from "./avatar.hbs";
import "./avatar.scss";

export default (image, login = undefined) => {
	return tpl({ image, login });
};
