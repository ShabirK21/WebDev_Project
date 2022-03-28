// Using compiled handlebars template
articlesT = Handlebars.templates.articles;
articlesD = {
  authorbook: 'J.R.R Tolkien | The Hobbit',
  // Content retrieved from https://www.theguardian.com/books/1991/dec/28/jrrtolkien.classics
  content:
    "<span id=quote>J.R.R Tolkien: 'Not all those who wander are lost.'</span>" +
    "<figure id='hmimg'><img src=../../Assets/jrr-2.jpg 2040w/></figure>" +
    "<p>John Ronald Reuel Tolkien was born on January 3, 1892 in the South African velt. As a child, he fell in love with a hamlet in the Midlands where he later set what has             become the world's most popular work of fiction, The Hobbit. John Ezard draws on a rare interview with             Tolkien to celebrate a centenary of enchantment</p>" +
    '<p> Small guilts are the worst. Seven years before his death Tolkien told me about Sarehole, his imaginative heartland, a small village near Birmingham which was the starting-point for his fictional Shire in both The Hobbit and Lord of the Rings.</p> ' +
    '<p> This was in 1966, when he was just beginning to be a bestseller. The Hobbit was not then, as it is now, the most popular work of fiction in 20th century publishing history. He was news because of his efforts to counter an American pirate edition of the Ring trilogy. But he was much more interested in talking about Sarehole, where he had grown up between the ages of four and eight during the last four years of the 19th century. He dated everything from it. ' +
    "<p> 'It was a kind of lost paradise,' he said. 'There was an old mill that really did grind corn with two millers, a great big pond with swans on it, a sandpit, a wonderful dell with flowers, a few old-fashioned village houses and, further away, a stream with another mill. I always knew it would go - and it did.' </p>" +
    "<p> The interview, his first with a newspaper journalist, was a considerable kindness. When it was over, he asked me to go to the area and write a story which might start a campaign to save any shred that suburbia might have left of the village. I couldn't - my then paper the Oxford Mail's coverage area didn't quite stretch to Birmingham. </p>" +
    "<p> Not that Tolkien complained. He befriended me, as he did several journalists and other young people in those final years before his death in 1973. He gloried in companionship. He was a shy but clubbable man of lightly-carried learning and huge relish - 'every morning I wake up and think good, another 24 hours' pipe-smoking,' he would say. </p>" +
    "<p> In 1967 he sent me a carbon of his last story, Smith of Wootton Major: 'An old man's story filled with the presage of bereavement,' as he put it. The opening sentence read: 'There was a village once, not very long ago for those with long memories nor very far away for those with long legs.' It was, unmistakably, his imaginative farewell to Sarehole. </p>" +
    "<p> This winter, with the centenary of his birth due on January 3, seemed a last chance to try to carry out his wish. However, a check in the British Gazetteer accentuated 25 years of guilt. The village isn't listed any more and a village not listed in the Gazetteer is usually an ex-village. The last chance was the Birmingham phone book. Might it list the name of an old shop or school which would pinpoint where the place had been? If so, one could at least go there, stand on the concrete and say, 'Sorry, this used to be Sarehole'. </p>" +
    '<p> In the phone book, unbelievably, was the entry: </p>' +
    '<p> Sarehole Mill, Cole Bank Road, 13. . . . . .777-6612 </p>' +
    "<p> Blink and you could miss it, driving down Birmingham's A4040 outer ring road from the Stratford-on-Avon road west towards Moseley, near the M42 turn-off. You pass a petrol station which was once Sarehole Farm. Then, at speed, you'd see a brief gap in suburbia, a flicker of green. But stop, get out and you see that a green gap almost 300 yards wide stretches half a mile deep on either side of the link road. </p>" +
    '<p> Then look behind a screen of trees beside the river Cole. You find yourself gazing at Sarehole Mill restored to rather better than new, in full working order and flourishing as a branch of Birmingham City Museum. It got 22,000 visitors last year. </p>' +
    '<p> Then look behind a screen of trees beside the river Cole. You find yourself gazing at Sarehole Mill restored to rather better than new, in full working order and flourishing as a branch of Birmingham City Museum. It got 22,000 visitors last year. </p>' +
    "<p> This countryside has been diminished into an enclave but enough is left to explain how Tolkien came to put down spiritual roots here. It is his country, as recognisably as Dorset is Hardy's or the north-east Catherine Cookson's. It will get a taste of that role when coachloads from the centenary World Tolkien Conference at Oxford descend on Sarehole Mill next August. </p>" +
    '<p> But as yet even the mill is scarcely known outside the West Midlands. The story of how it and part of its terrain came to be saved has not been told. Its survival was perhaps due in tiny measure to my Oxford Mail interview plus a fine, on-the-spot article by Keith Brace in the Birmingham Post a year later. These put on record the fact of a link between the mill and a man who was even then the most popular Oxford storyteller since Lewis Carroll. </p>' +
    '<p> But the reprieve turns out to have been much more thanks to the determination of Birmingham city councillors to cling to their civic history - and to the canniness of the people Tolkien dreaded most, the suburban newcomers, some of whom came to feel as vehemently as he did about these few acres of land. </p>' +
    "<p> It is chastening to discover that their plans were well advanced when Tolkien was talking so sombrely in 1966. More remarkably, the 'mill that really did grind corn' turns out not to have been a purely rural artefact as he assumed he was a lifelong arch-foe of industrialisation. Long before he knew it, the building had served as an early cradle of the Midlands industrial revolution and, consequently, of the growth of suburbia which came to threaten it. </p>" +
    "<p> It is a long road from his Sarehole days to his centenary and it has put him in some very strange company. His book sales figures - given here in detail for the first time - show that The Hobbit, published in 1937, has sold 35 million copies. This puts it seven million ahead of the current Guinness Book of Records nominee as the world's best-selling single work of fiction - the 1960s sexploitation tale, Valley of the Dolls, by Jacqueline Susann. </p>" +
    '<p> An 80,000-copy centenary edition of The Hobbit has just sold out before publication, with a second edition of 60,000 on the way. Lord of the Rings has sold 20 million copies across the world, only seven million fewer than Gone With The Wind, although it has been on sale for 20 fewer years and is a more difficult, serious work written by a scholar steeped in the mythologies and languages of northern Europe.</p>' +
    "<p> He published 13 books. His son Christopher has compiled a further nine from the papers he left, with three more to come. Together these sell 3.8 million copies a year. A calendar, a mere commercial spin-off with Tolkien-style drawings, sells 300,000 a year. Even the posthumously published Silmarillion, dismissed by some critics as unreadable when it first appeared in 1977, sells 100,000 a year. All this brings his publishers, George Allen & Unwin, now swallowed by Rupert Murdoch's Harper Collins group, a steady one million pounds a year in revenue. </p>" +
    "<p> His influence on other writers and on publishing has been colossal. In any big W H Smith's, you can find imitative and often atrocious epics by at least 40 other writers. They are often classed as 'fantasy', but all are recognisably attempts at the myth-making, or 'mythopoeic' genre which Tolkien invented. And before he wrote a single story he had been one of the pre-eminent Anglo Saxon scholars of his time, a teacher gratefully remembered by W H Auden and other poets who were his Oxford pupils. </p>" +
    "<p> His origins betrayed no sign of these abilities. His father's father was a bankrupt piano-maker and music salesman in Birmingham, his mother's father a Jeyes Fluid salesman from Evesham. His father, Arthur Tolkien, was a clerk at Lloyds Bank, Birmingham. Emigrating to South Africa in the late 1880s to make his fortune, Arthur brought his fiancee Mabel Suffield out to marry him in Bloemfontein where the town park - she wrote home - was no more than ten willows and a patch of water. </p>" +
    '<p> Into this arid veld John Ronald Reuel Tolkien was born on January 3, 1892. Three years later his mother took him and his younger brother back to England on holiday. It was a one-way journey, for their father died suddenly of peritonitis following rheumatic fever. Shortly afterwards his widow converted from non-conformism to Catholicism, which estranged the support of most of her family. Her search for healthy, cheap lodgings led her to Sarehole and Tolkien to his first experience of the English countryside. </p>' +
    "<p> The hamlet, part of the old forest of Arden, stood on either side of a wide country road along which cattle were herded to market in central Birmingham four miles away. Its name was Anglo Saxon in origin, meaning 'the place where service trees grow'. </p>" +
    "<p> Tolkien told me in 1966: 'I was brought back to my native heath with a memory of something different - hot, dry and barren - and it intensified my love of my own countryside. I could draw you a map of every inch of it. I loved it with an intensity of love that was a kind of nostalgia reversed. It was a kind of double coming home, the effect on me of all these meadows. </p>" +
    " <p>'I was brought up in considerable poverty but I was happy running about in that country. I took the idea of the hobbits from the village people and children. They rather despised me because my mother liked me to be pretty. I went about with long hair and a Little Lord Fauntleroy costume. </p>" +
    " <p>'The hobbits are just what I should like to have been but never was - an entirely unmilitary people who always came up to scratch in a clinch. </p>" +
    " Behind all this hobbit stuff lay a sense of insecurity. I always knew it would go - and it did.' </p>" +
    "<p> Humphrey Carpenter writes in his biography of Tolkien, 'Occasionally a strange dream came to trouble him: a great wave towering up and advancing ineluctably over the trees and green fields. The dream was to recur for many years. He came to think of it as 'my Atlantis complex'.' </p>" +
    " <p>At Sarehole he had begun to learn Latin from his mother and to read books about dragons. But in 1900 Tolkien passed the exam to King Edward's grammar school. The family had to leave Sarehole to find an area with better bus services. Only four years later his mother died of exhaustion. Her family and church helped the boys. But from then on, he told me, 'I moved from one orphan's lodging to another in depressing suburbs.' </p>" +
    '<p> Not until his marriage - to a fellow-orphan - did he begin to recover. Bereavement fastened the hamlet in his memory for life. Yet he had never known very much about about it. </p>' +
    " He wrote about hobbits in his preface to Lord of the Rings in the 1950s: 'A well-ordered and well-farmed countryside was their favourite haunt. They do not and did not understand or like machines more complicated than a forge-bellows, a water mill or a hand loom, although they were skilful with tools.' That is in part whimsy but also chimes with his general outlook it was easy for Oxford dons of his era to maintain not merely a justifiable wariness but a wholesale disdain about modern life. </p>" +
    '<p> Sarehole Mill and the other 50 mills in pre-20th century Birmingham had, in fact, been distinctly unhobbit-like. In a city with more water than Venice, they helped give the region its primacy as a metal-bashing centre before the steam engine was perfected. </p>' +
    "<p> Sarehole was pre-eminent because it was rented from 1756-61 by Matthew Boulton, James Watt's partner in developing steam power. Boulton did experiments there and is thought to have partly adapted the corn mill, already 200 years old, for metal rolling. From here he went on to set up his famous Soho Manufactory at Handsworth, the first proper factory. A steam engine was installed at Sarehole in 1850 to supplement its water power. </p>" +
    "<p> By Tolkein's day, unable to compete with factories, it had reverted to more pastoral corn and bone-grinding. The brothers nicknamed George Andrew, the tenant miller's son, 'The White Ogre' because he was covered with bone dust when he chased them out of his yard. Tolkien put a surly miller into several of his stories. Neither, in his turn, did Mr Andrew forget or forgive. 'The two of them were perishing little nuisances,' he told a woman still alive in Sarehole, not long before his death in 1959.</p>" +
    "<p> The mill had to shut in 1919, with all its functions superseded. George Andrew put up a greenhouse overlooking the pond and became the district's most successful greengrocer. But when he grew too old to chase trespassers the building and machinery began to be severely vandalised. When the city council began considering how to conserve them after Andrew's death, it wasn't Tolkien 's mill they were trying to save it was Matthew Boulton's mill, the last survivor of all the mills of Birmingham. </p>" +
    '<p> It had stood 40 years beyond its closure because of an extraordinary pattern of altruism which, in the end, saved the whole enclave around the river Cole. The great wave about which Tolkien had dreamt started to become real only six years after his stay there, when the North Warwickshire suburban railway line was built nearby. By 1920, suburban houses were trickling down the hill from the Stratford side. But developers found building land becoming mysteriously scarce as they got closer to the river Cole. </p>' +
    "<p> A counter-strategy had been hatched in 1911 by trustees of the Norman manor of Yardley, in which Sarehole lay. Their idea was to create a riverside walk. The prime mover was Arthur Foster, a solicitor who lived just down the road in Tolkien 's time. He owned the immensely valuable mill and meadow site. </p>" +
    "<p> His will, read on his death in 1928, disclosed he had left them to Birmingham City Council in perpetuity. His condition was that they were not built on - and that his friends George Andrew and Andrew's father were allowed to stay there till they died. 'Foster loved this area very much,' said Gwenith Hasler, its voluntary archivist and historian. The Tolkiens ' old rented house is preserved as one of six cottages now called the Foster Trust Houses for the Gentlewomen of Moseley. </p>" +
    "<p> The owner of Cotterell's Meadow, another key site, used a similar ploy. So, in smaller ways, did families moving into the suburban houses. Ms Hasler's father, who arrived in 1928, rented a stretch of riverside land to stop a businessman opening it as a stone yard. " +
    '<p> The upshot was that the building line was stopped before reaching the mill. Suburbia had to leapfrog over the green swath by the river. Successive public appeals for funds to restore the mill buildings overcame controversy and apathy. Correspondence suggests Tolkien heard of this near the end of his life and, while pleased, was too infirm and preoccupied to pay a visit. </p>' +
    "<p> Moreover, Mr Hasler had a business client who was able to let him have large numbers of ornamental and orchard saplings. He drove round giving them to every new resident who was starting a garden. His daughter can now stroll past the mill along a riverside walk maintained by the council parks department and look at her father's mature trees. </p>" +
    "<p> In 1968, Keith Brace (now the Birmingham Post's literary editor) wrote that if you ignored the rusty buckets and mouldering tyres dumped in the river you could see 'a faded manuscript' of Tolkien's Shire. Now the Cole's waters run clear. </p>" +
    "<p> 'I don't think it's sentimental to say it has a magic,' Ms Hasler said. 'Even as a child, it was a delight to play around the river. It has attractions I don't think I shall ever forget. You could well imagine yourself anywhere in the heart of the countryside - provided, of course, that the sound of bus brakes on Colebank Road isn't too loud.' </p>" +
    "<p> Tolkein's books were about brave, often hopeless wars against persisting evil. My 1966 interview ended by saying that no brave wars were fought to save the real countryside he loved and he had put it into his books instead. That has proved incorrect. Brave efforts were made and they partly succeeded. </p>" +
    '<p> My overriding memory of Tolkien is not of his hobbits or his elf-queens (these can pall as a reader grows up) but of his sense of stewardship for the unperverted natural world. Now other people who never knew him in his childhood land turn out to have matched this sense. </p>' +
    '<p> Tolkien said he could map every inch of Sarehole from memory: Gwenith Hasler has mapped every change of land ownership and use there since the mid-19th century with a topographical passion equal to his. Such care is also reflected nationally to an extent in the green movement his books helped to foster. </p>' +
    '<p> That, although he never knew the full story, is a good legacy for his centenary year.</p> '
};
// Rendering the handlebars template
document.getElementById('maincontent').innerHTML = articlesT(articlesD);
