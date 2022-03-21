(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['articles'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 id=\"authorbook\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"authorbook") || (depth0 != null ? lookupProperty(depth0,"authorbook") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"authorbook","hash":{},"data":data,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":34}}}) : helper)))
    + "</h1>\n<div class=\"container-fluid\">\n  <article class=\"row\">\n    <div class=\"col\" id=\"articleContent\">\n\n    </div>\n  </article>\n</div>";
},"useData":true});
})();