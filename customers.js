const Customer = function () {
  //TODO constructor
  this.addresses = [];
  this.email = email;
  this.first_name = first_name;
  this.id = id;
  this.last_name = last_name;
  this.phone = phone;
  // this.tax_exempt = tax_exempt;
}

Customer.prototype.addAddress = function (address) {
  //TODO
  this.addresses.push(address);
}

const customerAddress = function (address1, address2, city, country, company,
  first_name, last_name, name, phone, province, zip) {
  //TODO constructor
  this.address1 = address1;
  this.address2 = address2;
  this.city = city;
  this.country = country;
  this.company = company;
  this.first_name = first_name;
  this.last_name = last_name;
  this.name = name || `${first_name} ${last_name}`;
  this.phone = phone;
  this.province = province;
  this.zip = zip;
}
