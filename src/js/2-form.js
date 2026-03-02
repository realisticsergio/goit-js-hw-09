// 1. Порожня коробочка
const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// 2. Згадуємо минуле при завантаженні
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  // Заповнюємо об'єкт і саму форму
  Object.assign(formData, parsedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// 3. Слухаємо кожен "тиць" по клавішах
form.addEventListener("input", (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4. Натискання на кнопку "Submit"
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Щоб сторінка не стрибала

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData); // Показуємо скарби

  // ПРИБИРАННЯ
  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});
