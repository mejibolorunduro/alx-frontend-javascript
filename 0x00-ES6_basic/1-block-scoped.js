export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
	
	// If trueOrFalse is true, override the default values
  if (trueOrFalse) {
    const task = true; // eslint-disable-line no-unused-vars
    const task2 = false; // eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
