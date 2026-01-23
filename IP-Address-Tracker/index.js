var map = L.map("map").setView([40.6526006, -73.9497211], 18);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

var marker = L.marker([40.6526006, -73.9497211]).addTo(map);

async function loadIP(ip = "8.8.8.8") {
  try {
    const data = await getIPData(ip);

    updateMap(data.location.lat, data.location.lng);

    document.getElementById("ipText").textContent = data.ip;
    document.getElementById("locationText").textContent =
      `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    document.getElementById("timezoneText").textContent =
      `UTC ${data.location.timezone}`;
    document.getElementById("ispText").textContent = data.isp;
  } catch (error) {
    console.error(error);
  }
}

function updateMap(lat, lng) {
  map.setView([lat, lng], 18);
  marker.setLatLng([lat, lng]);
}

async function getIPData(value) {
  const apiKey = "at_2smYZQ9Dze3FIdaV9oJeYXv0swSgc";

  const isIP = /^[0-9.]+$/.test(value);
  const query = isIP ? `ipAddress=${value}` : `domain=${value}`;

  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${query}`,
  );

  return res.json();
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const ip = document.getElementById("ipInput").value.trim();
  if (ip) loadIP(ip);
});

loadIP();
