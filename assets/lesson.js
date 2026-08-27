function checkQuiz(button, isCorrect, message) {
  const group = button.closest('[data-quiz]');
  group.querySelectorAll('button').forEach((item) => {
    item.classList.remove('correct', 'wrong');
    item.disabled = false;
  });
  button.classList.add(isCorrect ? 'correct' : 'wrong');
  const feedback = group.querySelector('.feedback');
  feedback.textContent = message;
  feedback.classList.add('show');
}

function collectAssignment(formId) {
  const form = document.getElementById(formId);
  return [...form.querySelectorAll('textarea, input[type="text"]')]
    .map((field) => `${field.dataset.label}\n${field.value.trim() || '—'}`)
    .join('\n\n');
}

function saveAssignment(formId, key) {
  const text = collectAssignment(formId);
  localStorage.setItem(key, text);
  const status = document.querySelector(`[data-status="${formId}"]`);
  status.textContent = 'Черновик сохранён только в этом браузере.';
}

async function copyAssignment(formId) {
  const text = collectAssignment(formId);
  await navigator.clipboard.writeText(text);
  const status = document.querySelector(`[data-status="${formId}"]`);
  status.textContent = 'Ответ скопирован. Отправьте его преподавателю в чате.';
}

function restoreAssignment(formId, key) {
  const saved = localStorage.getItem(key);
  if (!saved) return;
  const blocks = saved.split('\n\n');
  const fields = document.getElementById(formId).querySelectorAll('textarea, input[type="text"]');
  fields.forEach((field, index) => {
    const block = blocks[index] || '';
    field.value = block.split('\n').slice(1).join('\n').replace(/^—$/, '');
  });
}

function chooseScenario(button, branch, message, storageKey) {
  const group = button.closest('[data-scenario]');
  group.querySelectorAll('button').forEach((item) => item.classList.remove('correct'));
  button.classList.add('correct');
  const consequence = group.querySelector('.consequence');
  consequence.innerHTML = message;
  consequence.classList.add('show');
  localStorage.setItem(storageKey, branch);
  const hiddenDecision = document.querySelector(`[data-branch-field="${storageKey}"]`);
  if (hiddenDecision) hiddenDecision.value = branch;
}
