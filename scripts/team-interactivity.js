const subteamData = {
  // keys for all kinetic members 
  "kinetic": {
    members: ["john-subteam"], 
    description: "The most subteam of all time"
  },
  // keys for all sportsman members
  "sportsman": {
    members: ["john-subteam", "mike-subteam"],
    description: "Sportswomen as well!"
  },
  // keys for all marketing members
  "marketing": {
    members: ["a"],
    description: "The best subteam. Just the best of all time."
  },
  // keys for all firmware members
  "firmware": {
    members: ["a", "mike-subteam", "john-subteam"],
    description: "The firmest wares."
  }
}

// data for each team member
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

// change the team display based on the button clicked
const setCategory = subteam => {
  const teamName = document.getElementById("team-name");
  teamName.innerHTML = `${subteam[0].toUpperCase()}${subteam.slice(1)}`;
  const teamDescription = document.getElementById("team-description");
  teamDescription.innerHTML = subteamData[subteam]['description'];
  const teamCards = document.getElementById("team-cards");
  // clear all existing member cards
  teamCards.childNodes.forEach((node) => node.remove())
  const members = subteamData[subteam]['members'];
  members.forEach(memberKey => {
    const memberData = teamData[memberKey];
    // construct an element for each team member
    const memberElement = createMemberCard(memberData);
    teamCards.appendChild(memberElement);
  });
}

// big chonker function
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

/* 
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