// Keep track of the current category.
// this will be set over time by the script
let currentSubteam = "full-team";

// data for each team member. 
// The key is an identifier for the member (usually lowercase name, 
// hyphens instead of spaces)
const teamData = {
  "john-subteam": {
    "name": "John Subteam",
    "img_path": "images/team/john.jpg",
    "position": "Subteam Lead",
    "stats": [
      ["Speed", 10],
      ["Strength", 80],
      ["CAD", 50]
    ]
  },
  "a": {
    "name": "AAAAAAAA",
    "img_path": "images/team/aaa.bmp",
    "position": "Vice Subteam Lead",
    "stats": [
      ["Consume", 100],
      ["Consume", 100],
      ["Solidworks", 25]
    ]
  },
  "mike-subteam": {
    "name": "Mike Subteam",
    "img_path": "images/team/mike.bmp",
    "position": "Subteam Member",
    "stats": [
      ["Knitting", 10],
      ["Crochet", 80],
      ["Alcoholism", 50]
    ]
  },
}
// This maps each subteam to a description, and an array of strings that
// match the identifiers of its members in teamData.
const subteamData = {
  // keys for all kinetic members 
  "kinetic": {
    members: ["john-subteam"], 
    description: "The Kinetic subteam designs and manufactures a combat robot in a high-kinetic-energy class, emphasizing damage, durability, and a competitive edge. Kinetic integrates all sections of robot design, including: the chassis, which involves the shell, armor and internal structure of the robot; the weapon, which involves the damage-dealing components and selects electronics to power them; and the powertrain, which involves the locomotion system.  The final robot is a combination of these assets into a reliable, compact system.",
    // topics: {
    //   "Design": {
    //     blurb: "Designing blurb.",
    //     img_paths: ["images/team/john.jpg"],
    //   },
    //   "Research": {
    //     blurb: "REEEEEEEEEEASSSSSSSSSSSEEEEEAAAAAARCCCCCCCCCCHHHHHHH!!!! YOOOOOOOOOOOOOO.",
    //     img_paths: ["images/team/mike.bmp"],
    //   },
    //   "Build": {
    //     blurb: "Building blurb. We buildin af",
    //     img_paths: ["images/firmware-subteam.jpg"],
    //   },
    // }
  },
  // keys for all sportsman members
  "sportsman": {
    members: ["john-subteam", "mike-subteam"],
    description: "The Sportsman subteam designs and manufactures a combat robot in the Sportsman class, a low-kinetic-energy combat robot class that emphasizes creativity, design ingenuity, and interdisciplinary collaboration. Without the crutch of raw power, Sportsman has to find unique ways to dominate the competition. They also spend a really, really long time thinking of each robot's name."
  },
  // keys for all marketing members
  "marketing": {
    members: ["a"],
    description: "Our Marketing subteam organizes team events, manages the budget, codes the website, maintains alumni and corporate relationships, and secures funding for the team. Members manage the team's image by implementing new website features, and developing creative designs for merchandise and promotional material (including our video game!). Finally, marketing collectively displays CRC's progress and personality through social media. Most of the subteam's work is structured around our main projects, as well as sporadic events that occur throughout the school year."
  },
  // keys for all firmware members
  "firmware": {
    members: ["a", "mike-subteam", "john-subteam", "a", "mike-subteam", "john-subteam", "a", "mike-subteam", "john-subteam"],
    description: "The Firmware subteam works on applying artificial intelligence techniques and autonomous capabilities to old combat robots to give them extra functionality. Every single year, Firmware takes a previous year's robot and revamps it through a new coding project."
  },
  "full": {
    members: Object.keys(teamData),
    description: "The whole burrito. Click any of the buttons above to learn about each of our four subteams!"
  },
  "alumni": {
    members: [],
    description: "Once you're on CRC, you're a CRC member for life. Our team has a vibrant alumni community, and we love staying connected post-graduation!"
  }
}


/**
 * This changes the page to show data on the current subteam. 
 * It generates cards for each subteam member, and clears old ones.
 * @param {string} subteam the subteam identifier in subteamData 
 */
const setCategory = subteam => {
  const teamName = document.getElementById("team-name");
  teamName.innerHTML = `${subteam[0].toUpperCase()}${subteam.slice(1)}`;
  const teamDescription = document.getElementById("team-description");
  teamDescription.innerHTML = subteamData[subteam]['description'];
  const teamCards = document.getElementById("team-cards");
  // clear all existing member cards
  // note: do this backwards so the collection doesn't reorder!!!!
  const nodes = teamCards.childNodes;
  for (let i = nodes.length - 1; i > 0; i--) {
    nodes[i].remove();
  }
  const members = subteamData[subteam]['members'];
  members.forEach(memberKey => {
    const memberData = teamData[memberKey];
    // construct an element for each team member
    const memberElement = createMemberCard(memberData);
    teamCards.appendChild(memberElement);
  });
  currentSubteam = subteam;
}

/**
 * This creates a card representing the passed in memberData, and appends it
 * to the page. Called by setCategory.
 * @param {Object} memberData entry of teamData for the card's member 
 * @returns 
 */
const createMemberCard = memberData => {
  const memberCard = document.createElement("div");
  // create the card
  memberCard.className = "card";
  // create and attach the image
  const profileImg = document.createElement("img")
  profileImg.src = memberData['img_path'];
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
  stats.className = 'stats';
  memberData['stats'].forEach(([name, value]) => {
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
  })
  memberCard.appendChild(stats)
  // create and attach stat button, socials eventually
  // and set up interactivity
  const links = document.createElement("div");
  links.className = "member-links";
  const statsButton = document.createElement("button");
  statsButton.className = "stats-button";
  statsButton.innerHTML = "Stats";
  statsButton.onpointerover = () => {
    stats.setAttribute("style", "transform: translate(0%, 0%);")
  }  
  statsButton.onpointerout = () => {
    stats.setAttribute("style", "transform: translate(-150%, 0%);")
  }  
  links.appendChild(statsButton);
  memberCard.appendChild(links);
  // return the card
  return memberCard;
}

/*  NOTE: This is the html structure of what a card should look like. 
    The function above should create this for a members. 
<div class="card">
          <img src="images/team/john.jpg" alt="images/team/john.jpg" class="headshot">
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
const selectTopic = topicKey => {
  const topicData = subteamData[currentSubteam]["topics"][topicKey];
  const topicImgs = topicData['img_paths'];
  const topicDesc = topicData['blurb'];
  const descriptionElement = document.getElementById("team-info-description");
  descriptionElement.getElementsByTagName('h3')[0].innerHTML = topicKey;
  descriptionElement.getElementsByTagName('p')[0].innerHTML = topicDesc;
  const gallery = descriptionElement.getElementsByClassName("images")[0];
  // remove existing images
  gallery.childNodes.forEach(node => node.remove());
  // add new images
  topicImgs.forEach(path => {
    const newImg = document.createElement("img");
    newImg.src = path;
    gallery.appendChild(newImg)
  })
}