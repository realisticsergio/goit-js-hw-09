const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  // Заповнюємо об'єкт і саму форму
  Object.assign(formData, parsedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}


form.addEventListener("input", (event) => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();
  event.target.value = fieldValue;

  formData[fieldName] = fieldValue;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  });
// Натискання на кнопку "Submit"
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Щоб сторінка не стрибала

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData); 

  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
});
