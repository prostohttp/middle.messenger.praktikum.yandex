import tpl from "./profilePassword.hbs";
import avatar from "../../../components/avatar";
import button from "../../../components/button";
import * as profile from "../../../../static/assets/Union.svg";
import * as backIcon from "../../../../static/assets/back-icon.svg";
import "./profilePassword.scss";
import { passwordFields } from "./profilePassword.js";
import form from "../../../components/form";

export default tpl({
	avatar: avatar(profile),
	form: form(passwordFields),
	button: button("save-data", "Сохранить"),
	backIcon,
});
