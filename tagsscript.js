new Vue({
el: "#app",
data: {
search: "",
currentFilter: "A",
projects: [

{
tags: "Toadlett",
url: "https://www.toadlett.com/",
image:
"https://lh3.googleusercontent.com/d/1sR6RSjCoBJHFdp33Jpj5zKYFK5lV4_qn",
category: ["A", "SC", "TT", "SG", "Z"],
bio: "Books full of goblins and other horrible little guys. Wildlife and folklore-inspired narrative art, by and for wretched creatures.",
title: "horror, folklore, wildlife, creatures, goblins"
},

{
tags: "Quindrie Press",
url: "https://quindriepress.com/",
image:
"https://lh3.googleusercontent.com/d/1M4lFA-xyjtk_sYs2wY1H_xu7m-lxwYTr",
category: ["A", "SC", "GN"],
bio: "An award-winning, independent publisher of passion project comics.",
title: "queer, fantasy, sci-fi, anthology, webcomics"
},

{
tags: "Stout Stoat Press",
url: "https://www.stoutstoat.co.uk/",
image:
"https://lh3.googleusercontent.com/d/1gZIGVUY0ArZCU1FZP42_CBC5K4nd-TCQ",
category: ["A", "TT", "SG"],
bio: "An award-winning, independent publisher of tabletop and roleplaying games.",
title: "stuff"
},

{
tags: "Chris Manson Comics",
url: "http://www.chrislaumanson.co.uk/",
image:
"https://lh3.googleusercontent.com/d/1qD0NqpFZ7W5CYeGh5AjChV33-x0C0bj8",
category: ["A", "SC", "Z"],
bio: "Chris Manson draws on his dual Chinese & Scottish heritages to create speculative fiction, horror, and satire that examines how tradition both empowers and hinders us.",
title: "fantasy, satire, comedy, horror, sci-fi"
},

{
tags: "Kai Dylan",
url: "http://www.kaidylan.com",
image:
"https://lh3.googleusercontent.com/d/1NkxCvxo2hfjlYP1zPBgDMVDAxgy3hVcN",
category: ["A", "SC", "GN", "Z"],
bio: "Kai Dylan is an illustrator with a focus on comics and zines exploring themes of connection and self discovery through heartfelt illustrations paired with written prose.",
title: " "
},

{
tags: "Tanya Roberts/Bluebottle Ink ",
url: "https://www.tanyaroberts.co.uk/",
image:
"https://lh3.googleusercontent.com/d/1KkaQcP_fBh5aMcRynyZ9xo-Jq8a-QLdl",
category: ["A", "GN"],
bio: "We are an independent husband and wife comic team. We make character driven stories that are dark and paranormal.",
title: "horror, characters, paranormal, spooky, dark"
},

{
tags: "JSNINGART",
url: "https://shuningji.weebly.com/",
image: "https://lh3.googleusercontent.com/d/1QNZU5k1Roa7MI0-rYaKv7nsvcKln7HcZ",
category: ["A", "SC", "Z"],
bio: "Ji Shuning is a comic artist who enjoys storytelling through brightly colored visual stimuli and often captures the unnoticed corners of cities and landscapes.",
title: "cosy, thoughtful, nostalgic "
},

{
tags: "Jack Magee",
url: "http://www.jackmagee.co.uk",
image:
"https://lh3.googleusercontent.com/d/1o0ff6hhApk3UOc9cjGveBbhjibSVn9BB",
category: ["A", "SC", "TT", "BG", "Z"],
bio: "Friend of the bees. Writer and illustrator of the cosmic and forgotten. Working on his debut graphic novel!",
title: "folklore, spooky, punk, eco-friendly"
},

{
tags: "VER",
url: "https://artistver.carrd.co/",
image:
"https://lh3.googleusercontent.com/d/1taaOAjCbOdhP7XUOUsVvfC0qFQwVdxoy",
category: ["A", "SC"],
bio: "Ver is an artist from Eastern Europe, residing in Edinburgh, Scotland. They like to write and draw stories about strange people and distant worlds.",
title: "fantasy, lore, monsters"
},

{
tags: "Mereida Fajardo",
url: "https://www.mereida.co.uk/",
image:
"https://lh3.googleusercontent.com/d/1ot7rKT8orXRbYg0rAKyAJYCeASEjzDTa",
category: ["A", "SC", "GN", "Z"],
bio: "I'm a comic and zine maker interested in the possibilities of the comics language and visual storytelling. I love playing with page layouts, paper folding and experimental reading.",
title: "experimental, playful, folklore, history, landscape"
},

{
tags: "Lost Pages",
url: "http://lostpages.co.uk",
image:
"https://lh3.googleusercontent.com/d/1cJWOcpCt4Hv9Lzd16tZbxoLL9n37PjBf",
category: ["A", "TT", "SG", "Z"],
bio: "Weird Magic, Occult and Mystical Role-Playing Games.",
title: "magic, occult, fantasy, weird"
},

{
tags: "Gustaffo Vargas",
url: "htp://gustaffovargas.com",
image: "https://lh3.googleusercontent.com/d/1c2DX7gfm2J_hbUFg-Vzr8V-cUWktVzsd",
category: ["A", "SC", "GN"],
bio: "Gustaffo Vargas is a Peruvian comic book artist and writer based in the UK. He is the creator of Peruvian Cyberpunk comics and has worked for MARVEL & IMAGE Comics among others.",
title: "sci-fi, adventure, action, crime, cyberpunk"
},

{
tags: "Will Humberstone",
url: "https://willhumberstone.com/",
image: "https://lh3.googleusercontent.com/d/108x19Sl4QU2ViY-KWf7j-IRQcIvh4WqM",
category: ["A", "SC", "TT", "Z"],
bio: "Comic artist and RPG maker based in London. Latest comic about cute demons playing music. New RPG about spooky witches in a swamp.",
title: "horror, fantasy"
},

{
tags: "Door Ajar Comics",
url: "https://linktr.ee/doorajarcomics",
image: "https://lh3.googleusercontent.com/d/1G2ayVcmr9_vVk_cYbKJteIS878b-HWzj",
category: ["A", "SC", "GN", "SG", "Z"],
bio: "Door Ajar Comics is a small press based in Edinburgh, creating work exploring the Queer, the Gothic, and the Uncanny, and what may skitter there, just out the corner of your eye.",
title: "horror, fantasy, queer, uncanny, surreal"
},

{
tags: "Sammy Ward ",
url: "https://ko-fi.com/sammywarddraws",
image: "https://lh3.googleusercontent.com/d/1pblTXh4P9YXBbhUYifgBAAJM_Y8qpBsz",
category: ["A", "SC", "Z"],
bio: "I’m a self taught, tiny creator making comics exploring nature, mythology and the paranormal, steeped in fantasy and horror.",
title: "fantasy, horror, folklore, paranormal, nature"
},

{
tags: "Furtive Shambles",
url: "https://furtiveshambles.com/",
image: "https://lh3.googleusercontent.com/d/10qQsyoTgWqu3rtTMWauTOW0Je7mTUaZg",
category: ["A", "TT", "SG", "BG", "Z"],
bio: "Furtive Shambles is an experimental game design co-op based in North Yorkshire. Our games blur the line between fantastical and  mundane, occult and  homely, absurd and sincere.",
title: "thoughtful, queer, folklore, horror, weird"
},

{
tags: "PJ Draws",
url: "http://www.PJDraws.com",
image: "https://lh3.googleusercontent.com/d/1qP3JCp5ZsvyRx_bTJq8-_3fYCuDUo4_L",
category: ["A", "SC", "GN", "Z"],
bio: "PJ Draws makes Comics that try for whimsy. Producing a range of Zines + larger Comics you might recognise them from Sensory: Life on the spectrum ",
title: "new talent, queer"
},

{
tags: "Axe Marnie",
url: "https://www.instagram.com/axe.handle",
image: "https://lh3.googleusercontent.com/d/1H5kaoHNUHWXb2brR-wt9wTi4-9JQcE8X",
category: ["A", "SC", "Z"],
bio: "Axe makes short, poetic comics on queerness, romance and disability through gothic fantasy. 2024 release Run Ragged tells of a dancer becoming werewolf, based on own experience.",
title: "queer, fantasy, horror, disability "
},

{
tags: "Tettix Games",
url: "http://tettixgames.com",
image: "https://lh3.googleusercontent.com/d/15RY7loGcLHSHN370YzpChC3C0vMKdnTk",
category: ["A", "SG", "BG"],
bio: "I'm a solo board game developer creating cartoonishly spooky games with a key focus on hand-inked artwork and dark humour.",
title: "horror, cosy, monsters"
},

{
tags: "Blackwell Games",
url: "http://www.blackwellwriter.com",
image: "https://lh3.googleusercontent.com/d/1cgK_UShOjwI_KHpgOejfUI80uYXIWgag",
category: ["A", "TT", "SG", "Z"],
bio: "Blackwell Games creates solo journalling and map drawing RPGS that focus on player creativity and building a unique emergent narrative that is different for each player. ",
title: "solo journaling, cosy, hopeful, creative"
},

{
tags: "ThirdBear Press",
url: "http://thirdbearpress.com",
image: "https://lh3.googleusercontent.com/d/1ndL3VIT1gmB8UTx9M2COB_pi3XLUgt1P",
category: ["A", "SC", "GN"],
bio: "ThirdBear Press is an indie comics publisher based in Scotland and run by Steven Ingram.  They publish BOXES Comic Magazine as well as graphic novels Holly and Burn With Me.",
title: "anthology, art comics, thoughtful, indie, slice of life"
},

{
tags: "I MISS MY FRIENDS' ART COLLECTIVE",
url: "https://linktr.ee/IMISSMYFRIENDScollective",
image: "https://lh3.googleusercontent.com/d/1zc1fOtqMTwffaOs2aklzV-vw-lxOLhw3",
category: ["A", "SC", "Z"],
bio: "We are ‘I MISS MY FRIENDS’, an artists collective of recently graduated pals hailing from all over the world! Come check us out for your fix of comics, artbooks and stickers!",
title: "anthology, spooky, fantasy, new talent"
},

{
tags: "University of Dundee",
url: "https://www.dundee.ac.uk/module/dj31017",
image: "https://lh3.googleusercontent.com/d/1zYm8JOo0ZlC5OOAIeSyIpJ2ltIZyFfWu",
category: ["A", "SC", "Z"],
bio: "The University of Dundee is a pioneer in the teaching of Comics Studies. This table will showcase some of the comic work produced by University of Dundee's students!",
title: " "
},

{
tags: "Biscuit Tin Comics",
url: "https://biscuittincomics.wixsite.com/biscuittincomics",
image: "https://lh3.googleusercontent.com/d/1Z9EhyabKk_-rNx-PqkcFqTsnVmqG4T61",
category: ["A", "SC", "Z"],
bio: "Four friends who love comics. Just like a biscuit tin has a variety of sweet baked treats, our collective has a variety of stories and genres for you to read!",
title: "queer, fantasy, sci-fi, whimsical"
},

{
tags: "Comics Youth",
url: "https://linktr.ee/Comicsyouth",
image: "https://lh3.googleusercontent.com/d/1DRG8fai78LvRoQUCwjFZJb9-swMAFoxx",
category: ["A", "SC", "GN", "Z"],
bio: "Comics Youth is a creative community organisation for young people aged 8-25, and we run Marginal Publishing House - the UK's first youth-led comics publisher.",
title: "anthology, new talent, autobiographical, fantasy"
},

{
tags: "CHIP Collective",
url: "https://chipcollective.co.uk/",
image: "https://lh3.googleusercontent.com/d/1FoKgwjffD9llZ-gFHY8ET6qlxtKlkgGM",
category: ["A", "SC", "GN", "Z"],
bio: "Along with personal work by the founders Cat Laird and Ashling Larkin, CHIP Collective makes informative comic anthologies on a wide range of topics to make positive social impact.",
title: "anthology, biography, autobiographical, fiction, fantasy"
},

{
tags: "Will Morris",
url: "https://whmorris.com/",
image: "https://lh3.googleusercontent.com/d/14Fwremxzh03JWe93dqtl364xvumR4zg6",
category: ["A", "SC", "GN"],
bio: "I am a comic artist that loves to delve into historic eras, folk tales and ancient ballads to tell fantasy stories about rascally characters, growing up and finding a purpose.",
title: "historical, fantasy, relationships, adventure, folklore"
},

{
tags: "Emseeitch",
url: "https://www.emseeitch.com/",
image: "https://lh3.googleusercontent.com/d/1Q0icc05Zd-z7Qpm3RPzKjYJzqCgrq5Zi",
category: ["A", "SC"],
bio: "I am a Scottish illustrator and comic creator specialising in creating characterful and humourous visual narratives, to engage young people in wildlife conservation and education.",
title: "nature, poetry, cute, educational, funny"
},

{
tags: "Belle Rowan",
url: "https://linktr.ee/BelleRowan",
image: "https://lh3.googleusercontent.com/d/1qSS6n20OAZuQiUhb0yGZDQrHyQTsOSaE",
category: ["A", "SC", "GN", "Z"],
bio: "Part-Time Comic Artist & Game Dev, debuting Valley of the Blind at TAGS fest 2! Makin' cool Zine/Comics/Graphic Novels for those that also love Sci-Fi, Folklore & Queer Stories!",
title: "sci-fi, folklore, queer, fantasy, romance"
},

{
tags: "Thomas Heitler Art",
url: "https://www.instagram.com/thomasheitler/",
image: "https://lh3.googleusercontent.com/d/1KV3gfP-YN7j_D2yozOHPF1kOFX7EiIid",
category: ["A", "SC", "Z"],
bio: "I am influenced by Celtic artwork, integrating these motifs into the visual language of a comic page by turning the boarders of a panel into a non-diegetic part of the story.",
title: "fantasy, celtic art, sci-fi"
},

{
tags: "Sloth Comics",
url: "https://www.slothcomics.co.uk/",
image: "https://lh3.googleusercontent.com/d/1CRnF9sB07vdxbBJ17u-CInqbga6UtK5i",
category: ["A", "SC", "GN"],
bio: "Sloth Comics has gone on to publish a host of French and English titles that are humorous or fantastical or both at the same time.",
title: "fantasy, comedy, epic, adventure"
},

{
tags: "Fistful of Crits",
url: "www.fistfulofcrits.co.uk",
image: "https://lh3.googleusercontent.com/d/1YqjnEdwEh1Q29RC1zCR_cL2tfSxoA9hk",
category: ["A", "TT", "SG"],
bio: "We make indie TTRPG games and D&D homebrew modules and content with a cutesy, bright aesthetic.",
title: "cute, handmade, cosy"
},

{
tags: "Shazleen Khan",
url: "https://shazleenkhan.com/",
image: "https://lh3.googleusercontent.com/d/13CI5kZoqYvjHNLJqYbJviRkVOgY9b4Ho",
category: ["A", "SC", "GN", "Z"],
bio: "Shazleen Khan is a comic artist and Illustrator, working in publishing. Their self-authored works often centre themes of cultural  identity and islamic mysticism. ",
title: "queer, autobiographical, slice of life, fantasy, drama"
},

{
tags: "Nytastic",
url: "https://nytastic.carrd.co/",
image: "https://lh3.googleusercontent.com/d/1GeiSiw0RL0VBrtW243HXRwb4kKIk4c3w",
category: ["A", "SC", "GN"],
bio: "‪Ny Ali (she/her) ‬is an illustrator and comic artist based here in Glasgow. You can find her hiding under her table or on her social media She likes tea.",
title: "humour, cosy, fantasy, mystery, light-hearted"
},

{
tags: "Julie Campbell Illustration",
url: "www.juliecampbelldraws.com",
image: "https://lh3.googleusercontent.com/d/1nxPmQmO4CxrefO_5t9pkyqGSJ6TLZCvg",
category: ["A", "SC", "Z"],
bio: "Julie’s comics focus on the journeys we go on in our lives, and takes a lot of inspiration from the natural world – depicted with bold lines and a few carefully chosen colours.",
title: "nature, journeys, thoughtful"
},

{
tags: "Will Tempest",
url: "http://willtempest.com",
image: "https://lh3.googleusercontent.com/d/1gh4vVQnbmWHw5vpBMSSOce62W_XQKGjc",
category: ["A", "SC", "GN", "TT"],
bio: "Will Tempest is an illustrator and cartoonist based in the UK. His work explores strange planets and bizarre civilisations through the lens of fantasy, sci-fi and horror.",
title: "fantasy, sci-fi, horror"
},

{
tags: "Schnumn",
url: "https://www.schnumn.com",
image: "https://lh3.googleusercontent.com/d/1_POcO6mDNidGlPjZTE_4eyVmMLe4LfwD",
category: ["A", "SC", "GN", "Z"],
bio: "Introspective comics about mental health, neurodivergence and the general struggles of being a human being in an overwhelming world. ",
title: "autobiographical, anthology, dsability, neurodivergent, thoughtful"
},

{
tags: "MDPenman",
url: "https://linktr.ee/mdpenman",
image: "https://lh3.googleusercontent.com/d/1QAvTqTDvc57iwO8fWBAfzZsPAGKYEe5d",
category: ["A", "SC", "GN", "Z"],
bio: "Mark Penman is an illustrator, comic artist  and lecturer based in the UK. He likes fantasy, myth, legend and enjoys nothing more than drawing weird little guys.",
title: "dark fantasy, horror, funny, creeps"
},

{
tags: "The December Garden",
url: "https://www.instagram.com/thedecembergarden/",
image: "https://lh3.googleusercontent.com/d/1U-ASib7SDxRUS3HRinVanmHGjLW1aTkt",
category: ["A", "SC", "Z"],
bio: "I create gothic nonsense comics and stickers!",
title: "gothic, surreal, greyscale, thoughtful, emo"
},

{
tags: "DishSoapAddict",
url: "http://instagram.com/dishsoapaddict",
image: "https://lh3.googleusercontent.com/d/1wbpUGB-Bb1UkezLEZvWkQ_GldNkg0Ams",
category: ["A", "SC", "Z"],
bio: "Simon is a polish visual storyteller. His comics tackle themes of identity, community and friendship. Most (if not all) are based on his personal experiences. ",
title: "retrospective, bittersweet, grounded"
},

{
tags: "Rat Wave Game House",
url: "http://ratwave.uk",
image: "https://lh3.googleusercontent.com/d/1a8TQiGjCP6eyIcYobdgyBt7iIeVpEkHA",
category: ["A", "TT", "SG"],
bio: "Rat Wave Game House is the design imprint for Kayla Dice, an award winning TTRPG creator, former comedian and wrestler, who focuses her work on themes of connection and alienation",
title: "queer, trans, social realism, thoughtful, alternative"
},

{
tags: "Tom Humberstone",
url: "http://tomhumberstone.com",
image: "https://lh3.googleusercontent.com/d/1PlT5j2Fzzu11jrgNuXUduNSLJ8iSaigf",
category: ["A", "SC", "GN", "Z"],
bio: "Tom Humberstone is the award-winning comic artist behind Suzanne: The Jazz Age Godess of Tennis and Solipsistic Pop.",
title: "historical fiction, poetry comics, film criticism, non-fiction, political"
},


]
},

computed: {
filteredAndSearched: function () {
return this.projects.filter((project) => {
// optional to have console.log
console.log("this.currentFilter", this.currentFilter);
return (
project.title.toLowerCase().includes(this.search.toLowerCase()) &&
project.category.indexOf(this.currentFilter) !== -1
);
});
}
},

methods: {
setFilter: function (project) {
this.currentFilter = project;
}
}
});