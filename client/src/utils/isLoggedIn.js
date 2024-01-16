import Cookies from "js-cookie";

function isLoggedIn () {
    return !!Cookies.get("token");
}

export default isLoggedIn;
