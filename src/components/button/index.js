import "./button.scss";
import tpl from "./button.hbs";

export default (id, text) => {
  return tpl({ id, text });
};
