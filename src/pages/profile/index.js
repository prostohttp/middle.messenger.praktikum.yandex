import tpl from "./profile.hbs";
import avatar from "../../components/avatar";
import * as profile from "../../../static/assets/Union.svg";
import * as backIcon from "../../../static/assets/back-icon.svg";
import "./profile.scss";
import { accoutFields } from "./profile";
import form from "../../components/form";


export default tpl({
  avatar: avatar(profile, "Михаил"),
  form: form(accoutFields),
  backIcon,
});
