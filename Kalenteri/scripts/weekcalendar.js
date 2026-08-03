import { generateWeekDays } from "./date.js";

const calendarTemplateElement = document.querySelector(
  "[data-template='week-calendar']");
const calendarDayOfWeekTemplateElement = document.querySelector(
  "[data-template='week-calendar-day-of-week']");
const calendarAllDayListTemplateElement = document.querySelector(
  "[data-template='week-calendar-all-day-list-item']");
const calendarColumnTemplateElement = document.querySelector(
  "[data-template='week-calendar-column']");

export function initWeekCalendar(parent, selectedDate, eventStore) {
  const calendarContent = calendarTemplateElement.content.cloneNode(true);
  const calendarElement = calendarContent.querySelector("[data-week-calendar]");
  const calendarDayOfWeekListElement = calendarElement.querySelector(
    "[data-week-calendar-day-of-week-list]");
  const calendarAllDayListElement = calendarElement.querySelector(
    "[data-week-calendar-all-day-list]");
  const calendarColumnsElement = calendarElement.querySelector(
    "[data-week-calendar-columns]");

  const weekDays = generateWeekDays(selectedDate);
  console.log(weekDays);
}