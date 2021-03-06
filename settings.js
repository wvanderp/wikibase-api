var pjson = require("./package.json");

var version = pjson.version;
var homepage = "";

module.exports = {
    "version": version,
    homepage: homepage,
    endpoint: "http://en.wikipedia.org:80/w/api.php",
    userAgent: function(){return "wikiBase-api/" + version + "; Node/" + process.version + "; <" + homepage + ">"}(),
    byeline: "(using the MediaWiki module for Node.js)"
};
