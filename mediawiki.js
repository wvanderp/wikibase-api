var deasync = require("deasync");

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



//delete
var deletePage = function (token, claimId, property, value, snaktype) {
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