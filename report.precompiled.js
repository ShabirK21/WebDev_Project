(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['report'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container-fluid\">\n    <header class=\"row\">\n     <div class=\"col\">\n      <h1>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"maint") || (depth0 != null ? lookupProperty(depth0,"maint") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maint","hash":{},"data":data,"loc":{"start":{"line":4,"column":10},"end":{"line":4,"column":21}}}) : helper))) != null ? stack1 : "")
    + "</h1>\n     </div>\n    </header>\n    <article class=\"row\">\n        <div class=\"col\">\n            <h2>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"secondaryt") || (depth0 != null ? lookupProperty(depth0,"secondaryt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondaryt","hash":{},"data":data,"loc":{"start":{"line":9,"column":16},"end":{"line":9,"column":30}}}) : helper)))
    + "</h2>\n            <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":10,"column":15},"end":{"line":10,"column":28}}}) : helper))) != null ? stack1 : "")
    + "</p>\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"appendices") || (depth0 != null ? lookupProperty(depth0,"appendices") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"appendices","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n            <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"bibliography") || (depth0 != null ? lookupProperty(depth0,"bibliography") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bibliography","hash":{},"data":data,"loc":{"start":{"line":12,"column":15},"end":{"line":12,"column":33}}}) : helper))) != null ? stack1 : "")
    + "</p>\n        </div>\n    </article>\n</div>";
},"useData":true});
})();