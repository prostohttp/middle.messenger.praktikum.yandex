import "../src/styles/global.scss";
import Page404 from "../src/pages/404";
import Page500 from "../src/pages/500";
import Login from "../src/pages/login";
import Register from "../src/pages/register";
import Start from "../src/pages/start";
import Profile from "../src/pages/profile";
import Chat from "../src/pages/chat/chat";
import ProfileData from "../src/pages/profile/profileData";
import ProfilePassword from "../src/pages/profile/profilePassword";

const main = document.querySelector("#app");

const routes = {
	"/404": Page404,
	"/500": Page500,
	"/": Start,
	"/login": Login,
	"/register": Register,
	"/profile": Profile,
	"/profile/data": ProfileData,
	"/profile/password": ProfilePassword,
	"/chat": Chat,
	"/profile/exit": Start,
};

window.addEventListener("load", () => {
	const path = window.location.pathname;
	const finded = Object.keys(routes).find((el) => el === path);
	if (finded) {
		main.innerHTML = routes[path];
	} else {
		main.innerHTML = Page404;
	}
});
