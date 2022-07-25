import tpl from "./login.hbs";
import "./login.scss";
import button from "../../components/button";
import { filelds } from "./login";
import form from "../../components/form";

export default tpl({
	authButton: button("auth", "Авторизоваться"),
	form: form(filelds),
});
