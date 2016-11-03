//internal require
var settings = require("./settings.js");
var wikibase = require("./wikibase.js");
var query = require("./query.js").get;
//var mediawiki = require("./mediawiki.js");

module.exports = {
    version: settings.version,
    settings: settings,
    get: query.get,
    post: query.post,
    login: wikibase.login,
    logout: wikibase.logout,
    name: wikibase.name,
    whoami: wikibase.whoami,
    userinfo: wikibase.userinfo,
    getToken: wikibase.getToken,

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
    rg: wikibase.referencesGen
};
