const ai_text = document.getElementById("ai_text");

let name = "Andranik";

const hello_texts = [
`Hi ${name}, what's on your mind?`,
`Hi ${name}, what's the plan?`,
`Great to see you, ${name}! What are we working on?`,
`Hey ${name}! How's it going?`,
]

const randomIndex = Math.floor(Math.random() * hello_texts.length);

ai_text.textContent = hello_texts[randomIndex];



const photosBtn = document.getElementById('photos-btn');
const filesBtn = document.getElementById('files-btn');
const hiddenInputphotos = document.getElementById('hidden-file-input_photos');
const hiddenInputfiles = document.getElementById('hidden-file-input-files');



photosBtn.addEventListener('click', () => {
  hiddenInputphotos.click();
});

hiddenInputphotos.addEventListener('change', (event) => {
  const file = event.target.files[0];
});

filesBtn.addEventListener('click', () => {
  hiddenInputfiles.click();
});

hiddenInputfiles.addEventListener('change', (event) => {
  const file = event.target.files[0];
});

