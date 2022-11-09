/**
 * Loading this script causes all .robot-image images to 
 * "enlarge" on click.
 */


// Generate a modal image on the body to use as the popup
const modal_bg = document.createElement("div");
modal_bg.style = "position: fixed; top: 0rem; width: 100%; height: 100vh; background-color: rgba(184, 184, 184, 0.48); display: flex; flex-direction: column; justify-content: center;"
modal_bg.style.transition = '0.5s'
const modal = document.createElement("div");
modal.style = "margin: 10rem auto; height: 25rem; width: 25rem; background-color: white; border-radius: 2rem"
modal_bg.appendChild(modal);
// x button
const close_button = document.createElement("button")
close_button.id = "close-button"
close_button.style = "float: right; width: 2rem; height: 2rem; cursor: pointer";
close_button.innerHTML = "X"
modal.appendChild(close_button)
// img
const modal_img = document.createElement("img");
modal_img.style = "margin: 1rem; width: 90%;"
modal.appendChild(modal_img)
// alt text paragraph
const alt_text = document.createElement("p");
alt_text.style.margin = '0.5rem 1rem'
modal.append(alt_text);
// append the modal to the page
document.body.appendChild(modal_bg);

const enlargeImage = imgElem => {
  modal_img.src = imgElem.src;
  alt_text.innerHTML = imgElem.alt;
  modal_bg.style.opacity = 1;
  modal_bg.style.display = "inline";
}

// define func to add to all .robot-photos
const setupRobotPhotos = () => {
  const robotImages = document.getElementsByClassName('robot-photo');
  for (let i = 0; i < robotImages.length; i++) {
    const imgElem = robotImages[i];
    imgElem.onclick = () => enlargeImage(imgElem)
    imgElem.style.cursor = "pointer";
  }
}

const closeModal = () => {
  modal_bg.style.display = 'none';
  modal_bg.style.opacity = 0;
}

// start closed
closeModal();
// hook up close button
close_button.onclick = closeModal;