articlesT = Handlebars.templates.articles;
articlesD = {
  authorbook: "Khaled Hosseini | The Kite Runner",
};

$(document).ready(() => {
  $.get(
    "https://www.theguardian.com/books/2013/jun/01/khaled-hosseini-kite-runner-interview",
    (data) => {
      var content = $(data).find("#maincontent").text();
      var result = content.replace(/\./g, ".<br>");
      $("#articleContent").html(result);
    }
  );
});

document.getElementById("maincontent").innerHTML = articlesT(articlesD);
