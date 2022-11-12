
var meta = '<meta name="viewport" charset="UTF-8" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>';
var link = '<form id="senmail" name="formte" method="POST"><input type="email" id="email-li" placeholder="Địa chỉ email"><input type="textarea" name="nd" id="nd" value="Nội dung cần gửi"><button type="button" onclick="sendEmail()">Gửi email</button></form>'

document.getElementById("col").innerHTML = meta+link;
