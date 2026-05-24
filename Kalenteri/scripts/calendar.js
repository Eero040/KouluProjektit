import { today } from "./date.js";
import { initMonthCalendar } from "./monthcalendar.js";
export function initCalendar() {
  const CalendarElement = document.querySelector("[data-calendar]");

  let selectedView = "month";
  let selectedDate = today();

  function refreshCalendar() {
    CalendarElement.replaceChildren();
    if (selectedView == "month") {
      initMonthCalendar(CalendarElement, selectedDate);
    } else if (selectedView == "week") {
    } else {
    }
  }

  document.addEventListener("view-change",
    (event) => {
      selectedView = event.detail.view;
      refreshCalendar();
    }
  );

  document.addEventListener("date-change", (event) => {
    selectedDate = event.detail.date;
    refreshCalendar();
  });
  refreshCalendar();
}