import jwtDecode from "jwt-decode";

export default creds => {
	const decodedToken = jwtDecode(creds.idToken);
	localStorage.setItem("token", creds.idToken);
	localStorage.setItem("tokenExp", decodedToken.exp);
	localStorage.setItem("userId", creds.localId);
};
