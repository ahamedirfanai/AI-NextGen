import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constant';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);  {/* multipling random number into surprseme length and round it shore to an varible*/}
  const randomPrompt = surpriseMePrompts[randomIndex]; {/* insert in surpriseme prompt */}

  if (randomPrompt === prompt) return getRandomPrompt(prompt);  {/* its like a recursion if the value it repeated means do another time*/}

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
