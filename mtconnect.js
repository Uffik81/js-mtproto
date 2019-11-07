var wssecret = "dddd321456789012345678901234567921";
var mtsock = new WebSocket("wss://flora-1.web.telegram.org:443/apiws","binary");
mtsock.onopen = function(evt) {
	mtsock.send(wssecret);
	console.log("Open connect!");
}
mtsock.onclose = function(event) {
  if (event.wasClean) {
    alert('Соединение закрыто чисто');
  } else {
    alert('Обрыв соединения'); // например, "убит" процесс сервера
  }
  alert('Код: ' + event.code + ' причина: ' + event.reason);
};

socket.onmessage = function(event) {
  console.log("Получены данные " + event.data);
};

socket.onerror = function(error) {
  alert("Ошибка " + error.message);
};


