const indexT = Handlebars.templates.index;
const indexD = {
  Ptitle: "Newsletter",
  books: [
    {
      title: "Norwegian Wood",
      author: "Haruki Murakami",
      img: "./Assets/HM.jpg",
      content:
        "Join Haruki Murakami as he discusses his award winning novel, Norwegian Wood.",
      link: "./Articles/a1/a1.html",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      img: "./Assets/JRR.jpg",
      content:
        "Find out how renown write J.R.R Tolkien, The Hobbit",
      link: "./Articles/a2/a2.html",
    },
    {
      title: "When Breath Becomes Air",
      author: "Paul Kalanithi",
      img: "./Assets/PK.jpg",
      content:
        "Keeping Dr.Paul Kalanithi's Voice Alive, Lucy Kalanithi talks about her husband's life ",
      link: "./Articles/a3/a3.html",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      img: "./Assets/PC.jpg",
      content:
        "Over 35 million copies sold, Paulo Coelho discusses his sleeper hit, The Alchemist",
      link: "./Articles/a4/a4.html",
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      img: "./Assets/KH.jpg",
      content:
        "Written in the early mornings before work as a doctor, Khaled Hosseini talks about his journey writing The Kite Runner",
      link: "./Articles/a5/a5.html",
    },
  ],
};

document.getElementById("maincontent").innerHTML = indexT(indexD);
