let option = 0;
let iceCreamArray = [];
let salesArray = [];

function addIceCream() {
  const iceCream = {};
  if (!iceCreamArray) {
    iceCream.id = 0;
  } else {
    iceCream.id = iceCreamArray.length;
  }
  iceCream.name = prompt("Agregue el nombre del helado");
  iceCream.flavor = prompt("Agregue el sabor del helado");
  iceCream.inventory = parseInt(
    prompt("Digite la cantidad del helado en inventario")
  );
  iceCream.price = parseFloat(prompt("Digite el precio del helado"));
  return iceCreamArray.push(iceCream);
}

function modify() {
  let modifyOption = 0;
  let modifyMessage = "Dígite el código del producto que desea modificar: \n";
  let selectedIceCream = {};
  for (let i = 0; i < iceCreamArray.length; i++) {
    modifyMessage += ` \nID: ${iceCreamArray[i].id}, Nombre: ${iceCreamArray[i].name}`;
  }
  modifyOption = parseInt(prompt(modifyMessage));
  selectedIceCream = iceCreamArray[modifyOption];
  selectedIceCream.name = prompt(
    "Agregue el nombre del helado",
    selectedIceCream.name
  );
  selectedIceCream.flavor = prompt(
    "Agregue el sabor del helado",
    selectedIceCream.flavor
  );
  selectedIceCream.inventory = parseInt(
    prompt(
      "Digite la cantidad del helado en inventario",
      selectedIceCream.inventory
    )
  );
  selectedIceCream.price = parseFloat(
    prompt("Digite el precio del helado", selectedIceCream.price)
  );
  return;
}

function remove() {
  let removeOption = 0;
  let removeMessage = "Dígite el código del producto que desea eliminar: \n";
  for (let i = 0; i < iceCreamArray.length; i++) {
    removeMessage += ` \nID: ${iceCreamArray[i].id}, Nombre: ${iceCreamArray[i].name}`;
  }
  removeOption = parseInt(prompt(removeMessage));
  iceCreamArray.splice(removeOption, 1);
  return;
}

function showInventory() {
  let inventoryMessage = "";
  for (let i = 0; i < iceCreamArray.length; i++) {
    inventoryMessage += `ID: ${iceCreamArray[i].id}, Nombre: ${iceCreamArray[i].name}, Sabor: ${iceCreamArray[i].flavor}, Inventario: ${iceCreamArray[i].inventory}, Precio: ${iceCreamArray[i].price}. \n`;
  }
  return alert(inventoryMessage);
}

function sellIceCream() {
  let sellOption = 0;
  let quantity = 0;
  let total = 0;
  let iceCream = {};
  let sellMessage = "Dígite el código del producto que desea vender: \n";
  for (let i = 0; i < iceCreamArray.length; i++) {
    sellMessage += ` \nID: ${iceCreamArray[i].id}, Nombre: ${iceCreamArray[i].name}`;
  }
  sellOption = parseInt(prompt(sellMessage));
  iceCream = iceCreamArray[sellOption];
  quantity = parseInt(prompt("Digite la cantidad que desea vender"));
  total = quantity * iceCream.price;
  window.confirm(`Desea hacer esta compra por valor de: ${total}`)
    ? (iceCream.inventory -= quantity)
    : iceCream.inventory;
  return;
}

function actions(option) {
  switch (option) {
    case 1:
      addIceCream();
      break;
    case 2:
      modify();
      break;
    case 3:
      remove();
    case 4:
      showInventory();
      break;
    case 5:
      sellIceCream();
      break;
    case 6:
      alert("Has cerrado la sesión");
      break;
  }
}

function showMenu() {
  const message = `
    Escriba el número que corresponda a la acción
    que desea realizar en el sistema:
    1. Agregar un helado
    2. Modificar un helado
    3. Eliminar un helado
    4. Mostrar inventario
    5. Realizar venta
    6. Salir del sistema
    `;
  return parseInt(prompt(message));
}

while (option !== 6) {
  option = showMenu();
  actions(option);
}
