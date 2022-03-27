const reportT = Handlebars.templates.report;
const reportD = {
    maint: "Individual Project Report",
    secondaryt: "Introduction",
    content: "I created a book club newsletter, it tell's the story of the authors, being read by the club and how they came to write their books.<br><br>" +
    "I read a lot of books and recently started reading; The Kite Runner, by Khaled Hosseini. This inspired me to create a book club newsletter, as a way to inspire more people to read books and tell the stories of the authors that is not usually actively searched by the readers.<br>Another inspiration, was the Guardian Book club Newsletter, the newsletter provides subscribers with content on authors, books and cultural content. I found it to be a great way to obtain information on new books that I can read, find out how authors got inspired to write. "
}

document.getElementById("maincontent").innerHTML = reportT(reportD);