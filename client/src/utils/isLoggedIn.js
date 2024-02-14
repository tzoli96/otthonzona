import Cookies from "js-cookie";

function isLoggedIn () {
    return !!Cookies.get("_auth");
}

export default isLoggedIn;
