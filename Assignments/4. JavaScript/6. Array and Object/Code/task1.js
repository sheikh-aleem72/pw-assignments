/**
 *In the following shopping cart add, remove, and edit items
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'#
8 a"" 'Meat' in the beginning of your shopping cart if it has not been alrea"> a""e!
8 a"" Sugar at the en" of >ou shopping cart if it has not been alrea"> a""e!
8 remove '$one>' if >ou are allergic to hone=
8 mo"if> Tea to 'Green Tea'
 */

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
shoppingCart.forEach((item, index) => {
  if (item === "Honey") shoppingCart.splice(index, 1);
  if (item === "Tea") shoppingCart[index] = "Green Tea";
});

console.log(shoppingCart);
