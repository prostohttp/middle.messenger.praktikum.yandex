import tpl from "./profileData.hbs";
import avatar from "../../../components/avatar";
import button from "../../../components/button";
import * as profile from "../../../../static/assets/Union.svg";
import * as backIcon from "../../../../static/assets/back-icon.svg";
import "./profileData.scss";
import { profileData } from "./profileData.js";
import form from "../../../components/form";

export default tpl({
	avatar: avatar(profile),
	form: form(profileData),
	button: button("save-data", "Сохранить"),
	backIcon,
});
