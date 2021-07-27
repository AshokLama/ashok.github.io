function onSubmit(c) {
    c.preventDefault();
    try {
        let productNumber = document.getElementById('inputProductNumber').value;
        let name = document.getElementById('inputProductName').value;
        let unitPrice = document.getElementById('inputUnitPrice').value;
        let quantity = document.getElementById('inputQuantity').value;
        let supplier = document.getElementById('inputSupplier').value;
        let suppliedDate = document.getElementById('inputSuppliedDate').value;

        let str = "Form data:\n";
        str += "Product Number : " + productNumber + "\n";
        str += "Name           : " + name + "\n";
        str += "Unit Price     : " + unitPrice + "\n";
        str += "Quantity       : " + quantity + "\n";
        str += "Supplier       : " + supplier + "\n";
        str += "Supplied Date  : " + suppliedDate + "\n";
        alert(str);
    }
    catch (e) {
        console.error(e);
    }

}