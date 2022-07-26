import tpl from "./register.hbs";
import "./register.scss";
import button from "../../components/button";
import { filelds } from "./register";
import form from "../../components/form";

export default tpl({
	registerButton: button("register", "Зарегистрироваться"),
	form: form(filelds),
});
