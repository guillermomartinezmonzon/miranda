export async function getLocations() {
  return await fetch("data/locations.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

export function getBookings() {
  return fetch("data/bookings.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

export function getRooms() {
  return fetch("data/rooms.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

export function getContact() {
  return fetch("data/contact.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

export function getUsers() {
  return fetch("data/users.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

