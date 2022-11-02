const subteamData = {
  // keys for all kinetic members 
  "kinetic": ["john-subteam"],
  // keys for all sportsman members
  "sportsman": ["john-subteam", "mike-subteam"],
  // keys for all marketing members
  "marketing": ["a"],
  // keys for all firmware members
  "firmware": ["a", "mike-subteam", "john-subteam"],
}

// data for each team member
const teamData = {
  "john-subteam": {
    "name": "John Subteam",
    "img_path": "images/team/john.jpg",
    "position": "Subteam Lead"
  },
  "a": {
    "name": "AAAAAAAA",
    "img_path": "images/team/a.jpg",
    "position": "Vice Subteam Lead"
  },
  "mike-subteam": {
    "name": "Mike Subteam",
    "img_path": "images/team/mike.jpg",
    "position": "Subteam Member"
  },
}

const setCategory = subteam => {
  const teamName = document.getElementById("team-name");
  teamName.innerHTML = subteam;
  const teamCards = document.getElementById("team-cards");
  // clear all existing member cards
  teamCards.childNodes.forEach((node) => {
    node.remove();
  })
  const members = subteamData[subteam];
  members.forEach(memberKey => {
    const memberData = teamData[memberKey];
    // construct an element for each team member
    const memberElement = createMemberCard(memberData);
    teamCards.appendChild(memberElement);
  });
}

const createMemberCard = memberData => {
  const memberCard = document.createElement("div");
  memberCard.innerHTML = memberData["name"];
  return memberCard;
}