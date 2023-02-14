// Keep track of the current category.
// this will be set over time by the script
let currentSubteam = "full-team";

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
    img_path: "images/team/members/Colin.jpg",
    position: "Marketing Member",
    stats: [],
    linkedin: "",
  },
  "kaitlyn-hoxha": {
    name: "Kaitlyn Hoxha",
    img_path: "images/team/members/Kaitlyn.jpg",
    position: "Marketing Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/kaitlyn-hoxha/",
  },
  "linda-hu": {
    name: "Linda Hu",
    img_path: "images/team/members/Linda.jpg",
    position: "Marketing Member",
    stats: [],
    linkedin: "",
  },
  "lucien-eckert": {
    name: "Lucien Eckert",
    img_path: "images/team/members/Lucien.jpg",
    position: "Marketing VSL",
    stats: [],
    linkedin: "https://www.linkedin.com/in/lucien-eckert/",
  },
  "luke-murphy": {
    name: "Luke Murphy",
    img_path: "images/team/members/Luke.jpg",
    position: "Vice Team Lead",
    stats: [],
    linkedin: "https://www.linkedin.com/in/luke-murphy-09659b22a/",
  },
  "matthew-bark": {
    name: "Matthew Bark",
    img_path: "images/team/members/Matthew.jpg",
    position: "Marketing Member",
    stats: [],
    linkedin: "",
  },
  "maya-zamor": {
    name: "Maya Zamor",
    img_path: "images/team/members/Maya.jpg",
    position: "Marketing SL",
    stats: [],
    linkedin: "https://www.linkedin.com/in/maya-zamor-a9420b188",
  },
  "sardor-rahmatulloev": {
    name: "Sardor Rahmatulloev",
    img_path: "images/team/members/Sardor.jpg",
    position: "Marketing Member",
    stats: [],
    linkedin: "",
  },
  "sofie-halpern": {
    name: "Sofie Halpern",
    img_path: "images/team/members/Sofie.jpg",
    position: "Former Team Lead",
    stats: [],
    linkedin: "https://www.linkedin.com/in/sofie-halpern/",
  },
  "benjamin-lorence": {
    name: "Benjamin Lorence",
    img_path: "images/team/members/Benjamin.jpg",
    position: "Firmware Member",
    stats: [],
    linkedin: "",
  },
  "blaze-ezlakowski": {
    name: "Blaze Ezlakowski",
    img_path: "images/team/members/Blaze.jpg",
    position: "Firmware Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/blaze-ezlakowski-25b3731b7",
  },
  "ethan-zhang": {
    name: "Ethan Zhang",
    img_path: "images/team/members/Ethan.jpg",
    position: "Firmware Member",
    stats: [
      ["Fire Bending", 7],
      ["Cursed Knowledge", 2],
      ["Github ", 5],
    ],
    linkedin: "",
  },
  "grace-lim": {
    name: "Grace Lim",
    img_path: "images/team/members/Grace.jpg",
    position: "Firmware Member",
    stats: [],
    linkedin: "",
  },
  "katie-huntley": {
    name: "Katie Huntley",
    img_path: "images/team/members/Katie.jpg",
    position: "Firmware Member",
    stats: [],
    linkedin: "",
  },
  "richard-jin": {
    name: "Richard Jin",
    img_path: "images/team/members/Richard.jpg",
    position: "Firmware SL",
    stats: [],
    linkedin: "https://www.linkedin.com/in/richard-jin/",
  },
  "shao-stassen": {
    name: "Shao Stassen",
    img_path: "images/team/members/Shao.jpg",
    position: "Firmware Member",
    stats: [],
    linkedin: "",
  },
  "sebastian-rivera": {
    name: "Sebastian Rivera",
    img_path: "images/team/members/Sebastian.jpg",
    position: "Firmware VSL",
    stats: [],
    linkedin: "https://www.linkedin.com/in/sebastian-rivera-048478222/",
  },
  "shawn-chen": {
    name: "Shawn Chen",
    img_path: "images/team/members/Shawn.jpg",
    position: "Firmware Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/shawn-siyuanchen",
  },
  "anna-boese": {
    name: "Anna Boese",
    img_path: "images/team/members/Anna.jpg",
    position: "Kinetic VSL",
    stats: [],
    linkedin: "https://www.linkedin.com/in/anna-boese-4a304819b/",
  },
  "isaac-newcomb": {
    name: "Isaac Newcomb",
    img_path: "images/team/members/Isaac.jpg",
    position: "Kinetic SL",
    stats: [],
    linkedin: "https://linkedin.com/in/isaacdnew",
  },
  "james-courtenay": {
    name: "James Courtenay",
    img_path: "images/team/members/James C.jpg",
    position: "Kinetic Member",
    stats: [],
    linkedin: "",
  },
  "james-lasalle": {
    name: "James LaSalle",
    img_path: "images/team/members/James L.jpg",
    position: "Kinetic Member",
    stats: [],
    linkedin: "",
  },
  "margaret-gates": {
    name: "Margaret Gates",
    img_path: "images/team/members/Margaret.jpg",
    position: "Kinetic Member",
    stats: [],
    linkedin: "",
  },
  "mohammed-chowdhury": {
    name: "Mohammed Chowdhury",
    img_path: "images/team/members/Mohammed.jpg",
    position: "Kinetic Member",
    stats: [],
    linkedin: "",
  },
  "stella-taglich": {
    name: "Stella Taglich",
    img_path: "images/team/members/Stella.jpg",
    position: "Kinetic Member",
    stats: [
      ["Bending electronics", 8],
      ["Finding keys to her car", 1],
      ["Sniping", 7],
    ],
    linkedin: "",
  },
  "spencer-hurst": {
    name: "Spencer Hurst",
    img_path: "images/team/members/Spencer.jpg",
    position: "Kinetic Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/spencer-hurst-918627191/",
  },
  "zander-knight": {
    name: "Zander Knight",
    img_path: "images/team/members/Zander.jpg",
    position: "Kinetic Member",
    stats: [],
    linkedin: "",
  },
  "alex-jenkins": {
    name: "Alex Jenkins",
    img_path: "images/team/members/Alex.jpg",
    position: "Sportsman Member",
    stats: [],
    linkedin: "",
  },
  "bruno-tassari": {
    name: "Bruno Tassari",
    img_path: "images/team/members/Bruno.jpg",
    position: "Team Lead",
    stats: [],
    linkedin: "https://www.linkedin.com/in/bruno-tassari-18928b19b/",
  },
  "caleb-schlissel": {
    name: "Caleb Schlissel",
    img_path: "images/team/members/Caleb.jpg",
    position: "Sportsman Member",
    stats: [],
    linkedin: "",
  },
  "charles-liu": {
    name: "Charles Liu",
    img_path: "images/team/members/Charles.jpg",
    position: "Sportsman Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/charles-liu-035190181/",
  },
  "marcus-esposito": {
    name: "Marcus Esposito",
    img_path: "images/team/members/Marcus.jpg",
    position: "Sportsman SL",
    stats: [],
    linkedin: "https://www.linkedin.com/in/marcus-esposito/",
  },
  "molly-drumm": {
    name: "Molly Drumm",
    img_path: "images/team/members/Molly.jpg",
    position: "Sportsman Member",
    stats: [],
    linkedin: "https://www.linkedin.com/in/molly-drumm-a4430a208/",
  },
  "narayan-rueppel": {
    name: "Narayan Rueppel",
    img_path: "images/team/members/Narayan.jpg",
    position: "Sportsman Member",
    stats: [],
    linkedin: "",
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
    stats: [],
    linkedin: "",
  },
  william: {
    name: "William Murphy",
    img_path: "images/team/members/William.jpg",
    position: "Sportsman VSL",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "shubham-mathur": {
    name: "Shubham Mathur",
    img_path: "images/team/members/shubham-mathur.jpg",
    position: "Alum 2022 // Former Sportsman (2019-2022) // Co-Founder",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "rochelle-barsz": {
    name: "Rochelle Barsz",
    img_path: "images/team/members/rochelle-barsz.jpg",
    position: "Alum 2022 // Former Firmware SL (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "michelle-zhou": {
    name: "Michelle Zhou",
    img_path: "images/team/members/michelle-zhou.jpg",
    position: "Alum 2022 // Former Sportsman SL (2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "rob-measner": {
    name: "Rob Measner",
    img_path: "images/team/members/rob-measner.jpg",
    position: "Alum 2021 // Former Firmware (2019-2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  esquared: {
    name: "Erhunmwunse Eghafona",
    img_path: "images/team/members/esquared.jpg",
    position: "Alum 2022 // Former Kinetic (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "kevin-liu": {
    name: "Kevin Liu",
    img_path: "images/team/members/kevin-liu.jpg",
    position: "Alum 2022 // Former Sportsman SL (2020- 2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "ash-siddiqui": {
    name: "Ash Siddiqui",
    img_path: "images/team/members/ash-siddiqui.jpg",
    position: "Alum 2022 // Former Firmware VSL (2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "alex-salonga": {
    name: "Ash Siddiqui",
    img_path: "images/team/members/alex-salonga.jpg",
    position: "Alum 2022 // Former Marketing VSL (2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "mo-moghaddasi": {
    name: "Mohammad Ali Moghaddasi",
    img_path: "images/team/members/mo-moghaddasi.jpg",
    position: "Alum 2022 // Former Kinetic (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "ricky-wang": {
    name: "Ricky Wang",
    img_path: "images/team/members/ricky-wang.jpg",
    position: "Alum 2022 // Former Kinetic SL (2021-2022)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
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
    position: "Alum 2021 // Former Kinetic SL (2020-2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
  "kaitlyn-hoxha": {
    name: "Kaitlyn Hoxha",
    img_path: "images/team/members/Kaitlyn.jpg",
    position: "Alum 2022 // Marketing // Former Marketing SL (2020-2021)",
    stats: [],
    linkedin: "https://www.linkedin.com/in/william-murphy-5bab00251/",
  },
};
// This maps each subteam to a description, and an array of strings that
// match the identifiers of its members in teamData.
const subteamData = {
  // keys for all kinetic members
  kinetic: {
    members: [
      "isaac-newcomb",
      "anna-boese",
      "james-courtenay",
      "james-lasalle",
      "margaret-gates",
      "mohammed-chowdhury",
      "stella-taglich",
      "spencer-hurst",
      "zander-knight",
    ],
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
    members: [
      "marcus-esposito",
      "william",
      "alex-jenkins",
      "bruno-tassari",
      "caleb-schlissel",
      "charles-liu",
      "marcus-esposito",
      "molly-drumm",
      "narayan-rueppel",
      "sana-gaya",
      "zarif-pathan",
    ],
    description:
      "The Sportsman subteam designs and manufactures a combat robot in the Sportsman class, a low-kinetic-energy combat robot class that emphasizes creativity, design ingenuity, and interdisciplinary collaboration. Without the crutch of raw power, Sportsman has to find unique ways to dominate the competition. They also spend a really, really long time thinking of each robot's name.",
  },
  // keys for all marketing members
  marketing: {
    members: [
      "maya-zamor",
      "lucien-eckert",
      "colin-rodriguez",
      "linda-hu",
      "matthew-bark",
      "sardor-rahmatulloev",
    ],
    description:
      "Our Marketing subteam organizes team events, manages the budget, codes the website, maintains alumni and corporate relationships, and secures funding for the team. Members manage the team's image by implementing new website features, and developing creative designs for merchandise and promotional material (including our video game!). Finally, marketing collectively displays CRC's progress and personality through social media. Most of the subteam's work is structured around our main projects, as well as sporadic events that occur throughout the school year.",
  },
  // keys for all firmware members
  firmware: {
    members: [
      "richard-jin",
      "sebastian-rivera",
      "benjamin-lorence",
      "blaze-ezlakowski",
      "ethan-zhang",
      "grace-lim",
      "katie-huntley",
      "shao-stassen",
      "shawn-chen",
    ],
    description:
      "The Firmware subteam works on applying artificial intelligence techniques and autonomous capabilities to old combat robots to give them extra functionality. Every single year, Firmware takes a previous year's robot and revamps it through a new coding project.",
  },
  full: {
    members: Object.keys(teamData),
    description:
      "The whole burrito. Click any of the buttons above to learn about each of our four subteams!",
  },
  alumni: {
    members: [
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
      "stefan-bell",
    ],
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
  const statsButton = document.createElement("button");
  statsButton.className = "stats-button";
  statsButton.innerHTML = "Stats";
  statsButton.onpointerover = () => {
    stats.setAttribute("style", "transform: translate(0%, 0%);");
  };
  statsButton.onpointerout = () => {
    stats.setAttribute("style", "transform: translate(-150%, 0%);");
  };
  //TODO: Add stats
  // links.appendChild(statsButton);
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
