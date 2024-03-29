// Using compiled handlebars template
articlesT = Handlebars.templates.articles;
articlesD = {
  authorbook: 'Paul Kalanithi | When Breath Becomes Air',
  // Content retrieved from https://www.nytimes.com/2016/01/26/health/lucy-paul-kalanithi-interview-breath-becomes-air.html
  content:
    "<span id=quote>Paul Kalanithi: 'You can’t ever reach perfection, but you can believe in an asymptote toward which you are ceaselessly striving.'</span>" +
    "<figure id='hmimg'><img src=../../Assets/pk-2.webp 2040w/></figure>" +
    '<p>On March 9, 2015, two years after learning he had metastatic lung cancer, Dr. Paul Kalanithi, 37, a neurosurgeon at Stanford University, died. He left behind his wife, Dr. Lucy Kalanithi, their 8-month-old daughter, Cady, and a file on his computer labeled Kalanithi-Ms-20Feb.docx. His wife took that document, shepherded its contents to publication, and the resulting book, When Breath Becomes Air,” became an instant best-seller this month. Dr. Kalanithi, 36, is a general internist at Stanford, where she helps lead efforts to improve the quality and efficiency of care. She recently folded herself into a leather armchair in her home in the San Francisco Bay Area, the same spot where her husband sat while he wrote, and talked about her own experience — as a young widow in grief, as her husband’s literary stand-in, and as a physician who witnessed at intensely personal range the end to an extraordinary man’s life. Here are edited excerpts from the conversation.</p>' +
    'Q. Have you been surprised by the book’s immense success?</p>' +
    '<p>It’s really exceeded my highest hopes. A couple months ago, I asked Paul’s literary agent, “How do you think the book is going to do?” She said, “Well, it’s either going to do very well or it won’t do well at all. It kind of just depends whether people want to read a book about dying, by a man who has died.” For me personally, it’s really a consolation in a way.</p>' +
    '<p>How so?</p>' +
    '<p>It’s been 10 months since Paul died, and I still want to talk about him all the time and reminisce about him. For me, it’s just helpful to talk, and process, and remember Paul. Somehow I feel like seeing the response to the book and even interacting with compassionate media are very wonderful for me.</p>' +
    '<p>The tremendous response to the book must be heartening.</p>' +
    ' <p>Yes, heartening. We’re all going to face illness and death and bereavement and difficult medical decisions. The response, I think, is indicating people’s hunger to address these challenges in a real way. What are we doing to help each other live and die well? What should we be talking about that we’re not talking about? This book has a voice in that discussion. That’s really exciting for me to see.</p>' +
    '<strong>In your epilogue to the book, you wrote about how important it was to Paul to get this book done. I wanted to ask you about the mechanics of that. He wrote even when he was very sick?</strong></p>' +
    '<p>Yes, he went through a lot of physical discomfort to write it. Just sitting still for a long time was hard, and he had trouble with mental focus. Despite the physical suffering, he was still a very natural writer, or maybe his skill at writing helped him power through all his physical challenges. But the whole section at the beginning of the book, about his childhood, he wrote that while he had brain metastases. That was the last thing he wrote.</p>' +
    'Really? The first part of the book was the last thing he wrote?</p>' +
    '<p>Yeah. When he died, I was on a mission to make sure that document on his computer got turned into a book, to stand in for him and to make sure it happened. So at first it was all about this mission for Paul. Now I’m realizing the conversation that’s happening, it’s one that Paul wanted to be part of and that I want to be a part of. It’s a very exciting thing and something I was doing in my work, but not in this type of way.</p>' +
    '<p>What do you mean?</p>' +
    '<p> I don’t know exactly how to phrase it. I think there’s this real opportunity in medicine. We’re at this weird point in history where we have all this technology and the impulse is to keep using it, even if it’s at times creating more suffering. At a certain point, death is not a medical event, but we still treat it like one. I think you know what I mean by that.</p>' +
    '<p>I do know.</p>' +
    '<p>When Paul first got diagnosed, I felt not powerless, and I felt like, “I have these skills and interests in medicine that are going to serve me taking care of Paul.</p>' +
    'Such as?</p>' +
    '<p>I guess the core one was, “He’s not afraid of dying, and I’m not afraid to see him die.” He was interested in death as a philosophical problem. We both entered medicine to grapple with big questions and how people make sense of their lives and deaths. But then suddenly it’s like — now it’s on us. It was super intense and super hard. It took everything we had to cope, but it was also like we could ultimately find meaning, which was amazing. That was because he could write this book. I think there would have been more existential suffering if he didn’t have a purpose.</p>' +
    '<figure><img src=../../Assets/pk-3.png 2040w/></figure>' +
    '<p>You guys made the decision together to have Cady. Paul was already sick?</p>' +
    '<p>Yeah, he was already sick.</p>' +
    '<p>What was that like?</p>' +
    '<p>So when we were deciding to have Cady, it was clear to us that she likely wouldn’t know Paul, and that I would be a solo parent. I remember this thing he said that’s amazing, that’s in the book, where I said something like, “Don’t you think saying goodbye to your child will make your death more painful?” I was really worried about that.</p>' +
    '<p>When you were deciding?</p>' +
    '<p>Mm-hmm [affirmative]. I wanted him to be able to spend his time in the way that he wanted to. I said, “Don’t you think it will make your death more painful?” He said, “Wouldn’t it be great if it did?” Then — he says this in the book, too — where he’s like, “We agreed that life is not about avoiding suffering.” It’s about creating meaning.</p>' +
    'It’s my job going forward to help shape her narrative in a way that makes sense for her. I don’t know what her relationship with Paul — understanding Paul — I don’t know what that will be going forward. I have to let her have that, too.</p>' +
    '<p>My guess is that he’ll be this mythical figure to her.</p>' +
    '<p>I know. That’s interesting. It’s weird, especially because now he’s a famous writer. When he was alive, he was not a famous writer, but to her, he will be. He wrote the book to her, too.</p>' +
    '<p>The book is filled with literary references. What were his favorite books?</p>' +
    "<p>When he was first diagnosed, for a long time he’d been super busy, and reading neurosurgery textbooks. Then that terrible night when we got the chest X-ray result … I was packing for the hospital and packing stuff we would need, like phone chargers. He just packed books. I think he was just thinking, “I need books at this moment. This is the worst moment in my life. I need my books.” He took Heidegger’s “Being and Time,”,C.S. Lewis’s “Mere Christianity,” and Solzhenitsyn 'Cancer Ward'</p> " +
    ' <p>How did seeing him through dying affect the way you practice medicine?</p>' +
    '<p>My career is now focused around health care value. In residency, I got interested in these bigger questions like: What are we getting for our money in health care? Are we getting what we aspire to get? I feel like the experience with Paul solidified my instincts. It deepened and enriched what I felt like I was doing in medicine already.</p>' +
    '<strong>How does it feel to have grief, which is something intensely solitary, become almost a collective experience?</strong></p>' +
    '<p>I guess there are a few answers. There’s real life, then there’s the book Paul wrote. Then there’s the book people read. They’re all distinct from each other. … I would expect people to project or to take away something that connects with them, which is different for different people, or even from what Paul meant.</p>' +
    '<p><strong>Now that it’s out there, the book has a life of its own.</strong></p>' +
    '<p>Yes. Gavin Francis wrote a blurb for the book. He wrote that the book was “crackling with life.” I was so happy to see “crackling with life.” It’s so incredible because when Paul was sitting in his chair, so debilitated, and wan and thin, he was totally crackling with life. He didn’t look like he was. But he really was. He didn’t die until he died.</p>' +
    '<strong>You’re now a spokeswoman for the both of you.</strong></p>' +
    '<p>Yes, and there are different pieces to it: I really wish Paul, for every reason, was here to answer these questions. I want him here. I’m not him. It’s really heartbreaking and difficult that he’s not here. Then there’s the piece — what’s my role and how do I feel about it. I feel this responsibility to Paul to represent him. You could compare it to a health proxy, when patients are really ill and can’t speak for themselves, and you’re trying to decide how to guide their care. It’s not a decision about what you as a family member want. It’s what they would say if they could sit up and speak.</p>'
};
// Rendering the handlebars template
document.getElementById('maincontent').innerHTML = articlesT(articlesD);
