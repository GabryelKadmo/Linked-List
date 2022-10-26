const items = new LinkedList();

function adicionar() {
  const element = document.getElementById("itens").value;
  var res = document.querySelector("#result");
  document.getElementById("itens").value = "";


  document.querySelector("#result").innerHTML = element;
  console.log(element)
  console.log(items.size());

}