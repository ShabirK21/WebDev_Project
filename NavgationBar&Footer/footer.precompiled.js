(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <img id='sml' src="
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " class='img-fluid' />\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='container-fluid'>\n  <div class='row'>\n    <section class='col-sm-4'>\n      <p class='fc1'>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":21},"end":{"line":4,"column":30}}}) : helper)))
    + "</p>\n    </section>\n    <section class='col-sm-4'>\n      <p class='fc1'>"
    + alias4(((helper = (helper = lookupProperty(helpers,"address") || (depth0 != null ? lookupProperty(depth0,"address") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"address","hash":{},"data":data,"loc":{"start":{"line":7,"column":21},"end":{"line":7,"column":32}}}) : helper)))
    + "</p>\n    </section>\n    <section class='col-sm-4'>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sml_images") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":12,"column":15}}})) != null ? stack1 : "")
    + "    </section>\n  </div>\n  <button onclick='topFunction()' id='scrollBtn' title='Go to top'>Top</button>\n</div>";
},"useData":true});
})();