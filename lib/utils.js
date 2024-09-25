export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  }