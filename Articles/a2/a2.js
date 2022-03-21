articlesT = Handlebars.templates.articles;
articlesD = {
  authorbook: "J.R.R Tolkien | The Hobbit",
};

$(document).ready(() => {
  $.get("http://tolkiengateway.net/wiki/1964_BBC_Interview", (data) => {
    var content = $(data).find("#mainContent").text();
    var result = content.replace(/\./g, ". <br>");
    $("#articleContent").html(result);
  });
});

document.getElementById("maincontent").innerHTML = articlesT(articlesD);
