export function syncToLocal(key, payload) {
  if (!payload) {
    return;
  }

  let stringifiedData = JSON.stringify(payload);
  localStorage.setItem(key, stringifiedData);
}

export function fetchFromLocal(key, defaultData = {}) {
  let savedData = localStorage.getItem(key);
  return savedData ? JSON.parse(savedData) : defaultData;
}
