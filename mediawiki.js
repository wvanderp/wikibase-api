var deasync = require("deasync");

var get = require("./query.js").get;
var post = require("./query.js").post;

/**
 * Log in to the Wiki
 * @param username the user to log in as
 * @param password the password to use
 * @param callback
 */
var login = function (username, password, callback) {
    post({
            action: "login",
            lgname: username,
            lgpassword: password
        },
        null,
        function (err, data) {
            if (err) {
                callback(err, null);
            }
            switch (data.login.result) {
                case "Success":
                    callback(null, data.login.lgusername);
                    break;
                case "NeedToken":
                    post({
                            action: "login",
                            lgname: username,
                            lgpassword: password,
                            lgtoken: data.login.token
                        },
                        null,
                        function (err, data) {
                            if (err) {
                                callback(err, null);
                            }
                            if (data.login.result == "Success") {
                                callback(null, data.login.lgusername);
                            } else {
                                callback(data.login.result, null);
                            }
                        }.bind(this));
                    break;
                default:
                    callback(new Error(data.login.result), null);
                    break;
            }
        }.bind(this)
    )
};

/**
 * Logs out of the Wiki
 */
var logout = function () {
    var params = {action: "logout"};

    var done;
    post(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

/**
 * Requests the current user name
 */
var name = function () {
    return userinfo().name
};

// a duplicate reference for tradition's sake
var whoami = name;

/**
 * Requests the current userinfo
 */
var userinfo = function () {
    var params = {action: "query", meta: "userinfo"};

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            throw resp.error.info;
        }

        done = data.query.userinfo;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }

    return done;
};

var getToken = function () {
    var token;
    get({"action": "query", "meta": "tokens"}, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            throw resp.error.info;
        }

        token = resp.query.tokens.csrftoken;
    }.bind(this));

    while (token === undefined) {
        deasync.runLoopOnce();
    }

    return token;
};

//------------------------------------------------------------------------

/**
 * Request the content of page by title
 * @param title the title of the page
 */
var page = function (title) {
    var params = {
        "action": "query",
        "prop": "revisions",
        "rvprop": "timestamp|content",
        "titles": title
    };

    var done;
    get(params, function (err, resp) {
            if (err) {
                throw err;
            }

            if (typeof resp.error != "undefined") {
                console.log(title);
                throw resp.error.info;
            }

            done = resp.query.pages[Object.getOwnPropertyNames(resp.query.pages)[0]].revisions[0]['*'];
        }.bind(this)
    );

    while (done === undefined) {
        deasync.runLoopOnce();
    }

    return done;
};

/**
 * Request the content of page by revision ID
 * @param id the revision ID of the page
 */
var revision = function (id) {
    var params = {
        "action": "query",
        "prop": "revisions",
        "rvprop": "timestamp|content",
        "revids": id
    };

    var done;
    get(params, function (err, resp) {
            if (err) {
                throw err;
            }

            if (typeof resp.error != "undefined") {
                console.log(id);
                throw resp.error.info;
            }

            done = resp.query.pages[Object.getOwnPropertyNames(resp.query.pages)[0]].revisions[0]['*'];
        }.bind(this)
    );

    while (done === undefined) {
        deasync.runLoopOnce();
    }

    return done;
};

/**
 * Request the history of page by title
 * @param title the title of the page
 * @param count how many revisions back to return
 */
var history = function (title, count) {
    var params = {
        action: "query",
        prop: "revisions",
        titles: title,
        rvprop: "timestamp|user|ids|comment|size|tags",
        rvlimit: count
    };

    var done;
    get(params, function (err, resp) {
            if (err) {
                throw err;
            }

            if (typeof resp.error != "undefined") {
                console.log(title, count);
                throw resp.error.info;
            }

            done = resp.query.pages[Object.getOwnPropertyNames(resp.query.pages)[0]].revisions;
        }.bind(this)
    );

    while (done === undefined) {
        deasync.runLoopOnce();
    }

    return done;
};

/**
 * Request the members of a category by category title
 * @param category the title of the category
 */
var category = function (category) {
    var params = {
        action: "query",
        list: "categorymembers",
        cmtitle: category,
        cmlimit: "max",
        cmsort: "sortkey",
        cmdir: "desc"
    };

    var done;
    get(params, function (err, resp) {
            if (err) {
                throw err;
            }

            if (typeof resp.error != "undefined") {
                console.log(category);
                throw resp.error.info;
            }

            done = resp;
        }.bind(this)
    );

    while (done === undefined) {
        deasync.runLoopOnce();
    }

    return done;
};


/**
 * Edits a page on the wiki
 * @param token
 * @param title the title of the page to edit
 * @param text the text to replace the current content with
 * @param summary an edit summary to leave (the bot's byeline will be appended after a space)
 */
var edit = function (token, title, text, summary) {
    var params = {
        action: 'edit',
        title: title,
        text: text,
        summary: summary,
        token: token,
        nocreate: true
    };

    var done;
    get(params, function (err, resp) {
            if (err) {
                throw err;
            }

            if (typeof resp.error != "undefined") {
                console.log(token, title, text, summary);
                throw resp.error.info;
            }

            done = resp;
        }.bind(this)
    );

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

/**
 * Adds a section to a page on the wiki
 * @param token
 * @param title the title of the page to edit
 * @param text the text to replace the current content with
 * @param summary an edit summary to leave (the bot's byeline will be appended after a space)
 */
var add = function (token, title, text, summary) {
    var params = {
        action: 'edit',
        title: title,
        text: text,
        summary: summary,
        token: token
    };

    var done;
    get(params, function (err, resp) {
            if (err) {
                throw err;
            }

            if (typeof resp.error != "undefined") {
                console.log(token, title, text, summary);
                throw resp.error.info;
            }

            done = resp;
        }.bind(this)
    );

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

// EXPORTS

module.exports = {
    "login": login,
    "logout": logout,
    "name": name,
    "userinfo": userinfo,
    "getToken": getToken,
    "page": page,
    "revision": revision,
    "history": history,
    "category": category,
    "edit": edit,
    "add": add
};