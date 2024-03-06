export default function guardrail(matchFunction) {
  const queue = [];
  let result;
  try {
    result = matchFunction();
  } catch (error) {
    result = `Error: ${error.message}`;
  }
  queue.push(result);
  queue.push('Guardrail was processed');
  return queue;
}