import { OrderItem } from "../src/OrderItem";

describe('OrderItem Tests', () => {
  it('should be able create orderItem', () => {
    const orderItem = new OrderItem(1, 10, 10);
    expect(orderItem.getTotal()).toBe(100);
  });
});
