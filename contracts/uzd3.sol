pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract transaction {
 address public seller;
 address public buyer;

 struct order{
   address payable courier;
   string product;
   uint quantity;
    uint price;
    uint shipmentPrice;
    uint payment;
    bool paymentstatus;
    bool deliverystatus;
 }
 struct product{
   string name;
 }

 
  //mapping (uint => order) orders;
  order[] orders;
  //product[] products;
  string[] products;
  
  /*address  payable seller;
  address public  buyer;*/

 constructor (address buyer_) public payable {
    seller = msg.sender;
    buyer = buyer_;
    products.push("product1");
     products.push("product2");
    products.push("product3");
  }
 function createProduct(string memory name_)payable public{
   require(msg.sender==seller);
   products.push(name_);
 }
 function createorder(uint index, uint quantity_) payable public{
    require(msg.sender==buyer);
    orders.push(order( payable(0), products[index], quantity_, 0, 0, 0, false,  false));

  }
  function setPrice(uint index, uint price_) payable public{
      require(msg.sender==seller);
      require(orders[index].deliverystatus==false);
      orders[index].price=price_;
  }
   function setShipmentPrice(uint index, uint shipmentprice_) payable public{
      require(msg.sender==seller);
     require(orders[index].deliverystatus==false);
      orders[index].shipmentPrice=shipmentprice_;
  }
  function setCourier(uint index, address payable address_) payable public{
    require(msg.sender==seller);
    orders[index].courier=address_;
  }
  function payForOrder(uint index)payable public{
    require(msg.sender==buyer);
    require((orders[index].price+orders[index].shipmentPrice)==msg.value);
    require(orders[index].paymentstatus==false);
    orders[index].payment=msg.value;
    orders[index].paymentstatus=true;
  }
  function confirmDelivery(uint index) payable public{
    require(msg.sender==orders[index].courier);
    require(orders[index].deliverystatus==false);
    orders[index].deliverystatus=true;
    payable(seller).transfer(orders[index].price);
    orders[index].courier.transfer(orders[index].shipmentPrice);

  }

  function getOrderInfo(uint index) view public returns(address payable courier, string memory product1, uint quantity, uint price, uint shipmnetPrice, uint payment) {
    
    return (orders[index].courier, orders[index].product, orders[index].quantity,  orders[index].price, orders[index].shipmentPrice, orders[index].payment );
  }
  function getFullPrice(uint index) view public  returns(uint ){
    return(orders[index].price+orders[index].shipmentPrice);
  }
  
  function getOrderStatus(uint index) view public returns ( bool paymentstatus, bool deliverystatus){
    return(orders[index].paymentstatus, orders[index].deliverystatus );
  }
  function getProducts() view public returns(string[] memory){
    return(products);
  }


}