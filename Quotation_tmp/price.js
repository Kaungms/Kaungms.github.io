// Product pricing database for the accessory shop
var productPrices = {
    "USB Cable": 15.99,
    "Headphones": 49.99,
    "Wireless Mouse": 29.99,
    "Power Bank": 39.99,
    "Phone Case": 19.99,
    "Screen Protector": 12.99,
    "Bluetooth Speaker": 79.99,
    "Car Charger": 24.99
};

// Function to get price for a specific product
function getProductPrice(productName) {
    return productPrices[productName] || 0;
}

// Function to get all available products
function getAllProducts() {
    return Object.keys(productPrices);
}

// Function to update price when product is selected
function updatePriceField() {
    var selectedProduct = $("#newItemDescription").val();
    var price = productPrices[selectedProduct];
    if (price) {
        $("#newItemPPU").val(price.toFixed(2));
    } else {
        $("#newItemPPU").val("");
    }
}