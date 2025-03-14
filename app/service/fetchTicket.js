export default async function fetchTicket() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/tickets", {
      cache: "force-cache",
      next: { revalidate: 5 },
    });

    const result = await response.json();
    return result;
  } catch (err) {
    return [];
  }
}
