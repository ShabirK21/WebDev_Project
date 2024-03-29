// Using compiled handlebars template
articlesT = Handlebars.templates.articles;
articlesD = {
  authorbook: 'Paulo Coelho | The Alchemist',
  // Content retrieved from https://www.oprah.com/inspiration/oprah-talks-to-the-alchemist-author-paulo-coelho/all
  content:
    "<span id=quote>Paulo Coelho: 'Live truly and forgive quickly.'</span>" +
    "<figure id='hmimg'><img src=../../Assets/pc-2.jpg 2040w/></figure>" +
    "<p>The author of one of the most popular books in this or any language, Paulo Coelho has lived the mythic journey of self-discovery he fictionalized in The Alchemist, one of <b>OPRAH</b>'s favorite spiritual guides. Now he opens up about dreams, destiny and the only thing he believes will ever make us happy.</p>" +
    "<p> Believe it or not, it was Madonna who first introduced me to The Alchemist  in 1996. She told me during a taping of  that it was her favorite book—really, she went on and on about it. I thought, 'Well, I've got to read the book that changed Madonna's life.' So I did, and I've been dying to interview its author, Paulo Coelho, ever since. </p>" +
    "<p>The Alchemist  is the story of a young Andalusian shepherd who, after dreaming about finding a treasure in the pyramids of Egypt, sells off his flock and embarks on a journey of courage and intuition that is a stand-in for all our journeys. The book touched me so deeply that I ended up passing it on to everyone I know, and then everyone I know passed it along to everyone they  know. It's the kind of book you want to share with the whole world. And that's why it's sold more than 65 million copies since it was first published in 1988 and has been translated into more than 80 languages. </p>" +
    "<p>Though he doesn't consider himself a spiritual guide, Paulo Coelho has been one of my great teachers. I still keep The Alchemist beside my bed and am always meeting others who do the same. (Recently, Pharrell Williams told me that it's one of his favorite books, too .) Just after the 25th anniversary of its publication , I was honored to finally sit down with the Brazilian-born Coelho at his home in Geneva (the best word for that city is civilized , by the way—I didn't see even a speck of litter on the streets!). He welcomed me with roses, pink Champagne, and a spread of food prepared by his beloved wife, Christina Oiticica, an artist. Then we got to talking, and I was delighted to learn that the passion and conviction that led him to write this truly inspired book still guide his life today. </p>" +
    "<p><b>OPRAH</b>: Oh, I'm so happy to be here.</p>" +
    '<p><b>PAULO</b>: Thank you very much for coming. My God.</p>' +
    "<p><b>OPRAH</b>: 'My God' is right. I'm here with the man who wrote The Alchemist!</p>" +
    "<p><b>PAULO</b>: But I'm not a guru.</p>" +
    "<p><b>OPRAH</b>: I know—you're not a guru.</p>" +
    '<p><b>PAULO</b>: No, no, no, no, no.</p>' +
    "<p><b>OPRAH</b>: You're just an author and a teacher and a...</p>" +
    '<p><b>PAULO</b>: An ultimate student.</p>' +
    "<p><b>OPRAH</b>: Absolutely. So last year marked the 25th anniversary of The Alchemist. And it is truly a phenomenon. I was trying earlier today to describe it to someone—and the word I used was talisman. It has really become a talisman for a lot of people. It doesn't matter how many times I read it; I always get something else from it. Does that happen to you? Have you reread it?</p>" +
    "<p><b>PAULO</b>: Many times. And I often have a sense of amazement: How did I write this book? Because I was not the best writer. I'm still not the best writer.</p>" +
    '<p><b>OPRAH</b>: Is it true that you wrote it in two weeks?</p>' +
    "<p><b>PAULO</b>: Yes. And then I wrote the title. And then I wrote the first two pages. The first sentence is 'The boy's name was Santiago.'</p>" +
    '<p><b>OPRAH</b>: Right</p>' +
    "<p><b>PAULO</b>: Because I was fascinated by Ernest Hemingway's The Old Man and the Sea. The main character in that book is also named Santiago.</p>" +
    '<p><b>OPRAH</b>: I wondered if you had named him after the trail in Spain, El Camino de Santiago, which you wrote about in your book The Pilgrimage.</p>' +
    '<p><b>PAULO</b>: No, it was because of Hemingway.</p>' +
    '<p><b>OPRAH</b>: And The Alchemist was not an instant best-seller.</p>' +
    '<p><b>PAULO</b>: That\'s right. Not long after it came out, my publisher said, "It\'s not selling." And I said, "Give it some time," and they said, "No, no, no. This book is never going to work." But there is a sentence in the book that says, "When you want something, all the universe conspires in helping you to achieve it."</p>' +
    '<p><b>OPRAH</b>: Yes.</p>' +
    '<p><b>PAULO</b>: And I thought, "I wrote this. I have to live by these words."</p>' +
    '<p><b>OPRAH</b>: Wow.<br>' +
    '<figure><img src=../../../../Assets/pc-3.jpg 2040w/></figure>' +
    '<p><b>PAULO</b>: So I started knocking on doors. And <b>OPRAH</b>, believe me when I tell you that the first door I knocked on—it was a very important publishing house in Brazil—a man opened and I said, "I have a book. It\'s not the manuscript of a genius, but I trust that it is going to sell." And the guy said, "Okay, I\'m going to publish it." Three years later, when the book had sold half a million copies in Brazil, I asked him why he\'d republished a book that had already flopped once. And he said, "I don\'t know."</p>' +
    '<p><b>OPRAH</b>: That sounds unbelievable. Like fate.</p>' +
    '<p><b>PAULO</b>: Absolutely. Which I believe in—destiny.</p>' +
    "<p><b>OPRAH</b>: You know, the scholar Joseph Campbell writes about the hero's journey: The adventurer leaves home, overcomes obstacles, achieves great things, then returns home to share his newfound wisdom. And that's Santiago's tale, too.</p>" +
    '<p><b>PAULO</b>: Yeah.</p>' +
    "<p><b>OPRAH</b>: Why do you think human beings respond so deeply to the hero's journey?</p>" +
    "<p><b>PAULO</b>: Because everybody wants to undertake it. However, people don't.</p>" +
    "<p><b>OPRAH</b>: Because they're afraid.</p>" +
    '<p><b>PAULO</b>: They are.</p>' +
    "<p><b>OPRAH</b>: In the beginning of the book, when Santiago's father is trying to convince him not to go, the boy can sense that his father wishes he had gone. You write, \"He gave the boy his blessing. The boy could see in his father's gaze a desire to be able, himself, to travel the world —a desire that was still alive, despite his father's having had to bury it, over dozens of years, under the burden of struggling for water to drink, food to eat...\" Most people get hung up on the burden and lose the dream.</p>" +
    '<p><b>PAULO</b>: But there is always an inner child who says, "Hey, do you remember that dream?"' +
    "<p><b>OPRAH</b>: And real courage is being able to step out and live that dream. That's really the only courage you ever need.</p>" +
    "<p><b>PAULO</b>: Yes. I have many fears, <b>OPRAH</b>, but I'm still trying to honor my dream, which was to be a writer. When you write books, you meet challenges. I saw so many writers paralyzed by failure, but also by success. They wrote one successful book, and then they stopped writing. I continue to write because I'm enthusiastic about my work.</p>" +
    '<p><b>OPRAH</b>: You just published your 31st book, Adultery.</p>' +
    "<p><b>PAULO</b>: You know, I don't even count!</p>" +
    "<p><b>OPRAH</b>: So you never had that fear that you wouldn't be able to repeat the phenomenon of The Alchemist?</p>" +
    "<p><b>PAULO</b>: No, no. The Alchemist only happens once in a lifetime. I've had books that didn't sell. But I continue to write.</p>" +
    '<p><b>OPRAH</b>: So is your dream—your dream to be a writer—is that the same thing as what you refer to in The Alchemist as a Personal Legend?</p>' +
    "<p><b>PAULO</b>: A Personal Legend is the reason you are here. It's as simple as that. You can fill your hours and days with things that are meaningless. But you know you have a reason to be here. It is the only thing that gives you enthusiasm.</p>" +
    '<p><b>OPRAH</b>: I call it your personal calling.</p>' +
    '<p><b>PAULO</b>: Yes. And you know that when you lack enthusiasm, you are betraying your Personal Legend.</p>' +
    '<p><b>OPRAH</b>: And you believe we all have one.<br>' +
    '<figure ><img src=../../Assets/pc-4.jpg 2040w/></figure>' +
    "<p><b>PAULO</b>: I'm 100 percent convinced. Which is totally different from believing that every person is going to fulfill his or her Personal Legend. But I do believe that we know our reason to be here. We don't know if we are taking the exact right steps toward it. But if you are honest enough, God will guide you. Even if you take some wrong steps along the way, God will recognize that you have a pure heart and put you back on track.</p>" +
    '<p><b>OPRAH</b>: The universe will rise up to meet you.</p>' +
    '<p><b>PAULO</b>: Yes.</p>' +
    "<p><b>OPRAH</b>: So early on in The Alchemist, Santiago is told of the world's greatest lie. What is that</p>" +
    '<p><b>PAULO</b>: That you don\'t control your life—that there is a system, an establishment, that doesn\'t allow you to control anything. You buy into the world\'s greatest lie the moment you agree to obey rules that are not your rules. When you say, "I have to." So many people say, in that moment, "Am I going to be different? Am I going to make people upset? No." I\'ll tell you my experience. When I decided to be a writer, my parents tried everything to dissuade me.</p>' +
    '<p><b>OPRAH</b>: What did they want you to be?</p>' +
    '<p><b>PAULO</b>: An engineer. They tried to bribe me. Then they cut off all the money they gave me to buy, I don\'t know, soft drinks. Then they tried a psychiatrist. Then they lost hope and said, "This guy is crazy. We love him, but he\'s crazy." And they put me in a mental institution.</p>' +
    '<p><b>OPRAH</b>: They put you in a mental institution because you wanted to be a writer?</p>' +
    '<p><b>PAULO</b>: Because I wanted to be an artist. Artists, you know, they starve to death. They are homosexuals. They drink.</p>' +
    '<p><b>OPRAH</b>: Wow, so they put you in a mental institution.</p>' +
    "<p><b>PAULO</b>: Three times, actually, because I escaped! But <b>OPRAH</b>, let me tell you, they didn't do it out of hatred. They were trying to help me. They really thought I was crazy. Brazil was a very regressive society. We lived under a military dictatorship. They were scared about everything. And here I was, telling them I was not going to university.</p>" +
    '<p><b>OPRAH</b>: So what did you learn about yourself while you were in the mental institution?</p>' +
    '<p><b>PAULO</b>: Well, it was very liberating. I realized that I\'m crazy, so I can do anything I want! And if something bad happens, I can say, "Sorry, I was just in a mental institution. Forgive me." So when I escaped, I became a hippie.</p>' +
    "<p><b>OPRAH</b>: Sex, drugs and rock 'n' roll?</p>" +
    "<p><b>PAULO</b>: Yes, and traveling. That was my first contact with your country. I flew to New York and then traveled to San Francisco with $200 in my pocket and no English. Because you had these two institutions—I don't know if you still have them—the YMCA and Greyhound bus.</p>" +
    '<p><b>OPRAH</b>: Yes. [Laughs]</p>' +
    '<p><b>PAULO</b>: I would ask the man at the bus station for a ticket to someplace eight hours away, because I needed to sleep.</p>' +
    '<p><b>OPRAH</b>: Oh my goodness. So was it during this time that you actually became a writer?</p>' +
    '<p><b>PAULO</b>: I had determined to write, but at that time, it was still impossible. My parents had said that, and for the moment they were right. So I started writing songs. I became a songwriter. And I started making a lot of money. And then my parents relaxed because I could be crazy and still make money.<br>' +
    '<figure ><img src=../../Assets/pc-5.jpg 2040w/></figure></p>' +
    '<p><b>OPRAH</b>: So let me get this straight. Was your journey across America part of your journey to discover your Personal Legend?</p>' +
    '<p><b>PAULO</b>: One of them. My Personal Legend was to be a writer. And I started to be freer from that moment on. In 1982, I was already married to Christina, and I had a good job. But I was not happy. It was the enthusiasm thing. So I said, "Christina, we have everything that people dream of except joy. At least, I don\'t have joy." We had a few apartments and $17,000. So I said, "Let\'s take the $17,000 and try to find the meaning of life. With that much money, we can travel for two years."</p>' +
    '<p><b>OPRAH</b>: Because you believed that our only obligation is to honor our Personal Legend.</p>' +
    '<p><b>PAULO</b>: Absolutely. So we set out to travel. It was during that time—I was 39 years old—that I decided I had a dream I could no longer live without fulfilling. It was killing me. So I quit everything to write full-time. I had been worried about hurting my wife and my parents. But I realized that they wanted to see me happy.</p>' +
    '<p><b>OPRAH</b>: And you published The Alchemist in 1988.</p>' +
    '<p><b>PAULO</b>: Yes.</p>' +
    '<p><b>OPRAH</b>: But you know what? I think not everyone knows what their Personal Legend—their purpose, their calling—really is. People are always saying to me, "I don\'t know what I\'m supposed to do with my life."</p>' +
    "<p><b>PAULO</b>: They know. It's very difficult, <b>OPRAH</b>, to accept that you know what you're supposed to do when you are not doing it. Because from the moment that you know, you have to either leave a lot of things behind or live aware that you are not fully treasuring the miracle of being alive.</p>" +
    "<p><b>OPRAH</b>: Like the merchant who didn't go to Mecca in The Alchemist. Who always wanted to go, but kept postponing, and finally realized he was never going to go.</p>" +
    '<p><b>PAULO</b>: Yes. In my life, I think I learned this.</p>' +
    "<p><b>OPRAH</b>: So the reason that many people never pursue their Personal Legend is because of their fear of failure. I love this quote from The Alchemist: \"'Don't give in to your fears,' said the alchemist, in a strangely gentle voice. 'If you do, you won't be able to talk to your heart.'\"</p>" +
    '<p><b>PAULO</b>: Every heart is fearful. A heart is like a flower, you know? It can be very brave, but it can be easily hurt.</p>' +
    '<p><b>OPRAH</b>: Mmm-hmm.</p>' +
    "<p><b>PAULO</b>: I've been defeated many times. And I fear a lot of things still. But the point is not to give up.</p>" +
    '<p><b>OPRAH</b>: All right. So when you were younger, you wrote this in your diary: "Every day it seems harder to achieve my great ideal: to be famous and respected, to be the man who wrote the Book of the Century, the Thought of the Millennium, the History of Humanity."</p>' +
    '<p><b>PAULO</b>: [Laughs] Well, I was always a little bit megalomaniac!</p>' +
    '<p><b>OPRAH</b>: Oh, my gosh. First of all, who writes that about himself?</p>' +
    '<p><b>PAULO</b>: Someone who needs to go to a mental institution!</p>' +
    '<p><b>OPRAH</b>: [Laughs] Did you know then that the universe would rise up and conspire to help you? That you really would publish the book of the century?</p>' +
    "<p><b>PAULO</b>: Probably not. But I wasn't the only young person who writes things like this. If you think small, then your world will be small. If you think big, your world will be big. Having said that, a self-fulfilled prophecy like that is quite difficult to explain.</p>" +
    "<p><b>OPRAH</b>: I can't get over it!</p>" +
    "<p><b>PAULO</b>: But <b>OPRAH</b>, you want to know: Did I write The Alchemist? I'm not sure. I am sure that I was a good instrument. That I went through all these experiences—crazed, outcast—and then wrote a book that is, let's be honest, much better than I am. So you follow your heart, and then one day you manifest something. This is the real alchemy.</p>" +
    '<p><b>OPRAH</b>: Yeah.</p>' +
    '<p><b>PAULO</b>: And everybody has this possibility.</p>' +
    '<p><b>OPRAH</b>: Wow.</p>' +
    "<p><b>PAULO</b>: For years I wasn't so crystal sharp—to use a metaphor from The Alchemist. I had a dream, but had not yet dared to fulfill it. But then you start paying attention, and there is a symbol here, and one there, and if you put the puzzle together, you will understand.</p>" +
    '<p><b>OPRAH</b>: The alchemist teaches Santiago, "Listen to your heart. It knows all things..."</p>' +
    '<p>[Thunder claps loudly in the background; a storm is moving in.]</p>' +
    "<p><b>PAULO</b>: This is a moment. It's a sign. Don't cut it from the interview!</p>" +
    '<p><b>OPRAH</b>: [Laughs] We won\'t! God must have liked that quote. Okay. So the alchemist teaches Santiago that the heart "knows all things, because it came from the Soul of the World, and it will one day return there."</p>' +
    '<p><b>PAULO</b>: Yes.</p>' +
    "<p><b>OPRAH</b>: But as Santiago searches for his Personal Legend, he also meets forces beyond his control. I love how you write that when he's out in the middle of the desert, he has to go around dunes and avoid obstacles and tribes who are at war. But as long as he gets back on course, he will end up in the right place. Our lives are like that, too.</p>" +
    '<p><b>PAULO</b>: Absolutely.</p>' +
    '<figure><img src=../../Assets/pc-6.jpg 2040w/></figure>' +
    '<p><b>OPRAH</b>: There are obstacles that take us out of the way. But as long as you know where you are going and what you want...</p>' +
    '<p><b>PAULO</b>: Right.</p>' +
    '<p><b>OPRAH</b>: So let me ask you this. Was Santiago in control of his destiny?</p>' +
    '<p><b>PAULO</b>: More or less.</p>' +
    '<p><b>OPRAH</b>: [Laughs]</p>' +
    '<p><b>PAULO</b>: You need to...well, at certain moments you need to have discipline, and in others you need to just be guided by life.</p>' +
    '<p><b>OPRAH</b>: By paying attention. To the signs.</p>' +
    '<p><b>PAULO</b>: You have to balance your willpower with the capacity to relax and enjoy and go with the flow.</p>' +
    '<p><b>OPRAH</b>: That is so important.</p>' +
    '<p><b>PAULO</b>: There is a Zen proverb that says, basically, if you want something, step aside and let this thing come to you.</p>' +
    '<p><b>OPRAH</b>: So we need willpower and enthusiasm, but then we need to surrender.</p>' +
    '<p><b>PAULO</b>: Absolutely.</p>' +
    '<p><b>OPRAH</b>: In the book, you write, "Before a dream is realized, the Soul of the World tests everything that was learned along the way. It does this not because it is evil, but so that we can, in addition to realizing our dreams, master the lessons we\'ve learned as we\'ve moved toward that dream." You write that when the real tests come, "that\'s the point at which most people give up."</p>' +
    "<p><b>PAULO</b>: It is. When they're so close. When that man told me The Alchemist wasn't going to sell, for example. Wow. Now that I've decided to be a writer, burned all my bridges, and walked 500 miles from France to Spain on the Camino de Santiago, you are telling me that this book is not good? I could have easily said, in that moment, \"He's right. Let me write another book.\"</p>" +
    '<p><b>OPRAH</b>: So when is a no really a no? Because sometimes, a no is a no.</p>' +
    '<p><b>PAULO</b>: It depends. [Laughs]</p>' +
    "<p><b>OPRAH</b>: Maybe if you're listening to your heart, it's never really a no. Or, at least, it's a good no—one that will send you in the direction you're meant to be moving.</p>" +
    '<p><b>PAULO</b>: Absolutely. Can I tell you a very personal story, <b>OPRAH</b>?</p>' +
    '<p><b>OPRAH</b>: Of course.</p>' +
    '<p><b>PAULO</b>: About three years ago, I had heart surgery. I had gone in for a simple stress test and my doctors told me suddenly that I would die in 30 days without intervention.</p>' +
    '<p><b>OPRAH</b>: Whoa.</p>' +
    "<p><b>PAULO</b>: But I went home and was very relaxed. I thought, \"I'm going in for heart surgery. I may die tomorrow. But then I realized that if I die tomorrow, I've spent more than half my life with the woman I love. How many people on this planet can say that? She's my fourth marriage, but we've spent 35 years together. And I tell her \"I love you\" every day. The second thing I thought is, I did everything. I was crazy. I went to extremes. So I have nothing to regret, because I did everything.</p>" +
    '<b>OPRAH</b>: You were a hippie on a Greyhound bus.</p>' +
    "<p><b>PAULO</b>: Yes. And the third thing I realized is that I fought for my dream. I did not take no for an answer. I wanted to be a writer, and I wrote. So I thought, If I die tomorrow, it's all okay.</p>" +
    '<p><b>OPRAH</b>: Wow.</p>' +
    '<p><b>PAULO</b>: That was November 30, 2011. I know that I will die eventually. And when I do, I want to die with the same sensation I had that night. Knowing that I fought the good fight and did not lose my faith.</p>' +
    "<b>OPRAH</b>: That's a beautiful story. Thank you for sharing it. And thank you for inviting me to your home.</p>" +
    '<b><b>PAULO</b></b>: <b><b>OPRAH</b></b> Winfrey, thank you for coming. May God bless you.</p>'
};
// Rendering the handlebars template
document.getElementById('maincontent').innerHTML = articlesT(articlesD);
