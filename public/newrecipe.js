(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['blankpost'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='post'>\r\n    <img src=\""
    + alias4(((helper = (helper = helpers.imgurl || (depth0 != null ? depth0.imgurl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imgurl","hash":{},"data":data,"loc":{"start":{"line":2,"column":14},"end":{"line":2,"column":24}}}) : helper)))
    + "\" id='img'>\r\n    <h1 id='title'>Title : "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":36}}}) : helper)))
    + "</h1>\r\n    <h2 id='user'>User : "
    + alias4(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user","hash":{},"data":data,"loc":{"start":{"line":4,"column":25},"end":{"line":4,"column":33}}}) : helper)))
    + "</h2>\r\n    <p id='ingredients'>Ingredients : "
    + alias4(((helper = (helper = helpers.ingredients || (depth0 != null ? depth0.ingredients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredients","hash":{},"data":data,"loc":{"start":{"line":5,"column":38},"end":{"line":5,"column":53}}}) : helper)))
    + "</p>\r\n    <p id='recipe'>Recipe : "
    + alias4(((helper = (helper = helpers.recipe || (depth0 != null ? depth0.recipe : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recipe","hash":{},"data":data,"loc":{"start":{"line":6,"column":28},"end":{"line":6,"column":38}}}) : helper)))
    + "</p>\r\n    <p id='commentary'>Commentary : "
    + alias4(((helper = (helper = helpers.commentary || (depth0 != null ? depth0.commentary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentary","hash":{},"data":data,"loc":{"start":{"line":7,"column":36},"end":{"line":7,"column":50}}}) : helper)))
    + "</p>\r\n    <button class='like' id='like'>Like this Recipe! "
    + alias4(((helper = (helper = helpers.likes || (depth0 != null ? depth0.likes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"likes","hash":{},"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":62}}}) : helper)))
    + " likes!</button>\r\n</div>";
},"useData":true});
})();