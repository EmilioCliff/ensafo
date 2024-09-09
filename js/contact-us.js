let plusBtns = document.querySelectorAll(".plus-icon");
plusBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		let currentOpen = document.querySelector(".read-answer");
		if (currentOpen) currentOpen.classList.remove("read-answer");
		btn.closest("article").classList.add("read-answer");
	});
});

let minusBtns = document.querySelectorAll(".minus-icon");
minusBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.closest("article").classList.remove("read-answer");
	});
});

// let map, directionsService, directionsRenderer;

// export async function initMap() {
// 	map = new google.maps.Map(document.getElementById("map"), {
// 		center: { lat: -1.2832533, lng: 36.8172449 },
// 		zoom: 13,
// 	});

// 	directionsService = new google.maps.DirectionsService();
// 	directionsRenderer = new google.maps.DirectionsRenderer();
// 	directionsRenderer.setMap(map);
// }

// initMap();

let map;
let directionsService;
let directionsRenderer;
let marker;
let infoWindow;

export async function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -1.2832533, lng: 36.8172449 },
		zoom: 13,
		styles: [
			{
				featureType: "poi",
				elementType: "labels",
				stylers: [{ visibility: "off" }],
			},
			{
				featureType: "transit",
				elementType: "labels.icon",
				stylers: [{ visibility: "off" }],
			},
		],
	});

	directionsService = new google.maps.DirectionsService();
	directionsRenderer = new google.maps.DirectionsRenderer();
	directionsRenderer.setMap(map);
}

function addMarker(location, labelText) {
	if (marker) {
		marker.setMap(null);
	}
	marker = new google.maps.Marker({
		position: location,
		map: map,
	});
	infoWindow = new google.maps.InfoWindow({
		content: labelText,
	});

	marker.addListener("click", () => {
		infoWindow.open(map, marker);
	});
}

initMap();

addMarker({ lat: -1.2921, lng: 36.8219 }, "Ensafo Offices");
