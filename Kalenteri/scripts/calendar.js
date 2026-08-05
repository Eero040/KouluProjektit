import { today } from "./date.js";
import { initMonthCalendar } from "./monthcalendar.js";
import { initWeekCalendar } from "./weekcalendar.js";

export function initCalendar(eventStore) {
  const CalendarElement = document.querySelector("[data-calendar]");

  let selectedView = "month";
  let selectedDate = today();

  function refreshCalendar() {
    CalendarElement.replaceChildren();
    if (selectedView == "month") {
      initMonthCalendar(CalendarElement, selectedDate, eventStore);
    } else if (selectedView == "week") {
      initWeekCalendar(CalendarElement, selectedDate, eventStore, false);
    } else {
      initWeekCalendar(CalendarElement, selectedDate, eventStore, true);
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

  document.addEventListener("events-change", () => {
    refreshCalendar();
  })
  refreshCalendar();
}