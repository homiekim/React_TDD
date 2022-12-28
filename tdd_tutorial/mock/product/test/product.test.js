const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");

jest.mock("../product_client");

describe("ProductTest", () => {
  /* 단위테스트 : 모듈간에 의존성없이 독립적으로 테스트 */
  const fetchItems = jest.fn(async () => [
    { item: "milk", available: true },
    { item: "banana", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;
  beforeEach(() => {
    productService = new ProductService();
  });

  it("should filter out available", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "milk", available: true }]);
  });
});
