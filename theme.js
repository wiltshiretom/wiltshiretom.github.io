function checkToggle(e) {
    e.prop("checked", !0)
}

function writeCookie(e, t, n) {
    var o, r;
    n ? (o = new Date, o.setTime(o.getTime() + 1e3 * 60 * 60 * 24 * n), r = "; expires=" + o.toGMTString()) : r = "", document.cookie = e + "=" + t + r + "; path=/"
}

function readCookie(e) {
    var t, n, o, r = e + "=";
    for (o = document.cookie.split(";"), t = 0; o.length > t; t++) {
        for (n = o[t];
            " " == n.charAt(0);) n = n.substring(1, n.length);
        if (0 == n.indexOf(r)) return n.substring(r.length, n.length)
    }
    return ""
}
jQuery(function(e) {
    function t(t) {
        return e("<div />", {
            "class": t
        })
    }
    if ("/login" == window.location.pathname) {
        var n = "Welcome to Jenkins - CI Server";
        e("#main-panel"), e("#side-panel");
        var o = e('input[name="j_username"]').closest("td").prev("td").addClass("input-label"),
            r = e('input[name="j_password"]').closest("td").prev("td").addClass("input-label");
        e("a[href=signup]").closest("div").addClass("signup-container"), e("#yui-gen1-button").addClass("login-button");
        var i = e(".submit-button"),
            a = e("#main-panel div:first").addClass("login-container"),
            c = e('form[name="login"]').length;
        c && (o.text("Username"), r.text("Password"), a.removeAttr("style"), a.wrap(t("login-outer")), a.wrap(t("login-wrapper").prepend(" <h2> " + n + " </h2> ")), i.wrap(t("button-wrapper")), e(".login-container div:last").removeAttr("style"))
    }
}), jQuery(function(e) {
    var t = '<div class="toggle"></div><input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox"><label for="cmn-toggle-7" data-on="Hide" data-off="Show"></label>';
    e("#description-link").text("Edit"), e("#description").before(t), "checked" != readCookie("toggle") ? e("#description").hide() : (checkToggle(e(".cmn-toggle")), e("#description").show()), e(".cmn-toggle").change(function() {
        e("#description").slideToggle("fast"), e(".cmn-toggle").is(":checked") ? writeCookie("toggle", "checked", 30) : writeCookie("toggle", "unchecked", 30)
    })
}), jQuery(function() {
    function e(e) {
        var t = jQuery(e.target),
            n = t.attr("name"),
            r = t.attr("value"),
            i = t.is(":checked");
        "on" === r && (i = !1), document.cookie = n + "=" + o(r + i)
    }

    function t(e) {
        var t = jQuery(e.target),
            r = t.attr("name"),
            i = t.attr("value"),
            a = t.is(":checked");
        return n(r) === o(i + a) ? !0 : !1
    }

    function n(e) {
        var t, n, o, r = e + "=";
        for (o = document.cookie.split(";"), t = 0; o.length > t; t++) {
            for (n = o[t];
                " " == n.charAt(0);) n = n.substring(1, n.length);
            if (0 == n.indexOf(r)) return n.substring(r.length, n.length)
        }
        return ""
    }

    function o(e) {
        for (var t = e.length, n = [], o = 0; t > o; o++) {
            var r = e[o].charCodeAt().toString(2);
            n.push(Array(8 - r.length + 1).join("0") + r)
        }
        return n.join(" ")
    }
    var r = "#dfd",
        i = "#fff";
    jQuery('.setting-input, input[type="checkbox"]').one("click", function(t) {
        e(t)
    }), jQuery(".setting-input").on("input propertychange paste", function(e) {
        t(e) ? jQuery(e.target).css("background-color", i) : jQuery(e.target).css("background-color", r)
    }), jQuery('input[type="checkbox"]').change(function(e) {
        t(e) ? jQuery(e.target.parentNode).css("background-color", i) : jQuery(e.target.parentNode).css("background-color", r)
    })
});