(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['articles'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 id=\"authorbook\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"authorbook") || (depth0 != null ? lookupProperty(depth0,"authorbook") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authorbook","hash":{},"data":data,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":34}}}) : helper)))
    + "</h1>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <article class=\"col\" id=\"articleContent\">\n      "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n    </article>\n  </div>\n</div>";
},"useData":true});
})();