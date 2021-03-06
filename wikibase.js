var deasync = require("deasync");
var moment = require('moment');

var get = require("./query.js").get;
var post = require("./query.js").post;

var newItem = function (token) {
    var params = {
        "action": "wbeditentity",
        "new": "item",
        "data": "{}",
        "format": "json",
        "token": token
    };

    var id;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            throw resp.error.info;
        }

        id = resp.entity.id
    }.bind(this));

    while (id === undefined) {
        deasync.runLoopOnce();
    }

    return id;
};

var setLabel = function (token, id, value, language) {
    if (typeof language == "undefined") {
        language = "en"
    }

    var params = {
        "action": "wbsetlabel",
        "id": id,
        "language": language,
        "value": value,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, id, language, value);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};


var setDescription = function (token, id, value, language) {
    if (typeof language == "undefined") {
        language = "en"
    }

    var params = {
        "action": "wbsetdescription",
        "id": id,
        "language": language,
        "value": value,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, id, language, value);
            throw resp.error.info;
        }


        done = true
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};


var addAliases = function (token, id, value, language) {
    if (typeof language == "undefined") {
        language = "en"
    }



    var params = {
        "action": "wbsetaliases",
        "language": language,
        "id": id,
        "add": value,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, id, language, value);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (id === undefined) {
        deasync.runLoopOnce();
    }
};


var getClaims = function (id) {
    var params = {
        "action": "wbgetclaims",
        "entity": id
    };

    var claims;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(id);
            throw resp.error.info;
        }

        claims = resp.claims
    }.bind(this));

    while (claims === undefined) {
        deasync.runLoopOnce();
    }

    return claims;
};


var addClaim = function (token, entity, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }


    var params = {
        "action": "wbcreateclaim",
        "entity": entity,
        "property": property,
        "snaktype": snaktype,
        "token": token
    };

    if (snaktype != snaktype.novalue) {
        params["value"] = value
    }

    var claimId;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, entity, property, value);
            throw resp.error.info;
        }

        claimId = resp.claim.id

    }.bind(this));

    while (claimId === undefined) {
        deasync.runLoopOnce();
    }

    return claimId;
};


var removeClaim = function (token, claimId) {
    var params = {
        "action": "wbremoveclaims",
        "claim": claimId,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};


var setQualifier = function (token, claimId, property, value, snaktype) {
    if (typeof snaktype == "undefined") {
        snaktype = "value"
    }

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


var removeQualifiers = function (token, claimId, qualifierId) {
    var params = {
        "action": "wbremovequalifiers",
        "claim": claimId,
        "qualifiers": qualifierId,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, qualifierId);
            throw resp.error.info;
        }


        done = true;
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};


var setReference = function (token, claimId, snaks) {
    claimId = claimId.toUpperCase();

    var params = {
        "action": "wbsetreference",
        "statement": claimId,
        "snaks": snaks,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, snaks);
            throw resp.error.info;
        }


        done = true
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};


var removeReferences = function (token, claimId, referenceId) {
    claimId = claimId.toUpperCase();

    var params = {
        "action": "wbremovereferences",
        "statement": claimId,
        "references": referenceId,
        "token": token
    };

    var done;
    get(params, function (err, resp) {
        if (err) {
            throw err;
        }

        if (typeof resp.error != "undefined") {
            console.log(token, claimId, referenceId);
            throw resp.error.info;
        }


        done = true
    }.bind(this));

    while (done === undefined) {
        deasync.runLoopOnce();
    }
};

var snakGenerator = function (type, value) {

    switch (type) {
        case "string":
            value = value + '';
            value = value.replace(/"/g, '\\"');
            return "\"" + value + "\"";
            break;
        case "item":
            value = value.toLowerCase();
            value = value.replace("q", "");
            return '{"entity-type":"item","numeric-id":' + value + '}';
            break;
        case "coordinate":
            //TODO: no need for corinates jet
            //Statements executed when the result of expression matches value
            break;
        case "time":
            //TODO: date time doesn't work

            if (isNaN(date)) {
                throw "not a good date"
            }


            return '{ ' +
                '"time": "+' + date.toISOString() + '",' +
                    //        '"time":"+00000002010-01-02T00:00:00Z",'+
                '"timezone":0,' +
                '"before":0,' +
                '"after":0,' +
                '"precision":11,' +
                '"calendarmodel":"http://www.wikidata.org/entity/Q1985727"' +
                '}';
            break;
        case "quantity":
            return "[" + value + "]";
            break;
        case "url":
            if (value.indexOf("http://") == -1 && value.indexOf("https://") == -1) {
                value = "http://" + value
            }
            return "\"" + encodeURI(value) + "\"";
            break;
        default:
            throw "unknown snak type";
            break;
    }
};

var referencesGen = function (type, property, value) {
    switch (type) {
        case "string":
            return "\"" + value + "\"";
            break;
        case "item":
            property = property.toUpperCase();

            var bigval = value.toUpperCase();
            value = value.toLowerCase().replace("q", "");

            return JSON.stringify({
                property: [
                    {
                        "snaktype": "value",
                        "property": property,
                        "datavalue": {
                            "value": {
                                "entity-type": "item",
                                "numeric-id": value,
                                "id": bigval
                            },
                            "type": "wikibase-entityid"
                        },
                        "datatype": "wikibase-item"
                    }
                ]
            });

            break;
        case "coordinate":
            //TODO:
            break;
        case "time":
            return {
                property: [
                    {
                        "mainsnak": {
                            "snaktype": "value",
                            "property": property,
                            "datavalue": {
                                "value": {
                                    "time": value,
                                    "timezone": 0,
                                    "before": 0,
                                    "after": 0,
                                    "precision": 9,
                                    "calendarmodel": "http://www.wikidata.org/entity/Q1985727"
                                },
                                "type": "time"
                            },
                            "datatype": "time"
                        },
                        "type": "statement",
                        "id": "Q32$6753582b-4910-9c03-7375-be8b91403391",
                        "rank": "normal"
                    }
                ]
            };
            break;
        case "quantity":
            return {
                property: [
                    {
                        "mainsnak": {
                            "snaktype": "value",
                            "property": property,
                            "datavalue": {
                                "value": value,
                                "type": "string"
                            },
                            "datatype": "string"
                        },
                        "type": "statement",
                        "id": "Q32$74379D79-2B96-464B-8326-A4C4693983A5",
                        "rank": "normal"
                    }
                ]
            };
            break;
        default:
            throw "unknown snak type";
            break;
    }
};

var valueTypes = {
    "value": "value",
    "novalue": "novalue",
    "somevalue": "somevalue"
};

var snakTypes = {
    "string": "string",
    "item": "item",
    "coordinate": "coordinate",
    "time": "time",
    "date": "time",
    "quantity": "quantity",
    "url": "url"
};

module.exports = {
    getClaims: getClaims,
    newItem: newItem,
    setLabel: setLabel,
    setDescription: setDescription,
    addAliases: addAliases,
    addClaim: addClaim,
    removeClaim: removeClaim,
    setQualifier: setQualifier,
    removeQualifiers: removeQualifiers,
    setReference: setReference,
    removeReferences: removeReferences,

    referencesGen: referencesGen,
    snakTypes: snakTypes,
    snakGenerator: snakGenerator,
    valueTypes: valueTypes,

    vt: valueTypes,
    sg: snakGenerator,
    st: snakTypes,
    rg: referencesGen
};