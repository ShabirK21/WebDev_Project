const navbarT = Handlebars.templates.navbar;
const navbarD = {
  Ntitle: "Book Club",
  links: [
    {
      link: "Home",
      ref: "../../../index.html",
    },
    {
      link: "Find Us",
      ref: "#footer",
    },
  ],
  extras: [
    { name: "Subscribe", id: "subscribe" },
    { name: "Recommend a book", id: "recommend" },
  ],
};

const footerT = Handlebars.templates.footer;
const footerD = {
  title: "Book Club",
  address: "123 Book Street, Book City",
  sml_images: [
    "../../Assets/facebook.png",
    "../../Assets/twitter.png",
    "../../Assets/instagram.png",
  ],
};

// jQuery for subscription & recommendation forms
$(document).ready(() => {
  $("#subscribe").click(() => {
    $("#subscribeForm").slideToggle();
    $("#recommendForm").hide();
  });
  $("#recommend").click(() => {
    $("#recommendForm").slideToggle();
    $("#subscribeForm").hide();
  });
  $("#emailButton").click(() => {
    const email = $("#email").val();
    ValidateEmail(email);
  });
  $("#recommendButton").click(() => {
    const author = $("#author").val();
    const book = $("#book").val();
    recommend(author, book);
  });
});

// Email validation
function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return alert(
      "Thank you for subscribing!, you're on way to a world of knowledge!"
    );
  } else {
    return alert("You have entered an invalid email address!");
  }
}

// Recommendation form
function recommend(author, book) {
  if (author == "" || book == "") {
    alert("Please fill in the form!");
  } else {
    alert(
      "Thank you for recommending! We will add your book to our list of books to be read!"
    );
  }
}

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("navigationbar").innerHTML = navbarT(navbarD);
document.getElementById("footer").innerHTML = footerT(footerD);
