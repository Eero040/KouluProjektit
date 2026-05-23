export function validateEvent(event) {
  if (event.startTime >= event.endTime) {
    return "Tapahtuman loppumis-aika pitää olla aloitus-ajan jälkeen.";
  }

  return null;
}