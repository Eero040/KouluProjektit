export function initEventForm() {
  const formElement = document.querySelector("[data-event-form]");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("toimii");
  });

  return {
    reset() {
      formElement.reset();
    }
  };
}


function formIntoEvent(formElement) {
  const formData = new FormData(formElement);
}