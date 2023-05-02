class CookieManager {
    static setCookie(name, value, timeSec) {
        var expires = "";
        if (timeSec) {
            var date = new Date();
            date.setTime(date.getTime() + (timeSec * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    static getCookie(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return null;
    }
}

export default CookieManager;