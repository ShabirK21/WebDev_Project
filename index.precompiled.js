(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <a href="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"link") : depth0), depth0))
    + " id=\"articleLinks\">\n      <div class=\"row\" id=\"articleCon\">\n        <article class=\"col-sm-6\">\n          <h2>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"author") : depth0), depth0))
    + "</h2>\n          <h3>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</h3>\n          <p>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"content") : depth0), depth0))
    + "</p>\n        </article>\n        <figure class=\"col-sm-6\" id=\"authorImgs\">\n          <img src="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"img") : depth0), depth0))
    + " alt="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + " />\n        </figure>\n      </div>\n    </a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"Ptitle") || (depth0 != null ? lookupProperty(depth0,"Ptitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"Ptitle","hash":{},"data":data,"loc":{"start":{"line":1,"column":4},"end":{"line":1,"column":14}}}) : helper)))
    + "</h1>\n<div class=\"container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"books") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":16,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();