/**
 * TL,DR; Loading this script causes all .robot-image images to 
 * "enlarge" on click.
 * It also displays their alt-text as a caption.
 * Make sure to call setupRobotPhotos during the onload event of document.body!
 */

// This block runs when the script is loaded on the page.
// Generate a modal image on the body to use as the popup whenever img enlarges
const modal_bg = document.createElement("div");
modal_bg.style = "position: fixed; top: 0rem; width: 100%; height: 100vh; background-color: rgba(184, 184, 184, 0.48); display: flex; flex-direction: column; justify-content: center;"
modal_bg.style.transition = '0.5s'
const modal = document.createElement("div");
modal.style = "margin: 5rem auto; min-height: 32rem; max-width: 40rem; background-color: white; border-radius: 2rem"
modal_bg.appendChild(modal);
// x button: closes the popup
const close_button = document.createElement("img")
close_button.id = "close-button"
close_button.style = "float: right; width: 3rem; height: 3rem; font-size: 2rem; cursor: pointer; border: none; border-radius: 50%";
close_button.src = '../images/icons/close.png'
modal.appendChild(close_button)
// img: has its src replaced when images are enlarged
const modal_img = document.createElement("img");
modal_img.style = "width: 100%; height: 80%; max-height: 32rem; object-fit: contain; margin: 1rem auto;"
modal.appendChild(modal_img)
// alt text paragraph: describes the image, taking an enlarged image's alt text
const alt_text = document.createElement("p");
alt_text.style.margin = '0.5rem 1rem'
alt_text.style.paddingBottom = '1rem'
modal.append(alt_text);
// append the modal to the page for later use
document.body.appendChild(modal_bg);


/**
 * enlargeImage sets the modal popup to take the data of the provided imgElem,
 * sets its opacity to 1 and display to inline.
 * @param {HTMLImageElement} imgElem 
 */
const enlargeImage = imgElem => {
  modal_img.src = imgElem.src;
  alt_text.innerHTML = imgElem.alt;
  modal_bg.style.opacity = 1;
  modal_bg.style.display = "inline";
}

/**
 * This function should be called when the body of the page loads. It sets
 * events on all elements with the classname robot-photo so that they 
 * can be enlarged on click. 
 */
const setupRobotPhotos = () => {
  const robotImages = document.getElementsByClassName('robot-photo');
  for (let i = 0; i < robotImages.length; i++) {
    const imgElem = robotImages[i];
    imgElem.onclick = () => enlargeImage(imgElem)
    //imgElem.style.cursor = "pointer";
  }
}

/**
 * closeModal closes the enlarged image popup. 
 */
const closeModal = () => {
  modal_bg.style.display = 'none';
  modal_bg.style.opacity = 0;
}

// start closed, so call this as the script is loaded
closeModal();
// hook up close button to this function as well. 
close_button.onclick = closeModal;
// Once this file runs, the robots page is ready to be interactive!