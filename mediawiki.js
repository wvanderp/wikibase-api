var deasync = require("deasync");


//block
var block = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//changeauthenticationdata
var changeauthenticationdata = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//checktoken
var checktoken = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//clearhasmsg
var clearhasmsg = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//clientlogin
var clientlogin = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//compare
var compare = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//createaccount
var createaccount = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//cspreport
var cspreport = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//delete
var delete = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//edit
var edit = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//emailuser
var emailuser = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//expandtemplates
var expandtemplates = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//feedcontributions
var feedcontributions = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//feedrecentchanges
var feedrecentchanges = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//feedwatchlist
var feedwatchlist = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//filerevert
var filerevert = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//help
var help = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//imagerotate
var imagerotate = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//import
var import = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//linkaccount
var linkaccount = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//login
var login = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//logout
var logout = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//managetags
var managetags = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//mergehistory
var mergehistory = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//move
var move = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//opensearch
var opensearch = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//options
var options = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//paraminfo
var paraminfo = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//parse
var parse = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//patrol
var patrol = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//protect
var protect = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//purge
var purge = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//query
var query = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//removeauthenticationdata
var removeauthenticationdata = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//resetpassword
var resetpassword = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//revisiondelete
var revisiondelete = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//rollback
var rollback = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//rsd
var rsd = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//setnotificationtimestamp
var setnotificationtimestamp = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//stashedit
var stashedit = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//tag
var tag = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//tokens
var tokens = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//unblock
var unblock = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//undelete
var undelete = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//unlinkaccount
var unlinkaccount = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//upload
var upload = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//userrights
var userrights = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

//watch
var watch = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

    entity = entity.toUpperCase();

    var params = {
        "action": "wbsetqualifier",
        "claim": claimId,
        "property": property,
        "value": value,
        "snaktype": snaktype,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, property, value, snaktype);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};
