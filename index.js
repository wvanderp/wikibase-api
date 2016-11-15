//internal require
var settings = require("./settings.js");
var wikibase = require("./wikibase.js");
var query = require("./query.js").get;
var mediawiki = require("./mediawiki.js");

module.exports = {
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

    referencesGen: wikibase.referencesGen,
    snakTypes: wikibase.snakTypes,
    snakGenerator: wikibase.snakGenerator,
    valueTypes: wikibase.valueTypes,

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