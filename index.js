//internal require
var settings = require("./settings.js");
var wikibase = require("./wikibase.js");
var query = require("./query.js").get;
var mediawiki = require("./mediawiki.js");

var parts = {
    //settings
    version: settings.version,
    settings: settings,

    //query
    get: query.get,
    post: query.post,

    //wikibase
    getClaims: wikibase.getClaims,
    newItem: wikibase.newItem,
    setLabel: wikibase.setLabel,
    setDescription: wikibase.setDescription,
    addAliases: wikibase.addAliases,
    addClaim: wikibase.addClaim,
    removeClaim: wikibase.removeClaim,
    setQualifier: wikibase.setQualifier,
    removeQualifiers: wikibase.removeQualifiers,
    setReference: wikibase.setReference,
    removeReferences: wikibase.removeReferences,

    valueTypes: wikibase.valueTypes,
    snakGenerator: wikibase.snakGenerator,
    snakTypes: wikibase.snakTypes,
    referencesGen: wikibase.referencesGen,

    vt: wikibase.valueTypes,
    sg: wikibase.snakGenerator,
    st: wikibase.snakTypes,
    rg: wikibase.referencesGen,

    //wikimedia
    "login": mediawiki.login,
    "logout": mediawiki.logout,
    "name": mediawiki.name,
    "userinfo": mediawiki.userinfo,
    "getToken": mediawiki.getToken,
    "page": mediawiki.page,
    "revision": mediawiki.revision,
    "history": mediawiki.history,
    "category": mediawiki.category,
    "edit": mediawiki.edit,
    "add": mediawiki.add
};

module.exports = function(endpoint, userAgent, homepage){

    settings.endpoint = endpoint;

    if (typeof userAgent !== "undefined"){
        settings.userAgent = userAgent;
    }

    if (typeof homepage !== "undefined"){
        settings.homepage = homepage;
    }


    return parts
};

