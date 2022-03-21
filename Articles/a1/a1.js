articlesT = Handlebars.templates.articles;
articlesD = {
  authorbook: "Haruki Murakami | Norwegian Wood",
};

$(document).ready(() => {
  $.get(
    "https://www.theguardian.com/books/2018/oct/11/haruki-murakami-interview-killing-commendatore",
    (data) => {
      var content = $(data).find("#maincontent").text();
      var result = content.replace(/\./g, ". <br><br>");
      $("#articleContent").html(result);
    }
  );
});

document.getElementById("maincontent").innerHTML = articlesT(articlesD);
