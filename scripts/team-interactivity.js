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
  "colin-rodriguez": {
    name: "Colin Rodriguez",
    img_path: "images/team/members/colin-rodriguez.jpg",
    position: "Marketing Member",
    stats: [
      ["Sleep schedule", 20],
      ["BizRizz", 100],
      ["Computer Viruses", 100]
    ],
    linkedin: "https://www.linkedin.com/in/colin-rodriguez-andrew/",
  },
  "linda-hu": {
    name: "Linda Hu",
    img_path: "images/team/members/linda-hu.jpg",
    position: "Marketing Member // Former Marketing Subteam Lead (2023-2024)",
    stats: [
      ["Drawing", "60"],
      ["Earrings", "80"],
      ["Not Playing Genshin", "100"],
    ],
    linkedin: "https://www.linkedin.com/in/linda-ly-hu/",
  },
  "luke-murphy": {
    name: "Luke Murphy",
    img_path: "images/team/members/luke-murphy.jpg",
    position: "Alum 2024 // Former Vice Team Lead (2022-2023), Marketing (2024)",
    stats: [
      ["Website Skills", "100"],
      ["CAD", "10"],
      ["Pixel Art", "60"],
    ],
    linkedin: "https://www.linkedin.com/in/luke-murphy-09659b22a/",
  },
  "molly-drumm": {
    name: "Molly Drumm",
    img_path: "images/team/members/molly-drumm.jpg",
    position: "Alum 2024 // Former Sportsman Vice Subteam Lead (2023), Marketing (2024)",
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
    position: "Alum 2024 // Marketing (2022-2024)",
    stats: [
      ["Zoning Out", 70],
      ["Drawing", 100],
      ["AEM", 10]
    ],
    linkedin: "https://www.linkedin.com/in/rubywang1222/",
  },
  "sardor-rahmatulloev": {
    name: "Sardor Rahmatulloev",
    img_path: "images/team/members/sardor-rahmatulloev.jpg",
    position: "Marketing Member // Former Team Co-Lead (2023-2024)",
    stats: [
      ["Air Bending", "70"],
      ["GitHub", "10"],
      ["Pixel Art", "40"],
    ],
    linkedin: "https://www.linkedin.com/in/sardor-rahmatulloev/",
  },
  "ethan-zhang": {
    name: "Ethan Zhang",
    img_path: "images/team/members/ethan-zhang.jpg",
    position: "Autonomous Member // Former Autonomous Subteam Co-Lead (2023-2024)",
    stats: [
      ["Fire Bending", 70],
      ["Cursed Knowledge", 20],
      ["Sniping", 100]
    ],
    linkedin: "https://www.linkedin.com/in/empzhang/",
  },
  "grace-lim": {
    name: "Grace Lim",
    img_path: "images/team/members/grace-lim.jpg",
    position: "Autonomous Member // Former Autonomous Subteam Co-Lead (2023)",
    stats: [
      ["Handwriting", 100],
      ["Being at Upson", 70],
      ["Playing Genshin Consistently", 10],
    ],
    linkedin: "https://www.linkedin.com/in/graceelimm/",
  },
  "katie-huntley": {
    "name": "Katie Huntley",
    "img_path": "images/team/members/katie-huntley.jpg",
    "position": "Autonomous Member",
    "stats": [
      ["sleep schedule", 90],
      ["craftiness", 70],
      ["español", 60]
    ],
    "linkedin": "https://www.linkedin.com/in/katieahuntley/"
  },
  "richard-jin": {
    name: "Richard Jin",
    img_path: "images/team/members/richard-jin.jpg",
    position: "Alum 2024 // Former Autonomous Subteam Lead (2022-2023)",
    stats: [
      ["Time Complexity Analysis", 70],
      ["Fanny Pack Wearing", 10],
      ["GitHub", 40],
    ],
    linkedin: "https://www.linkedin.com/in/richard-jin/",
  },
  "shao-stassen": {
    name: "Shao Stassen",
    img_path: "images/team/members/shao-stassen.jpg",
    position: "Autonomous Member // Former Autonomous Subteam Co-Lead (2023-2024)",
    stats: [
      ["Github", "90"],
      ["Debugging", "20"],
      ["Public Speaking", "40"],
    ],
    linkedin: "https://www.linkedin.com/in/shaostassen/",
  },
  "sebastian-rivera": {
    name: "Sebastian Rivera",
    img_path: "images/team/members/sebastian-rivera.jpg",
    position: "TL Advisor // Former Autonomous Vice Subteam Lead (2022-2023), Former Team Co-Lead (2023-2024)",
    stats: [
      ["Wiffleball", 80],
      ["Updating GCal", 20],
      ["Thinking about Ryan Gosling", 100]
    ],
    linkedin: "https://www.linkedin.com/in/sebastian-rivera-048478222/",
  },
  "shawn-chen": {
    name: "Shawn Chen",
    img_path: "images/team/members/shawn-chen.jpg",
    position: "Alum 2023 // Autonomous (2023)",
    stats: [
      ["Hoodie and Jean Combo", 80],
      ["Attending Socials", 5],
      ["Impersonating Polish People", 100],
    ],
    linkedin: "https://www.linkedin.com/in/shawn-siyuanchen",
  },
  "anna-boese": {
    name: "Anna Boese",
    img_path: "images/team/members/anna-boese.jpg",
    position: "Kinetic Member, MechE Trainer // Former Kinetic Subteam Co-Lead (2023) // Former Kinetic Vice Subteam Lead (2022)",
    stats: [
      ["Hair Color Consistency", 10],
      ["Short Term Memory", 40],
      ["Adaptability", 90],
    ],
    linkedin: "https://www.linkedin.com/in/anna-boese-4a304819b/",
  },
  "isaac-newcomb": {
    name: "Isaac Newcomb",
    img_path: "images/team/members/isaac-newcomb.jpg",
    position: "Alum 2024 // Former Kinetic Subteam Lead (2022-2023), Kinetic (2024)",
    stats: [
      ["Robot Piloting", 90],
      ["Scooter Skills", 80],
      ["Having Time to Compose the CRCCU Theme Song", 20],
    ],
    linkedin: "https://linkedin.com/in/isaacdnew",
  },
  "james-lasalle": {
    name: "James LaSalle",
    img_path: "images/team/members/james-lasalle.jpg",
    position: "Kinetic Co-Lead",
    stats: [["In Your Walls", 100], ["Making the Arcade CAD", 100], ['👍', 100]],
    linkedin: "https://www.linkedin.com/in/james-lasalle-589860256/",
  },
  "mohammed-chowdhury": {
    name: "Mohammed Chowdhury",
    img_path: "images/team/members/mohammed-chowdhury.jpg",
    position: "Kinetic Member, Safety Training Lead",
    stats: [
      ["Loving Sebastian", 100],
      ["Being an Ally", 50],
      ["Hating James LaSalle", 100],
    ],
    linkedin: "https://www.linkedin.com/in/mac528/",
  },
  "stella-taglich": {
    name: "Stella Taglich",
    img_path: "images/team/members/stella-taglich.jpg",
    position: "Team Co-Lead",
    stats: [
      ["Finding Car Keys", 20],
      ["Quality of AUX", 100],
      ["Average Volume Level", 70],
    ],
    linkedin: "https://www.linkedin.com/in/stellataglich/",
  },
  "zander-knight": {
    name: "Zander Knight",
    img_path: "images/team/members/zander-knight.jpg",
    position: "Kinetic Co-Lead",
    stats: [
      ["Battlebots Knowledge", 90],
      ["Basement Hospitality", 80],
      ["Computer Science Awareness", 30],
    ],
    linkedin: "https://www.linkedin.com/in/zander-knight-3aab8724a/",
  },
  "alex-jenkins": {
    name: "Alex Jenkins",
    img_path: "images/team/members/alex-jenkins.jpg",
    position: "Sportsman Member, Training Lead // Former Sportsman Co-Lead (2023-2024)",
    stats: [
      ["Punctuality", "80"],
      ["Dragon Training", "100"],
      ["Spelling", "20"],
    ],
    linkedin: "https://www.linkedin.com/in/alex-jenkins-201214223/",
  },
  "caleb-schlissel": {
    name: "Caleb Schlissel",
    img_path: "images/team/members/caleb-schlissel.jpg",
    position: "Team Co-Lead",
    stats: [
      ["Big Brain", 100],
      ["Social Life", 40],
      ["Pancreas", 10],
    ],
    linkedin: "https://www.linkedin.com/in/caleb-schlissel-0129/",
  },
  "charles-liu": {
    name: "Charles Liu",
    img_path: "images/team/members/charles-liu.jpg",
    position: "Alum 2024 // Sportsman (2023-2024)",
    stats: [
      ["Being Tall", 50],
      ["Big Brain", 10],
      ["Sportsman Sunshine", 70],
    ],
    linkedin: "https://www.linkedin.com/in/charles-liu-035190181/",
  },
  "marcus-esposito": {
    name: "Marcus Esposito",
    img_path: "images/team/members/marcus-esposito.jpg",
    position: "Alum 2024 // Former Sportsman Subteam Lead (2022-2023), Sportsman (2024)",
    stats: [
      ["Punctuality", "90"],
      ["Explaining Things", "60"],
      ["Intimidation", "0"],
    ],
    linkedin: "https://www.linkedin.com/in/marcus-esposito/",
  },
  "narayan-rueppel": {
    name: "Narayan Rueppel",
    img_path: "images/team/members/narayan-rueppel.jpg",
    position: "Sportsman Co-Lead",
    stats: [
      ["Punctuality", 90],
      ["Swahili", 10],
      ["Trampolining", 70],
    ],
    linkedin: "https://www.linkedin.com/in/narayan-rueppel-668861256/",
  },
  "sana-gaya": {
    name: "Sana Gaya",
    img_path: "images/team/members/sana-gaya.jpg",
    position: "Alum 2024 // Sportsman (2023)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/sana-gaya/",
  },
  "zarif-pathan": {
    name: "Zarif Pathan",
    img_path: "images/team/members/zarif-pathan.jpg",
    position: "Sportsman Member",
    stats: [
      ["Water Bending", 40],
      ["Circuitry", 80],
      ["Drip", 60],
    ],
    linkedin: "https://www.linkedin.com/in/zarif-pathan/",
  },
  "william-murphy": {
    name: "William Murphy",
    img_path: "images/team/members/william-murphy.jpg",
    position: "Alum 2023 // Former Marketing Vice Subteam Lead (2023), Former Sportsman VSL (2022)",
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
    position: "Alum 2022 // Former Autonomous Subteam Lead (2021-2022)",
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
    position: "Alum 2021 // Former Autonomous (2019-2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/robert-measner-1a4108196/",
  },
  "erhunmwunse-eghafona": {
    name: "Erhunmwunse Eghafona",
    img_path: "images/team/members/erhunmwunse-eghafona.jpg",
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
    position: "Alum 2022 // Former Autonomous Vice Subteam Lead (2021)",
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
    img_path: "images/team/members/sofie-halpern.jpg",
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
    img_path: "images/team/members/kaitlyn-hoxha.jpg",
    position: "Alum 2022 // Former Marketing Subteam Lead (2020-2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/kaitlyn-hoxha/",
  },
  "richard-kang": {
    name: "Richard Kang",
    img_path: "images/team/members/richard-kang.jpg",
    position: "Alum 2022 // Former Autonomous (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/richard-kang-bb923824a/",
  },
  "lucien-eckert": {
    name: "Lucien Eckert",
    img_path: "images/team/members/lucien-eckert.jpg",
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
    img_path: "images/team/members/maya-zamor.jpg",
    position: "Alum 2023 // Former Marketing Subteam Lead (2022-2023)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/maya-zamor-a9420b188",
  },
  "edith-chen": {
    name: "Edith Chen",
    img_path: "images/team/members/edith-chen.jpg",
    position: "Alum 2023 // Former Marketing Subteam Lead (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/chen-edith/",
  },
  "spencer-hurst": {
    name: "Spencer Hurst",
    img_path: "images/team/members/spencer-hurst.jpg",
    position: "Alum 2023 // Former Kinetic (2021-2023)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/spencer-hurst-918627191/",
  },
  "blaze-ezlakowski": {
    name: "Blaze Ezlakowski",
    img_path: "images/team/members/blaze-ezlakowski.jpg",
    position: "Alum 2022 // Former Autonomous Vice Subteam Lead (2022)",
    stats: [
      ["Unicycle Riding", 50],
      ["Having Siblings", 90],
      ["Vending Machine Interest", 80],
    ],
    linkedin: "https://www.linkedin.com/in/blaze-ezlakowski-25b3731b7",
  },
  "tyler-sprague": {
    name: "Tyler Sprague",
    img_path: "images/team/members/tyler-sprague.jpg",
    position: "Sportsman Member",
    stats: [
      ["Frisbee", 95],
      ["Replying in Group Chat", 90],
      ["Vending Machine Interest", 80],
    ],
    linkedin: "https://www.linkedin.com/in/tyler-sprague-209270295/",
  },
  "manuely-feliz-portes": {
    name: "Manuely Feliz Portes",
    img_path: "images/team/members/manuely-feliz-portes.jpg",
    position: "Sportsman Co-Lead",
    stats: [
      ["Decisive", 10],
      ["Driving", 50],
      ["Credibility", 100],
    ],
    linkedin: "https://www.linkedin.com/in/manuely-feliz-portes-1b0116326/",
  },
  "kai-rodger": {
    name: "Kai Rodger",
    img_path: "images/team/members/kai-rodger.jpg",
    position: "Sportsman Member",
    stats: [
      ["Snowboarding", 90],
      ["Cooking", 0],
      ["Focus", 50],
    ],
    linkedin: "https://www.linkedin.com/in/kai-rodger-70998029a/",
  },
  "bruno-tassari": {
    name: "Bruno Tassari",
    img_path: "images/team/members/bruno-tassari.jpg",
    position: "Alum 2023 // Team Lead (2022-2023) // VTL (2021-2022) // Sportsman (2021-2023) // Marketing (2023)",
    stats: [
      ["Anime Trivia", 90],
      ["A Freak in the Google Sheets", 70],
      ["Epic Jokes", 40],
    ],
    linkedin: "https://www.linkedin.com/in/bruno-tassari/",
  },
  "james-courtenay": {
    name: "James Courtenay",
    img_path: "images/team/members/james-courtenay.jpg",
    position: "Alum 2023 // Former Kinetic Vice Subteam Lead (2023)",
    stats: [["Music Taste", 90], ["MechE-ness", 10], ["Machining", 60]],
    linkedin: "https://www.linkedin.com/in/jcourtenay/",
  },
  "angela-zhu": {
    name: "Angela Zhu",
    img_path: "images/team/members/angela-zhu.jpg",
    position: "Marketing Member, Marketing Trainer",
    stats: [
      ["Gacha addiction", 90],
      ["Pyramid scheme recruitment", 80],
      ["Studying during social", 100],
    ],
    linkedin: "https://www.linkedin.com/in/angela-zhu-26b22229a/",
  },
  "crystal-li": {
    name: "Crystal Li",
    img_path: "images/team/members/crystal-li.jpg",
    position: "Marketing Member",
    stats: [
      ["Decisiveness", 0],
      ["Crocheting", 60],
      ["Injurability", 90]
    ],
    linkedin: "https://www.linkedin.com/in/crystal-li-698431255/",
  },
  "evan-zhu": {
    name: "Evan Zhu",
    img_path: "images/team/members/evan-zhu.jpg",
    position: "Marketing Member",
    stats: [
      ["Microplastics", 100],
      ["Giant Graveyard", 80],
      ["Problem Sets", 10],
    ],
    linkedin: "https://www.linkedin.com/in/evan-j-zhu/",
  },
  "javohir-abdurazzakov": {
    name: "Javohir Abdurazzakov",
    img_path: "images/team/members/javohir-abdurazzakov.jpg",
    position: "Marketing Co-Lead",
    stats: [
      ["Soccer", 20],
      ["Germaphobe", 75],
      ["Weight Fluctuation", 95],
    ],
    linkedin: "https://www.linkedin.com/in/javohir1/",
  },
  "julia-sun": {
    name: "Julia Sun",
    img_path: "images/team/members/julia-sun.jpg",
    position: "Marketing Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/juliasun2021/",
  },
  "meiling-wood": {
    name: "Mei Ling Wood",
    img_path: "images/team/members/meiling-wood.jpg",
    position: "Marketing Member",
    stats: [
      ["Food begging skills", 100],
      ["Decisiveness", 0],
      ["Water Drinking", 100]
    ],
    linkedin: "https://www.linkedin.com/in/mei-ling-wood-bb669523b/",
  },
  "rachel-pineda": {
    name: "Rachel Pineda",
    img_path: "images/team/members/rachel-pineda.jpg",
    position: "Marketing Co-Lead",
    stats: [
      ["Crossword Enthusiasm", 90],
      ["LinkedIn", 50],
      ["Hiding the Stats Doc", 80],
    ],
    linkedin: "https://www.linkedin.com/in/rrachelpineda/",
  },
  "vishnu-nair": {
    name: "Vishnu Nair",
    img_path: "images/team/members/vishnu-nair.jpg",
    position: "Marketing Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/vishnu-nair-401528200/",
  },
  "nicholas-underwood": {
    name: "Nicholas Underwood",
    img_path: "images/team/members/nicholas-underwood.jpg",
    position: "Marketing Member",
    stats: [
      ["Sleep", 30],
      ["Workaholic", 90],
      ["Dairy Consumption", 0]
    ],
    linkedin: "https://www.linkedin.com/in/nicholas-underwood-0b7733290/",
  },
  "caedy-lee": {
    name: "Caedy Lee",
    img_path: "images/team/members/caedy-lee.jpg",
    position: "Marketing Member",
    stats: [
      ["Tea > Coffee", 100],
      ["Pizza Crust Hater", 80],
      ["TV Consumption", 90]
    ],
    linkedin: "https://www.linkedin.com/in/caedy-lee-4022792b7/",
  },
  "ruslan-black": {
    name: "Ruslan Black",
    img_path: "images/team/members/ruslan-black.jpg",
    position: "Marketing Member",
    stats: [
      ["Reels", 90],
      ["Ladder", 0],
      ["Snoring in Seal", 50]
    ],
    linkedin: "https://www.linkedin.com/in/ruslansblack/",
  },
  "ethan-hernandez": {
    name: "Ethan Hernandez",
    img_path: "images/team/members/ethan-hernandez.jpg",
    position: "Kinetic Member, MechE Trainer",
    stats: [],
    linkedin: "https://www.linkedin.com/in/ethan-hernandez-a431a1282/",
  },
  "kevin-sturm": {
    name: "Kevin Sturm",
    img_path: "images/team/members/kevin-sturm.jpg",
    position: "Kinetic Member, Social Lead, Test Box Lead",
    stats: [
      ["Being 6 foot", 98],
      ["Ability to eat nuts", 0],
      ["Ability to see colors", 60]
    ],
    linkedin: "https://www.linkedin.com/in/kevin-sturm-97a046277/",
  },
  "mattew-anazco": {
    name: "Mattew Anazco",
    img_path: "images/team/members/mattew-anazco.jpg",
    position: "Kinetic Member, MechE Trainer",
    stats: [["Coin Flip Win Percentage", 50], ["Big wedge", 100], ["H in name", 0]],
    linkedin: "https://www.linkedin.com/in/mattew-anazco-77724222a/",
  },
  "aaron-harnish": {
    name: "Aaron Harnish",
    img_path: "images/team/members/aaron-harnish.jpg",
    position: "Autonomous Co-Lead",
    stats: [
      ["Caleb impersonation skills", 30],
      ["Milk enthusiasm", 80],
      ["Raising average height", 90]
    ],
    linkedin: "https://www.linkedin.com/in/aaron-harnish/",
  },
  "ananya-jajodia": {
    name: "Ananya Jajodia",
    img_path: "images/team/members/ananya-jajodia.jpg",
    position: "Autonomous Member, Autonomous Trainer",
    stats: [
      ["Tetris", 70],
      ["Hydration", 0],
      ["Lowering Average Height", 90],
    ],
    linkedin: "https://www.linkedin.com/in/ananya-jajodia-11b4a2249/",
  },
  "alyssa-hsu": {
    name: "Alyssa Hsu",
    img_path: "images/team/members/alyssa-hsu.jpg",
    position: "Autonomous Member, Autonomous Trainer",
    stats: [
      ["Tummy Sleeper", 100],
      ["Pentakills", 0],
      ["Airsipping", 30],
    ],
    linkedin: "https://www.linkedin.com/in/haalyssa/",
  },
  "camille-yap": {
    name: "Camille Yap",
    img_path: "images/team/members/camille-yap.jpg",
    position: "Autonomous Member, Autonomous Trainer",
    stats: [
      ["Avocado enthusiasm", 100],
      ["Back sleeper", 100],
      ["Thoughts", 0]
    ],
    linkedin: "https://www.linkedin.com/in/camille-yap-150a65281/",
  },
  "christopher-adonizio": {
    name: "Christopher Adonizio",
    img_path: "images/team/members/christopher-adonizio.jpg",
    position: "Autonomous Co-Lead",
    stats: [
      ["Chess", 60],
      ["Frisbee", 80],
      ["Fruitmaxxing", 100],
    ],
    linkedin: "https://www.linkedin.com/in/christopher-adonizio-0b7683219/",
  },
  "jenny-wu": {
    name: "Jenny Wu",
    img_path: "images/team/members/jenny-wu.jpg",
    position: "Autonomous Member",
    stats: [
      ["Red", 0],
      ["Green", 0],
      ["Blue", 100]
    ],
    linkedin: "https://www.linkedin.com/in/jenny-wu-5a7318266/",
  },
  "kai-rodger": {
    name: "Kai Rodger",
    img_path: "images/team/members/kai-rodger.jpg",
    position: "Sportsman Member",
    stats: [
      ["Snowboarding", 90],
      ["Cooking", 0],
      ["Focus", 50]
    ],
    linkedin: "https://www.linkedin.com/in/kai-rodger-70998029a/",
  },
}
const kinetic = [
  "zander-knight",
  "james-lasalle",
  "anna-boese",
  "ethan-hernandez",
  "kevin-sturm",
  "mattew-anazco",
  "mohammed-chowdhury",
];
const sportsman = [
  "narayan-rueppel",
  "manuely-feliz-portes",
  "alex-jenkins",
  "zarif-pathan",
  "kai-rodger",
  "tyler-sprague"
];
const marketing = [
  "rachel-pineda",
  "javohir-abdurazzakov",
  "angela-zhu",
  "caedy-lee",
  "crystal-li",
  "evan-zhu",
  "linda-hu",
  "meiling-wood",
  "nicholas-underwood",
  "ruslan-black",
  "sardor-rahmatulloev",
];
const autonomous = [
  "aaron-harnish",
  "christopher-adonizio",
  "ethan-zhang",
  "shao-stassen",
  "alyssa-hsu",
  "ananya-jajodia",
  "camille-yap",
  "grace-lim",
  "jenny-wu",
  "katie-huntley",
];
const alum = [
  "bruno-tassari",
  "william-murphy",
  "isaac-newcomb",
  "richard-jin",
  "luke-murphy",
  "molly-drumm",
  "ruby-wang",
  "charles-liu",
  "marcus-esposito",
  "shawn-chen",
  "edith-chen",
  "james-courtenay",
  "lucien-eckert",
  "maya-zamor",
  "spencer-hurst",
  "alex-salonga",
  "ash-siddiqui",
  "blaze-ezlakowski",
  "erhunmwunse-eghafona",
  "kaitlyn-hoxha",
  "kevin-liu",
  "michelle-zhou",
  "mo-moghaddasi",
  "richard-kang",
  "ricky-wang",
  "rochelle-barsz",
  "shubham-mathur",
  "sofie-halpern",
  "rob-measner",
  "stefan-bell",
  "sana-gaya"
];
const fullteam = [];
const leads = [
  "caleb-schlissel",
  "stella-taglich",
  "zander-knight",
  "james-lasalle",
  "narayan-rueppel",
  "manuely-feliz-portes",
  "aaron-harnish",
  "christopher-adonizio",
  "rachel-pineda",
  "javohir-abdurazzakov",
  "sebastian-rivera",
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
//     } else if (pos.includes("Autonomous")) {
//       autonomous.push(key);
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
      "Within the Kinetic Subteam, we specialize in the construction of <b>12lb high kinetic energy combat robots</b>, including vertical spinners, horizontal spinners, full-body spinners, and drums.<br><br>" +
      "Our <b>mission</b> is to design and build highly efficient robots that excel in competitions. We prioritize three key elements: damage-dealing capabilities, durability, and the ability to adapt to the ever-evolving meta of robotic combat. Kinetic is dedicated to maintaining a competitive edge in the world of robotic warfare.<br><br>" +
      "Our approach to robot design revolves around four critical <b>subsystems</b> that all members are in together:" +
      "<ul>" +
      "<li><b>Drivetrain</b>: This encompasses the locomotion system of the robot. Kinetic meticulously selects the drive systems to ensure our robots are agile, responsive, and formidable on the battlefield.</li>" +
      "<li><b>Weapon</b>: This encompasses the attacking method of the robot. Kinetic's arsenal is optimized for maximum impact and high energy spinning to destroy our opponents.</li>" +
      "<li><b>Chassis</b>: This encompasses the shell, armor, and internal structure of the robot. Kinetic engineers these elements to withstand the rigors of intense battles and outlast the competition.</li>" +
      "<li><b>Electronics</b>: This encompasses the motors, ESCs, batteries, power switches, and wires of the robot for RC control. Kinetic ensures that all electronics are built to last through 3-minute matches.</li>" +
      "</ul>" +
      "The culmination of these efforts results in a finely tuned, compact robot system that is both reliable and potent.<br><br>" +
      "The Kinetic subteam provides an unparalleled opportunity to immerse yourself in the world of mechanical design and robot construction. Here's what we do:<br><br>" +
      "<b>Fall Semester</b>:" +
      "<ul>" +
      "<li>Brainstorming and sketching detailed robot designs</li>" +
      "<li>Conducting research, calculations, and selecting components</li>" +
      "<li>Utilizing Autodesk Fusion 360 to model the robot in CAD</li>" +
      "</ul>" +
      "<b>Spring Semester</b>:" +
      "<ul>" +
      "<li>Machining and fabricating necessary parts</li>" +
      "<li>Assembling the robot and soldering the wires</li>" +
      "<li>Thoroughly testing the robot's capabilities and driving practice</li>" +
      "<li>Competing in at least the March competition at NHRL</li>" +
      "</ul>" +
      "Take a look at our <b>past</b> robots:" +
      "<ul>" +
      "<li>Donatello (2019-2020)</li>" +
      "<li>Richard (2021-2022)</li>" +
      "<li>Rosie (2022-2023)</li>" +
      "<li>Beater B. Barker (2023-2024)</li>" +
      "</ul>" +
      "Come be a part of Kinetic, where we transform robots into champions, one bearing at a time.<br><br>" +
      "If you are more interested in..." +
      "<ul>" +
      "<li>Creative and unique robots, check out the Sportsman Subteam</li>" +
      "<li>More complex circuitry, check out the Autonomous Subteam</li>" +
      "<li>Coding autonomous robots, check out the Autonomous Subteam</li>" +
      "<li>Coding for websites and video games, check out the Marketing Subteam</li>" +
      "<li>Business and corporate sponsorships, check out the Marketing Subteam</li>" +
      "<li>Art and design, check out the Marketing Subteam</li>" +
      "</ul>" +
      "Meet our current Kinetic Subteam!"

    // topics:{
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
    //     img_paths: ["images/autonomous-subteam.jpg"],
    //   },
    // }
  },
  // keys for all sportsman members
  sportsman: {
    members: sportsman,
    //["caleb-schlissel", "alex-jenkins", "charles-liu","marcus-esposito", "narayan-rueppel", "sana-gaya", "zarif-pathan"]
    description:
      "Within the Sportsman Subteam, we specialize in the construction of <b>12lb low kinetic energy combat robots</b>, including flippers, hammers, crushers, punchers, and non-spinning innovations.<br><br>" +
      "Our <b>mission</b> is to design and build highly efficient robots with the <b>capacity to dominate competitions</b>. Our designs emphasize <b>strategic control, structural durability</b>, and innovative adaptations to our opponents' tactical advancements. Sportsman is devoted to maintaining a collaboratively inclusive environment where applied engineering can flourish.<br><br>" +
      "Our approach to robot design revolves around four critical <b>subsystems</b> that all members are in together:" +
      "<ul>" +
      "<li><b>Drivetrain</b>: This encompasses the locomotion system of the robot. Sportsman selects unconventional drive systems, pushing the boundaries of innovation.</li>" +
      "<li><b>Weapon</b>: This encompasses the attacking method of the robot. Sportsman's arsenal is optimized for precise control and tactical advantage rather than damage.</li>" +
      "<li><b>Chassis</b>: This encompasses the shell, armor, and internal structure of the robot. Sportsman engineers these elements to endure the rigors of intense battles and outlast the competition.</li>" +
      "<li><b>Electronics</b>: This encompasses the motors, ESCs, batteries, power switches, and wires of the robot for RC control. Sportsman ensures that all electronics are built to last through 3-minute matches.</li>" +
      "</ul>" +
      "The culmination of these efforts results in unprecedented, unconventional robots that add an element of surprise to competitions.<br><br>" +
      "The Sportsman subteam provides an unparalleled opportunity to immerse yourself in the world of mechanical design and robot construction. Here's what we do:<br><br>" +
      "<b>Fall Semester</b>:" +
      "<ul>" +
      "<li>Brainstorming and sketching detailed robot designs</li>" +
      "<li>Conducting research, calculations, and selecting components</li>" +
      "<li>Utilizing Autodesk Fusion 360 to model the robot in CAD</li>" +
      "</ul>" +
      "<b>Spring Semester</b>:" +
      "<ul>" +
      "<li>Machining and fabricating necessary parts</li>" +
      "<li>Assembling the robot and soldering the wires</li>" +
      "<li>Thoroughly testing the robot's capabilities and driving practice</li>" +
      "<li>Competing in at least the March competition at NHRL</li>" +
      "</ul>" +
      "Take a look at our past robots:<br>" +
      "<ul>" +
      "<li>Manny (2019-2020)</li>" +
      "<li>Lance (2021-2022)</li>" +
      "<li>Florence (2022-2023)</li>" +
      "<li>Nardo (2023-2024)</li>" +
      "</ul>" +
      "Come be a part of Sportsman, where we transform unconventional ideas into thrilling robots, one bolt at a time.<br><br>" +
      "If you are more interested in..." +
      "<ul>" +
      "<li>Efficient and destructive robots, check out the Kinetic Subteam</li>" +
      "<li>More complex circuitry, check out the Autonomous Subteam</li>" +
      "<li>Coding autonomous robots, check out the Autonomous Subteam</li>" +
      "<li>Coding for websites and video games, check out the Marketing Subteam</li>" +
      "<li>Business and corporate sponsorships, check out the Marketing Subteam</li>" +
      "<li>Art and design, check out the Marketing Subteam</li>" +
      "</ul>" +
      "Meet our current Sportsman Subteam!"
  },
  // keys for all marketing members
  marketing: {
    members: marketing,
    //["linda-hu", "bruno-tassari", "colin-rodriguez", "luke-murphy", "molly-drumm", "ruby-wang""]
    description:
      "Within the Marketing Subteam, we specialize in various aspects of <b>promoting and enhancing CRC's brand</b>.<br><br>" +
      "Our <b>mission</b> is to strengthen CRC's presence and reputation, elevating it beyond just a robotics team.<br><br>" +
      "Our approach to marketing revolves around four critical <b>subsystems</b> that members choose which ones they partake in (but still all work during the same meetings):" +
      "<ul>" +
      "<li><b>Business</b>: This encompasses activities such as generating revenue, maintaining corporate relationships, delivering business pitches, managing the team budget, reviewing resumes, crafting newsletters, and identifying opportunities for both members and the team. Marketing strives to expand our network and secure the resources necessary for CRC's growth and development.</li>" +
      "<li><b>Software</b>: This encompasses the development and maintenance of CRC's website and video games. Marketing seeks to incorporate members' personalities into our projects, showcasing the uniqueness and appeal of our team.</li>" +
      "<li><b>Media</b>: This encompasses photography, videography, editing, writing, and content management for CRC's social media presence on platforms like Instagram, TikTok, YouTube, Facebook, and LinkedIn. Marketing aims to create engaging posts that reflect the team's personality and encourage member creativity.</li>" +
      "<li><b>Design</b>: This encompasses art, graphic design, and crafting for CRC's merchandise, including trading cards, stickers, clothing, stuffed animals, posters, and suits. Marketing creates an environment where members can express their passions, transforming CRC's robots into beloved characters.</li>" +
      "</ul>" +
      "The culmination of these efforts results in the transformation of CRC's brand into something tangible and relatable, extending beyond the realm of robotics.<br><br>" +
      "The Marketing subteam provides an unparalleled opportunity to immerse yourself in your area of choice, whether it's business, software, media, and/or design. Here's what we do:<br><br>" +
      "<b>Fall/Spring Semesters</b>:" +
      "<ul>" +
      "<li>Each subsystem continually generates content for the team, driven by member interests and goals</li>" +
      "<li>Business reaches out to potential sponsors, applies for grants, engages with companies on campus, pitches the team to prospective partners, maintains existing relationships, and explores job opportunities for members. Business is also responsible for our two fundraising events: crowdfunding in the Fall and giving day in the Spring</li>" +
      "<li>Software maintains and expands our website and current video games (CRC VS and CRC RIZZ) or develops a new one</li>" +
      "<li>Media creates an ever-expanding array of posts and videos, expanding the CRC Cinematic Universe. They also handle team recruitment, fundraising, and Cornell publicity. Additionally, they assist in creating videos for fundraising events and grant applications.</li>" +
      "<li>Design is at the heart of giving our robots personality through an array of merchandise. We create distinctive trading cards, doubling as business cards and quarter cards featuring our robots; our vision extends to producing cards for all our robots, culminating in the development of a captivating CRC trading card game. Alongside trading cards, our repertoire includes robot stickers, quirky team wearables, and providing graphic design support to other subsystems.</li>" +
      "</ul>" +
      "Take a look at our past/current projects:<br>" +
      "<ul>" +
      "<li>Business: Sponsors page</li>" +
      "<li>Software: Current CRC Website</li>" +
      "<li>Software: CRC VS, the robot fighting game (playable on the website or the arcade in the ELL)</li>" +
      "<li>Software: CRC RIZZ, the dating sim (TBD)</li>" +
      "<li>Media: Instagram</li>" +
      "<li>Media: TikTok</li>" +
      "<li>Media: YouTube</li>" +
      "<li>Media: Facebook</li>" +
      "<li>Media: LinkedIn</li>" +
      "<li>Design: Redbubble</li>" +
      "<li>Design: CRSuit</li>" +
      "<li>Design: Stuffed Manny</li>" +
      "<li>Design: Robot Hats</li>" +
      "<li>Design: Posters on campus, certain media posts, and certain designs on software projects</li>" +
      "</ul>" +
      "Come be a part of Marketing, where we keep the spirit of CRC alive, one idea at a time.<br><br>" +
      "If you are more interested in..." +
      "<ul>" +
      "<li>Physical robot building, check out the Kinetic Subteam or the Sportsman subteam</li>" +
      "<li>Coding and wiring for autonomous robots, check out the Autonomous Subteam</li>" +
      "</ul>" +
      "Meet our current Marketing Subteam!"
  },
  // keys for all autonomous members
  autonomous: {
    members: autonomous,
    //["ethan-zhang", "grace-lim", "blaze-ezlakowski", "katie-huntley", "richard-jin", "shao-stassen", "shawn-chen"]
    description:
      "Within the Autonomous Subteam, we specialize in the construction of <b>3lb autonomous combat robots</b>.<br><br>" +
      "Our <b>mission</b> is to build, wire, and code robots that can autonomously compete with conventional RC robots. While winning isn't our primary goal, Autonomous aims to push boundaries, challenging ourselves to see how well our algorithms can perform and continuously enhance them over time.<br><br>" +
      "Our approach to robot design revolves around three critical <b>subsystems</b> that all members are in together:" +
      "<ul>" +
      "<li><b>Computer Science (CS)</b>: This encompasses using Raspberry Pi to code machine learning algorithms for tasks such as wall detection and enemy tracking. Autonomous strives to create models that collect data, contributing to ongoing improvement.</li>" +
      "<li><b>Mechanical</b>: This encompasses utilizing robot kits to design a robot capable of housing all electrical components. Autonomous opts for straightforward mechanical components to minimize errors and variables in our algorithms.</li>" +
      "</ul>" +
      "The culmination of these efforts results in consistent and autonomous robots that break the mold of standard RC competitions.<br><br>" +
      "The Autonomous subteam provides an unparalleled opportunity to immerse yourself in the world of electrical engineering and computer science. Here's what we do:<br><br>" +
      "<b>Fall Semester</b>:" +
      "<ul>" +
      "<li>Conducting research on models, frameworks, libraries, and optimization techniques</li>" +
      "<li>Specifying electronic components, designing a complex circuit diagram (or PCBs), and designing a chassis to accommodate them</li>" +
      "<li>Assembling the robot and its hardware components, ensuring to wire them all properly</li>" +
      "<li>Implementing basic Python movements on the robot to comprehend, account for, and refine its functionality</li>" +
      "</ul>" +
      "<b>Spring Semester</b>:" +
      "<ul>" +
      "<li>Developing wall detection and enemy tracking capabilities using computer vision and AI</li>" +
      "<li>Troubleshooting electrical wiring</li>" +
      "<li>Debugging and fine-tuning computer science algorithms</li>" +
      "<li>Training machine learning models with convolutional neural networks</li>" +
      "<li>Rigorous testing to ensure consistent performance</li>" +
      "</ul>" +
      "Take a look at our past projects:<br>" +
      "<ul>" +
      "<li>Enemy detection and wall detection on Arduino (C++) for Manny (2019-2022)</li>" +
      "<li>Road tracking and facial recognition on Raspberry Pi (Python) for Lance (2022-2023)</li>" +
      "<li>Louis XVII (2023-2024)</li>" +
      "</ul>" +
      "Come be a part of Autonomous, where we challenge conventions through autonomy, one bug at a time.<br><br>" +
      "If you are more interested in..." +
      "<ul>" +
      "<li>More intensive robot building and simpler circuits (with no coding), check out the Kinetic Subteam or the Sportsman subteam</li>" +
      "<li>Coding for websites and video games, check out the Marketing Subteam</li>" +
      "<li>Business and corporate sponsorships, check out the Marketing Subteam</li>" +
      "<li>Art and design, check out the Marketing Subteam</li>" +
      "</ul>" +
      "Meet our current Autonomous Subteam!"
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
    //["lucien-eckert", "spencer-hurst", "edith-chen", "maya-zamor", "sofie-halpern", "kaitlyn-hoxha", "michelle-zhou", "rochelle-barsz", "erhunmwunse-eghafona", "shubham-mathur", "ricky-wang", "ash-siddiqui", "mo-moghaddasi", "alex-salonga", "kevin-liu", "rob-measner", "stefan-bell"]
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
