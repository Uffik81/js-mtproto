var wssecret = "dddd321456789012345678901234567921";
var mtsock = new WebSocket("wss://flora-1.web.telegram.org:443/apiws","binary");
mtsock.onopen = function(evt) {
	mtsock.send(wssecret);
	console.log("Open connect!");
}
mtsock.onclose = function(event) {
  if (event.wasClean) {
    alert('���������� ������� �����');
  } else {
    alert('����� ����������'); // ��������, "����" ������� �������
  }
  alert('���: ' + event.code + ' �������: ' + event.reason);
};

socket.onmessage = function(event) {
  console.log("�������� ������ " + event.data);
};

socket.onerror = function(error) {
  alert("������ " + error.message);
};


