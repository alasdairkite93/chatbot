function openChat() {
  document.getElementById("conversation").style.display = "block";
}
function answerQuery(query) {
  query = query.toLowerCase();

  switch(query) {
    case "purchases":
      return "All payments are taken safely and securely through paypal";
      break;
    case "products":
      return "All products have been responsibly sourced from trusted partners. You can read more about the partners in the " +
          "about section of the web page";
      break;
    case "repairs":
      return "All repairs are carried out using the appropriate equipment. The expected wait time given the availability " +
          "of parts is approximately one week. It is either possible to drop off or post in your watch depending on your " +
          "preference.";
      break;
    case "about":
      return "An online store that offers parts, watches and repairs.";
      break;
    case "contact":
      return "The best way to get in contact is using the form on the contact page. Otherwise please use the contact details" +
          "provided.";
      break;
    case "anything":
      return "If you have not found the answer you are looking for using the chat please use the contact form on the contact " +
          "page.";
      break;
  }
}

function print(message, answer){
  var conversation = document.getElementById('conversation');
  conversation.innerHTML += "<p style='font-size: 15px;'><strong>You:</strong> " + message + "</p>";
  conversation.innerHTML += "<p style='font-size: 15px;'><strong>The Watch Shop:</strong> " + answer + "</p>";
}

function purchases() {
  var purchases = document.getElementById('purchases').value;
  var answer = answerQuery(purchases);
  var message = purchases;
  print(message, answer)
}

function repairs() {
  var repairs = document.getElementById('repairs').value;
  var answer = answerQuery(repairs);
  var message = repairs;
  print(message, answer)
}

function products() {
  var products = document.getElementById('products').value;
  var answer = answerQuery(products);
  var message = products;
  print(message, answer)
}

function contact() {
  var contact = document.getElementById('contact').value;
  var answer = answerQuery(contact);
  var message = contact;
  print(message, answer)
}

function about() {
  var about = document.getElementById('about').value;
  var answer = answerQuery(about);
  var message = about;
  print(message, answer)
}

function anythingElse() {
  var anythingelse = document.getElementById('anything').value;
  var answer = answerQuery(anythingelse);
  var message = anythingelse;
  print(message, answer)
}

function loadDoc(val) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
        this.responseText;;
  }
  console.log(val)
  switch (val) {
    case "repairs":
      xhttp.open("GET", repairs());
      xhttp.send();
      break;
    case "purchases":
      xhttp.open("GET", purchases());
      xhttp.send();
      break;
    case "products":
      xhttp.open("GET", products());
      xhttp.send();
      break;
    case "contact":
      xhttp.open("GET", contact());
      xhttp.send();
      break;
    case "about":
      xhttp.open("GET", about());
      xhttp.send();
      break;
    case "anything":
      xhttp.open("GET", anythingElse());
      xhttp.send();
      break;
  }
}

document.getElementById("repairs").onclick = repairs;
document.getElementById("purchases").onclick = purchases;
document.getElementById("products").onclick = products;
document.getElementById("contact").onclick = contact;
document.getElementById("about").onclick = about;
document.getElementById("anything").onclick = anythingElse;
