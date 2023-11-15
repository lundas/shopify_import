const Order = function (billing_address, canceled_at, created_at, currency,
  customer, email, financial_status, fulfillment_status, line_items,
  processed_at, shipping_addr, subtotal_price, total_price, total_tax) {
  this.billing_address = billing_address; // customerAddr obj
  this.canceled_at = canceled_at;
  this.created_at = created_at;
  this.currency = currency;
  this.customer = customer; // customer obj
  this.email = email;
  this.financial_status = financial_status;
  this.fulfillment_status = fulfillment_status;
  this.line_items = []; // array of lineItem objs
  this.processed_at = processed_at;
  this.shipping_address = shipping_address; // customerAddr obj
  this.subtotal_price = subtotal_price;
  this.total_price = total_price;
  this.total_tax = total_tax;
}

Order.prototype.addLineItem = function (lineItem) {
  this.line_items.push(lineItem);
}

const LineItem = function () {
  this.fulfillment_status = fulfillment_status;
  this.id = id;
  this.price = price;
  this.quantity = quantity;
  this.requires_shipping = requires_shipping || false;
  this.sku = sku;
  this.title = title;
  this.variant_id = variant_id;
  this.variant_title = variant_title;
  this.taxable = taxable;
}

export { Order };
