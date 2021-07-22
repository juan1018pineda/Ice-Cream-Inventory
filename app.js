let option = 0;
let iceCreamArray = [];
let salesArray = [];
const ICE_CREAM_NAME = "Agregue el nombre del helado";
const ICE_CREAM_FLAVOR = "Agregue el sabor del helado";
const ICE_CREAM_INVENTORY = "Digite la cantidad del helado en inventario";
const ICE_CREAM_PRICE = "Digite el precio del helado";

function addIceCream() {
  const iceCream = {};
  if (!iceCreamArray) {
    iceCream.id = 0;
  } else {
    iceCream.id = iceCreamArray.length;
  }
  iceCream.name = prompt(ICE_CREAM_NAME);
  iceCream.flavor = prompt(ICE_CREAM_FLAVOR);
  iceCream.inventory = parseInt(prompt(ICE_CREAM_INVENTORY));
  iceCream.price = parseFloat(prompt(ICE_CREAM_PRICE));
  return iceCreamArray.push(iceCream);
}

function printIceCreams(message) {
  for (let i = 0; i < iceCreamArray.length; i++) {
    message += ` \nID: ${iceCreamArray[i].id}, Nombre: ${iceCreamArray[i].name}`;
  }
  return message;
}

function modify() {
  let modifyOption = 0;
  let modifyMessage = "Dígite el código del producto que desea modificar: \n";
  let selectedIceCream = {};
  modifyOption = parseInt(prompt(printIceCreams(modifyMessage)));
  selectedIceCream = iceCreamArray[modifyOption];
  selectedIceCream.name = prompt(ICE_CREAM_NAME, selectedIceCream.name);
  selectedIceCream.flavor = prompt(ICE_CREAM_FLAVOR, selectedIceCream.flavor);
  selectedIceCream.inventory = parseInt(
    prompt(ICE_CREAM_INVENTORY, selectedIceCream.inventory)
  );
  selectedIceCream.price = parseFloat(
    prompt(ICE_CREAM_PRICE, selectedIceCream.price)
  );
  return;
}

function remove() {
  let removeOption = 0;
  let removeMessage = "Dígite el código del producto que desea eliminar: \n";
  removeOption = parseInt(prompt(printIceCreams(removeMessage)));
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
  let sale = {};
  let sellMessage = "Dígite el código del producto que desea vender: \n";
  sellOption = parseInt(prompt(printIceCreams(sellMessage)));
  iceCream = iceCreamArray[sellOption];
  quantity = parseInt(prompt("Digite la cantidad que desea vender"));
  total = quantity * iceCream.price;
  let confirmation = window.confirm(
    `Desea hacer esta compra por valor de: ${total}`
  );
  if (confirmation) {
    iceCream.inventory -= quantity;
    sale.iceCreamId = iceCream.id;
    sale.iceCream = iceCream.name;
    sale.quantity = quantity;
    sale.total = total;
    salesArray.push(sale);
    return;
  } else {
    return;
  }
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