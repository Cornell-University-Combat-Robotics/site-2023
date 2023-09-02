// Keep track of the current category.
// this will be set over time by the script
let currentSubteam = "leads";

// data for each team member.
// The key is an identifier for the member (usually lowercase name,
// hyphens instead of spaces)
const teamData = {
  // "john-subteam": {
  //   "name": "John Subteam",
  //   "img_path": "images/team/members/john.jpg",
  //   "position": "Subteam Lead",
  //   "stats": [
  //     ["Speed", 10],
  //     ["Strength", 80],
  //     ["CAD", 50]
  //   ]
  // },
  // "a": {
  //   "name": "AAAAAAAA",
  //   "img_path": "images/team/members/aaa.bmp",
  //   "position": "Vice Subteam Lead",
  //   "stats": [
  //     ["Consume", 100],
  //     ["Consume", 100],
  //     ["Solidworks", 25]
  //   ]
  // },
  // "mike-subteam": {
  //   "name": "Mike Subteam",
  //   "img_path": "images/team/members/mike.bmp",
  //   "position": "Subteam Member",
  //   "stats": [
  //     ["Knitting", 10],
  //     ["Crochet", 80],
  //     ["Alcoholism", 50]
  //   ]
  // },
  "bruno-tassari": {
    name: "Bruno Tassari",
    img_path: "images/team/members/Bruno.jpg",
    position: "Marketing Member // Former Team Lead (2022-2023) // Former Vice Team Lead (2021-2022)",
    stats: [
      ["Anime Trivia", 90],
      ["A Freak in the Google Sheets", 70],
      ["Epic Jokes", 40],
    ],
    linkedin: "https://www.linkedin.com/in/bruno-tassari-18928b19b/",
  },
  "colin-rodriguez": {
    name: "Colin Rodriguez",
    img_path: "images/team/members/Colin.jpg",
    position: "Marketing Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/colin-rodriguez-andrew/",
  },
  "linda-hu": {
    name: "Linda Hu",
    img_path: "images/team/members/Linda.jpg",
    position: "Marketing Subteam Lead",
    stats: [
      ["Drawing", "70"],
      ["Punctuality", "90"],
      ["Playing Genshin", "30"],
    ],
    linkedin: "https://www.linkedin.com/in/linda-ly-hu/",
  },
  "luke-murphy": {
    name: "Luke Murphy",
    img_path: "images/team/members/Luke.jpg",
    position: "Marketing Member // Former Vice Team Lead (2022-2023)",
    stats: [
      ["Website Skills", "100"],
      ["CAD", "10"],
      ["Pixel Art", "60"],
    ],
    linkedin: "https://www.linkedin.com/in/luke-murphy-09659b22a/",
  },
  "molly-drumm": {
    name: "Molly Drumm",
    img_path: "images/team/members/Molly.jpg",
    position: "Marketing Member // Former Sportsman Vice Subteam Lead (2023)",
    stats: [
      ["Quirkiness", "90"],
      ["Diet", "10"],
      ["Vegemite Eating", "100"],
    ],
    linkedin: "https://www.linkedin.com/in/molly-drumm-a4430a208/",
  },
  "ruby-wang": {
    name: "Ruby Wang",
    img_path: "images/team/members/Ruby-Wang.jpg",
    position: "Marketing Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/rubywang1222/",
  },
  "sardor-rahmatulloev": {
    name: "Sardor Rahmatulloev",
    img_path: "images/team/members/Sardor.jpg",
    position: "Vice Team Lead",
    stats: [
      ["Air Bending", "70"],
      ["GitHub", "10"],
      ["Pixel Art", "40"],
    ],
    linkedin: "https://www.linkedin.com/in/sardor-rahmatulloev/",
  },
  "blaze-ezlakowski": {
    name: "Blaze Ezlakowski",
    img_path: "images/team/members/Blaze.jpg",
    position: "Firmware Member // Former Firmware Vice Subteam Lead (2022)",
    stats: [
      ["Unicycle Riding", 50],
      ["Having Siblings", 90],
      ["Vending Machine Interest", 80],
    ],
    linkedin: "https://www.linkedin.com/in/blaze-ezlakowski-25b3731b7",
  },
  "ethan-zhang": {
    name: "Ethan Zhang",
    img_path: "images/team/members/Ethan.jpg",
    position: "Firmware Subteam Lead",
    stats: [
      ["Fire Bending", 70],
      ["Cursed Knowledge", 20],
      ["Sniping", 100]
    ],
    linkedin: "https://www.linkedin.com/in/empzhang/",
  },
  "grace-lim": {
    name: "Grace Lim",
    img_path: "images/team/members/Grace.jpg",
    position: "Firmware Vice Subteam Lead",
    stats: [
      ["Handwriting", 100],
      ["Being at Upson", 70],
      ["Playing Genshin Consistently", 10],
    ],
    linkedin: "https://www.linkedin.com/in/graceelimm/",
  },
  "katie-huntley": {
    "name": "Katie Huntley",
    "img_path": "images/team/members/Katie.jpg",
    "position": "Firmware Member",
    "stats": [
      ["sleep schedule", 90],
      ["craftiness", 70],
      ["español", 60]
    ],
    "linkedin": "https://www.linkedin.com/in/katieahuntley/"
  },
  "richard-jin": {
    name: "Richard Jin",
    img_path: "images/team/members/Richard.jpg",
    position: "Former Firmware Subteam Lead (2022-2023)",
    stats: [
      ["Time Complexity Analysis", 70],
      ["Fanny Pack Wearing", 10],
      ["GitHub", 40],
    ],
    linkedin: "https://www.linkedin.com/in/richard-jin/",
  },
  "shao-stassen": {
    name: "Shao Stassen",
    img_path: "images/team/members/Shao.jpg",
    position: "Firmware Member",
    stats: [
      ["Github", "90"],
      ["Debugging", "20"],
      ["Public Speaking", "40"],
    ],
    linkedin: "",
  },
  "sebastian-rivera": {
    name: "Sebastian Rivera",
    img_path: "images/team/members/Sebastian.jpg",
    position: "Team Lead // Former Firmware Vice Subteam Lead (2022-2023)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/sebastian-rivera-048478222/",
  },
  "shawn-chen": {
    name: "Shawn Chen",
    img_path: "images/team/members/Shawn.jpg",
    position: "Firmware Member",
    stats: [
      ["Hoodie and Jean Combo", 80],
      ["Attending Socials", 5],
      ["Impersonating Polish People", 100],
    ],
    linkedin: "https://www.linkedin.com/in/shawn-siyuanchen",
  },
  "anna-boese": {
    name: "Anna Boese",
    img_path: "images/team/members/Anna.jpg",
    position: "Kinetic Subteam Lead // Former Kinetic Vice Subteam Lead (2022)",
    stats: [
      ["Hair Color Consistency", 10],
      ["Short Term Memory", 40],
      ["Adaptability", 90],
    ],
    linkedin: "https://www.linkedin.com/in/anna-boese-4a304819b/",
  },
  "isaac-newcomb": {
    name: "Isaac Newcomb",
    img_path: "images/team/members/Isaac.jpg",
    position: "Kinetic Member // Former Kinetic Subteam Lead (2022-2023)",
    stats: [
      ["Robot Piloting", 90],
      ["Scooter Skills", 80],
      ["Having Time to Compose the CRCCU Theme Song", 20],
    ],
    linkedin: "https://linkedin.com/in/isaacdnew",
  },
  "james-courtenay": {
    name: "James Courtenay",
    img_path: "images/team/members/James C.jpg",
    position: "Kinetic Member // Kinetic Vice Subteam Lead (2023)",
    stats: [],
    linkedin: "",
  },
  "james-lasalle": {
    name: "James LaSalle",
    img_path: "images/team/members/James L.jpg",
    position: "Kinetic Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/james-lasalle-589860256/",
  },
  "mohammed-chowdhury": {
    name: "Mohammed Chowdhury",
    img_path: "images/team/members/Mohammed.jpg",
    position: "Kinetic Member",
    stats: [
      ["CAD", 85],
      ["Finding ESCs", 60],
      ["Vision", 30],
    ],
    linkedin: "https://www.linkedin.com/in/mac528/",
  },
  "stella-taglich": {
    name: "Stella Taglich",
    img_path: "images/team/members/Stella.jpg",
    position: "Kinetic Vice Subteam Lead",
    stats: [
      ["Bending Electronics", 80],
      ["Finding Car Keys", 10],
      ["Sniping", 70],
    ],
    linkedin: "https://www.linkedin.com/in/stellataglich/",
  },
  "zander-knight": {
    name: "Zander Knight",
    img_path: "images/team/members/Zander.jpg",
    position: "Kinetic Member",
    stats: [
      ["Battlebots Knowledge", 20],
      ["Basement Hospitality", 20],
      ["Computer Science Awareness", 20],
    ],
    linkedin: "https://www.linkedin.com/in/zander-knight-3aab8724a/",
  },
  "alex-jenkins": {
    name: "Alex Jenkins",
    img_path: "images/team/members/Alex.jpg",
    position: "Sportsman Vice Subteam Lead",
    stats: [
      ["Punctuality", "80"],
      ["Dragon Training", "100"],
      ["Spelling", "20"],
    ],
    linkedin: "https://www.linkedin.com/in/alex-jenkins-201214223/",
  },
  "caleb-schlissel": {
    name: "Caleb Schlissel",
    img_path: "images/team/members/Caleb.jpg",
    position: "Sportsman Subteam Lead",
    stats: [
      ["Big Brain", 100],
      ["Social Life", 40],
      ["Pancreas", 10],
    ],
    linkedin: "https://www.linkedin.com/in/caleb-schlissel-0129/",
  },
  "charles-liu": {
    name: "Charles Liu",
    img_path: "images/team/members/Charles.jpg",
    position: "Sportsman Member",
    stats: [
      ["Being Tall", 50],
      ["Big Brain", 10],
      ["Sportsman Sunshine", 70],
    ],
    linkedin: "https://www.linkedin.com/in/charles-liu-035190181/",
  },
  "marcus-esposito": {
    name: "Marcus Esposito",
    img_path: "images/team/members/Marcus.jpg",
    position: "Sportsman Member // Former Sportsman Subteam Lead (2022-2023)",
    stats: [
      ["Punctuality", "90"],
      ["Explaining Things", "60"],
      ["Intimidation", "0"],
    ],
    linkedin: "https://www.linkedin.com/in/marcus-esposito/",
  },
  "narayan-rueppel": {
    name: "Narayan Rueppel",
    img_path: "images/team/members/Narayan.jpg",
    position: "Sportsman Member",
    stats: [
      ["Cargo Pants", "100"],
      ["Getting Sniped", "100"],
      ["Punctuality", "50"],
    ],
    linkedin: "https://www.linkedin.com/in/narayan-rueppel-668861256/",
  },
  "sana-gaya": {
    name: "Sana Gaya",
    img_path: "images/team/members/Sana.jpg",
    position: "Sportsman Member",
    stats: [],
    linkedin: "",
  },
  "zarif-pathan": {
    name: "Zarif Pathan",
    img_path: "images/team/members/Zarif.jpg",
    position: "Sportsman Member",
    stats: [
      ["Earth Bending", 40],
      ["Circuitry", 80],
      ["Drip", 60],
    ],
    linkedin: "https://www.linkedin.com/in/zarif-pathan/",
  },
  william: {
    name: "William Murphy",
    img_path: "images/team/members/William.jpg",
    position: "Marketing Vice Subteam Lead // Former Sportsman VSL (2022)",
    stats: [
      ["Meow", 50],
      ["Cuteness", 100],
      ["Attendance", 10],
    ],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "shubham-mathur": {
    name: "Shubham Mathur",
    img_path: "images/team/members/shubham-mathur.jpg",
    position: "Alum 2022 // Former Sportsman (2019-2022) // Co-Founder",
    stats: [],
    linkedin: "https://www.linkedin.com/in/shubham-m-3a41a9133/",
  },
  "rochelle-barsz": {
    name: "Rochelle Barsz",
    img_path: "images/team/members/rochelle-barsz.jpg",
    position: "Alum 2022 // Former Firmware Subteam Lead (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/rochelle-barsz/",
  },
  "michelle-zhou": {
    name: "Michelle Zhou",
    img_path: "images/team/members/michelle-zhou.jpg",
    position: "Alum 2022 // Former Sportsman Subteam Lead (2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/michelle-z-20b22b139/",
  },
  "rob-measner": {
    name: "Rob Measner",
    img_path: "images/team/members/rob-measner.jpg",
    position: "Alum 2021 // Former Firmware (2019-2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/robert-measner-1a4108196/",
  },
  esquared: {
    name: "Erhunmwunse Eghafona",
    img_path: "images/team/members/esquared.jpg",
    position: "Alum 2022 // Former Kinetic (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/eeghafona/",
  },
  "kevin-liu": {
    name: "Kevin Liu",
    img_path: "images/team/members/kevin-liu.jpg",
    position: "Alum 2022 // Former Sportsman Subteam Lead (2020- 2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/kevin-liu-308546230/",
  },
  "ash-siddiqui": {
    name: "Ash Siddiqui",
    img_path: "images/team/members/ash-siddiqui.jpg",
    position: "Alum 2022 // Former Firmware Vice Subteam Lead (2021)",
    stats: [],
    linkedin: "",
  },
  "alex-salonga": {
    name: "Alex Salonga",
    img_path: "images/team/members/alex-salonga.jpg",
    position: "Alum 2022 // Former Marketing Vice Subteam Lead (2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/alexander-salonga-4a0583177/",
  },
  "mo-moghaddasi": {
    name: "Mohammad Ali Moghaddasi",
    img_path: "images/team/members/mo-moghaddasi.jpg",
    position: "Alum 2022 // Former Kinetic (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/mohammad-ali-moghaddasi-7797a5143/",
  },
  "ricky-wang": {
    name: "Ricky Wang",
    img_path: "images/team/members/ricky-wang.jpg",
    position: "Alum 2022 // Former Kinetic Subteam Lead (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/rickywang0/",
  },
  "sofie-halpern": {
    name: "Sofie Halpern",
    img_path: "images/team/members/Sofie.jpg",
    position:
      "Alum 2022 // Kinetic (2019-2022) // Marketing (2022) // First Team Lead (2019-2022) // Co-Founder",
    stats: [],
    linkedin: "https://www.linkedin.com/in/sofie-halpern/",
  },
  "stefan-bell": {
    name: "Stefan Bell",
    img_path: "images/team/members/stefan-bell.jpg",
    position: "Alum 2021 // Former Kinetic Subteam Lead (2020-2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/stefan-bell-sb855/",
  },
  "kaitlyn-hoxha": {
    name: "Kaitlyn Hoxha",
    img_path: "images/team/members/Kaitlyn.jpg",
    position: "Alum 2022 // Former Marketing Subteam Lead (2020-2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/kaitlyn-hoxha/",
  },
  "richard-kang": {
    name: "Richard Kang",
    img_path: "images/team/members/Richard-Kang.jpg",
    position: "Alum 2022 // Former Firmware (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/richard-kang-bb923824a/",
  },
  "lucien-eckert": {
    name: "Lucien Eckert",
    img_path: "images/team/members/Lucien.jpg",
    position: "Alum 2023 // Former Marketing Vice Subteam Lead (2022-2023)",
    stats: [
      ["Game Development", 70],
      ["Escaping from Captivity", 40],
      ["Writing Inline CSS", 100],
    ],
    linkedin: "https://www.linkedin.com/in/lucien-eckert/",
  },
  "maya-zamor": {
    name: "Maya Zamor",
    img_path: "images/team/members/Maya.jpg",
    position: "Alum 2023 // Former Marketing Subteam Lead (2022-2023)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/maya-zamor-a9420b188",
  },
  "edith-chen": {
    name: "Edith Chen",
    img_path: "images/team/members/Edith-Chen.jpg",
    position: "Alum 2023 // Former Marketing Subteam Lead (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/chen-edith/",
  },
  "spencer-hurst": {
    name: "Spencer Hurst",
    img_path: "images/team/members/Spencer.jpg",
    position: "Alum 2023 // Former Kinetic (2021-2023)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/spencer-hurst-918627191/",
  },
};

const kinetic = [
  "anna-boese", 
  "stella-taglich", 
  "isaac-newcomb", 
  "james-courtenay", 
  "james-lasalle", 
  "mohammed-chowdhury", 
  "zander-knight"
];
const sportsman = [
  "caleb-schlissel", 
  "alex-jenkins", 
  "charles-liu",
  "marcus-esposito", 
  "narayan-rueppel", 
  "sana-gaya", 
  "zarif-pathan"
];
const marketing = [
  "linda-hu", 
  "bruno-tassari", 
  "colin-rodriguez", 
  "luke-murphy", 
  "molly-drumm", 
  "ruby-wang",
  "sardor-rahmatulloev"
];
const firmware = [
  "ethan-zhang", 
  "grace-lim", 
  "blaze-ezlakowski", 
  "katie-huntley", 
  "richard-jin", 
  "sebastian-rivera",
  "shao-stassen", 
  "shawn-chen"
];
const alum = [
  "lucien-eckert", 
  "spencer-hurst", 
  "edith-chen", 
  "maya-zamor", 
  "sofie-halpern", 
  "kaitlyn-hoxha", 
  "michelle-zhou", 
  "rochelle-barsz", 
  "esquared", 
  "shubham-mathur", 
  "ricky-wang", 
  "ash-siddiqui", 
  "mo-moghaddasi", 
  "alex-salonga", 
  "kevin-liu", 
  "rob-measner", 
  "stefan-bell"
];
const fullteam = [];
const leads = [
  "sebastian-rivera",
  "sardor-rahmatulloev",
  "linda-hu",
  "william",
  "ethan-zhang",
  "grace-lim",
  "anna-boese",
  "stella-taglich",
  "caleb-schlissel",
  "alex-jenkins"
]; // set manually
// for (key in teamData) {
//   let member = teamData[key];
//   let pos = member["position"];
//   if (pos.includes("Alum")) {
//     alum.push(key);
//   } else {
//     fullteam.push(key);
//     if (pos.includes("Kinetic")) {
//       kinetic.push(key);
//     } else if (pos.includes("Sportsman")) {
//       sportsman.push(key);
//     } else if (pos.includes("Marketing")) {
//       marketing.push(key);
//     } else if (pos.includes("Firmware")) {
//       firmware.push(key);
//     }
//   }
// }

// This maps each subteam to a description, and an array of strings that
// match the identifiers of its members in teamData.
const subteamData = {
  // keys for all kinetic members
  kinetic: {
    members: kinetic,
    //["anna-boese", "stella-taglich", "isaac-newcomb", "james-courtenay", "james-lasalle", "mohammed-chowdhury", "zander-knight"],
    description:
      "The Kinetic subteam designs and manufactures a combat robot in a high-kinetic-energy class, emphasizing damage, durability, and a competitive edge. Kinetic integrates all sections of robot design, including: the chassis, which involves the shell, armor and internal structure of the robot; the weapon, which involves the damage-dealing components and selects electronics to power them; and the powertrain, which involves the locomotion system.  The final robot is a combination of these assets into a reliable, compact system.",
    // topics: {
    //   "Design": {
    //     blurb: "Designing blurb.",
    //     img_paths: ["images/team/members/john.jpg"],
    //   },
    //   "Research": {
    //     blurb: "REEEEEEEEEEASSSSSSSSSSSEEEEEAAAAAARCCCCCCCCCCHHHHHHH!!!! YOOOOOOOOOOOOOO.",
    //     img_paths: ["images/team/members/mike.bmp"],
    //   },
    //   "Build": {
    //     blurb: "Building blurb. We buildin af",
    //     img_paths: ["images/firmware-subteam.jpg"],
    //   },
    // }
  },
  // keys for all sportsman members
  sportsman: {
    members: sportsman,
    //["caleb-schlissel", "alex-jenkins", "charles-liu","marcus-esposito", "narayan-rueppel", "sana-gaya", "zarif-pathan"]
    description:
      "The Sportsman subteam designs and manufactures a combat robot in the Sportsman class, a low-kinetic-energy combat robot class that emphasizes creativity, design ingenuity, and interdisciplinary collaboration. Without the crutch of raw power, Sportsman has to find unique ways to dominate the competition. They also spend a really, really long time thinking of each robot's name.",
  },
  // keys for all marketing members
  marketing: {
    members: marketing,
    //["linda-hu", "bruno-tassari", "colin-rodriguez", "luke-murphy", "molly-drumm", "ruby-wang""]
    description:
      "Our Marketing subteam organizes team events, manages the budget, codes the website, maintains alumni and corporate relationships, and secures funding for the team. Members manage the team's image by implementing new website features, and developing creative designs for merchandise and promotional material (including our video game!). Finally, marketing collectively displays CRC's progress and personality through social media. Most of the subteam's work is structured around our main projects, as well as sporadic events that occur throughout the school year.",
  },
  // keys for all firmware members
  firmware: {
    members: firmware,
    //["ethan-zhang", "grace-lim", "blaze-ezlakowski", "katie-huntley", "richard-jin", "shao-stassen", "shawn-chen"]
    description:
      "The Firmware subteam works on applying artificial intelligence techniques and autonomous capabilities to combat robots from past years to give them extra functionality. Every single year, Firmware takes a previous year's robot and revamps it through a new coding project, whether it's adding facial recognition or path following.",
  },
  full: {
    members: fullteam,
    description:
      "The whole burrito. Click any of the buttons above to learn about each of our four subteams!",
  },
  leads: {
    members: leads,
    description:
      "Our full team and subteam leads keep CRC running smoothly. Through weekly sync meetings and our tight-knit culture, they help ensure our team functions efficiently as a unified whole.",
  },
  alumni: {
    members: alum,
    //["lucien-eckert", "spencer-hurst", "edith-chen", "maya-zamor", "sofie-halpern", "kaitlyn-hoxha", "michelle-zhou", "rochelle-barsz", "esquared", "shubham-mathur", "ricky-wang", "ash-siddiqui", "mo-moghaddasi", "alex-salonga", "kevin-liu", "rob-measner", "stefan-bell"]
    description:
      "Once you're on CRC, you're a CRC member for life. Our team has a vibrant alumni community, and we love staying connected post-graduation!",
  },
};

/**
 * This changes the page to show data on the current subteam.
 * It generates cards for each subteam member, and clears old ones.
 * @param {string} subteam the subteam identifier in subteamData
 */
const setCategory = (subteam) => {
  const teamName = document.getElementById("team-name");
  teamName.innerHTML = `${subteam[0].toUpperCase()}${subteam.slice(1)}`;
  const teamDescription = document.getElementById("team-description");
  teamDescription.innerHTML = subteamData[subteam]["description"];
  const teamCards = document.getElementById("team-cards");
  // clear all existing member cards
  // note: do this backwards so the collection doesn't reorder!!!!
  const nodes = teamCards.childNodes;
  for (let i = nodes.length - 1; i > 0; i--) {
    nodes[i].remove();
  }
  const members = subteamData[subteam]["members"];
  members.forEach((memberKey) => {
    const memberData = teamData[memberKey];
    // construct an element for each team member
    const memberElement = createMemberCard(memberData);
    teamCards.appendChild(memberElement);
  });
  currentSubteam = subteam;
};

/**
 * This creates a card representing the passed in memberData, and appends it
 * to the page. Called by setCategory.
 * @param {Object} memberData entry of teamData for the card's member
 * @returns
 */
const createMemberCard = (memberData) => {
  const memberCard = document.createElement("div");
  // create the card
  memberCard.className = "card";
  // create and attach the image
  const profileImg = document.createElement("img");
  profileImg.src = memberData["img_path"];
  memberCard.appendChild(profileImg);
  // create and attach the description
  const description = document.createElement("div");
  description.className = "desc";
  const name = document.createElement("p");
  name.className = "name";
  name.innerHTML = memberData["name"];
  description.appendChild(name);
  const position = document.createElement("p");
  position.innerHTML = memberData["position"];
  description.appendChild(position);
  memberCard.appendChild(description);
  // create and attach the stats
  const stats = document.createElement("div");
  stats.className = "stats";
  memberData["stats"].forEach(([name, value]) => {
    const stat = document.createElement("div");
    stat.className = "member-stat";
    dispatchEvent.className = "member-stat";
    const statName = document.createElement("span");
    statName.className = "stat-name";
    statName.innerHTML = name;
    stat.appendChild(statName);
    const statBG = document.createElement("div");
    statBG.className = "stat-bg";
    const statFG = document.createElement("div");
    statFG.className = "stat-value";
    statFG.style = `width: ${value}%;`;
    statBG.appendChild(statFG);
    stat.appendChild(statBG);
    // add the stat
    stats.appendChild(stat);
  });
  memberCard.appendChild(stats);
  // create and attach stat button, socials eventually
  // and set up interactivity
  const links = document.createElement("div");
  links.className = "member-links";
  if (memberData["stats"].length > 0) {
    const statsButton = document.createElement("button");
    statsButton.className = "stats-button";
    statsButton.innerHTML = "Stats";
    statsButton.onpointerover = () => {
      stats.setAttribute("style", "transform: translate(0%, 0%);");
    };
    statsButton.onpointerout = () => {
      stats.setAttribute("style", "transform: translate(-150%, 0%);");
    };
    links.appendChild(statsButton);
  }
  // attach linkedin, if applicable
  if (memberData["linkedin"].length > 0) {
    const linkedInButton = document.createElement("a");
    linkedInButton.className = "member-link-button";
    linkedInButton.href = memberData["linkedin"];
    const linkedInIcon = document.createElement("img");
    linkedInIcon.src = "images/icons/linkedin.png";
    linkedInButton.appendChild(linkedInIcon);
    links.appendChild(linkedInButton);
  }
  memberCard.appendChild(links);
  // return the card
  return memberCard;
};

/*  NOTE: This is the html structure of what a card should look like. 
    The function above should create this for a members. 
<div class="card">
          <img src="images/team/members/john.jpg" alt="images/team/members/john.jpg" class="headshot">
          <div class="desc">
            <p class="name">John Subteam</p>
            <p>Outreach & Design</p>
            <div class="member-links">
              <button class="stats-button">Stats</button>
            </div>
          </div>
          <div class="stats">
            <div class="member-stat">
              <span class="stat-name">Spook</span>
              <div class="stat-bg">
                <div class="stat-value" style="width: 60%;"></div>
              </div>
            </div>
            <div class="member-stat">
              <span class="stat-name">CAD</span>
              <div class="stat-bg">
                <div class="stat-value" style="width: 90%;"></div>
              </div>
            </div>
            <div class="member-stat">
              <span class="stat-name">Cooking</span>
              <div class="stat-bg">
                <div class="stat-value" style="width: 21%;"></div>
              </div>
            </div>
          </div>
        </div>

*/

/* #TODO: Team description widget. This is in-progress */

/**
 * selectTopic takes in a topicKey, and sets the topic description widget
 * to display relevant data. Currently not implemented!
 * @param {string} topicKey
 */
const selectTopic = (topicKey) => {
  const topicData = subteamData[currentSubteam]["topics"][topicKey];
  const topicImgs = topicData["img_paths"];
  const topicDesc = topicData["blurb"];
  const descriptionElement = document.getElementById("team-info-description");
  descriptionElement.getElementsByTagName("h3")[0].innerHTML = topicKey;
  descriptionElement.getElementsByTagName("p")[0].innerHTML = topicDesc;
  const gallery = descriptionElement.getElementsByClassName("images")[0];
  // remove existing images
  gallery.childNodes.forEach((node) => node.remove());
  // add new images
  topicImgs.forEach((path) => {
    const newImg = document.createElement("img");
    newImg.src = path;
    gallery.appendChild(newImg);
  });
};
