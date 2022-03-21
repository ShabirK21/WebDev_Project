articlesT = Handlebars.templates.articles;
articlesD = {
  authorbook: "Paul Kalanithi | When Breath Becomes Air",
};

document.getElementById("maincontent").innerHTML = articlesT(articlesD);
