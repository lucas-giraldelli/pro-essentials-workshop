const shoppingCart: Record<"items", string[]> = {
  items: [],
};

console.log(shoppingCart.items);

shoppingCart.items.push("Apple");
shoppingCart.items.push("Banana");
