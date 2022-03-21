(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navbar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"navbar-nav\" id=\"navbarlinks\">\n              <a\n                class=\"nav-link active\"\n                aria-current=\"page\"\n                href="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"ref") : depth0), depth0))
    + "\n              >"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"link") : depth0), depth0))
    + "</a>\n            </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button\n          type=\"button\"\n          class=\"btn btn-primary main-btn\"\n          id="
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "\n        >"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container-fluid\">\n  <h1><a href=\"../index.html\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"Ntitle") || (depth0 != null ? lookupProperty(depth0,"Ntitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"Ntitle","hash":{},"data":data,"loc":{"start":{"line":2,"column":30},"end":{"line":2,"column":40}}}) : helper)))
    + "</a></h1>\n  <div class=\"row\" id=\"links\">\n    <section class=\"col-sm-4 d-flex justify-content-sm-start\">\n      <nav class=\"navbar navbar-expand-lg navbar-light\">\n        <button\n          class=\"navbar-toggler\"\n          type=\"button\"\n          data-bs-toggle=\"collapse\"\n          data-bs-target=\"#navbarNavAltMarkup\"\n          aria-controls=\"navbarNavAltMarkup\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\"\n        >\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"links") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":26,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n      </nav>\n    </section>\n\n    <section class=\"col-sm-8 d-flex justify-content-sm-end\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"extras") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":15}}})) != null ? stack1 : "")
    + "    </section>\n    <section id=\"subscribeForm\" class=\"inputForms\">\n      <form>\n        <input\n          id=\"email\"\n          type=\"text\"\n          name=\"email\"\n          placeholder=\"Please enter your email address here\"\n        />\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary inputBtn\"\n          id=\"emailButton\"\n        >Subscribe</button>\n      </form>\n    </section>\n    <section id=\"recommendForm\" class=\"inputForms\">\n      <form>\n        <input name=\"author\" type=\"text\" placeholder=\"Author\" id=\"author\" />\n        <input name=\"book\" type=\"text\" placeholder=\"Book\" id=\"book\" />\n        <button\n          id=\"recommendButton\"\n          type=\"submit\"\n          class=\"btn btn-primary inputBtn\"\n        >Submit</button>\n      </form>\n    </section>\n  </div>\n</div>";
},"useData":true});
})();