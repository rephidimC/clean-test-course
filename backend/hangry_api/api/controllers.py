class Delivery():
  def calculate(order,distance):
    items = 0
    for item in order:
      items += item.quantity
    if items > 10 and distance > 5:
      return 7.50
    elif items > 5 and distance > 3:
      return 5
    else:
      return 2.5

class Subtotal():
  def calculate(order):
    cost = 0
    for item in order:
      cost += item.quantity * item.item.price
    return cost

class Tax():
  def calculate(subTotal, deliveryFee):
    tax = (subTotal + deliveryFee) * 0.0825
    return (0,round(tax,2)) [ round(tax,2) > 0 ]

#Stubbed Total
class Total():
  def calculate(order, deliveryFee):
    return 16.24