articlesT = Handlebars.templates.articles;
articlesD = {
  authorbook: "Paulo Coelho | The Alchemist",
};

document.getElementById("maincontent").innerHTML = articlesT(articlesD);
