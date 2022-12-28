const ProductService = require("../product_service_no_di");
const StubProductClient = require("./stub_product");

describe("product test using stub", () => {
  let productService;

  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  });

  it("should filter out available", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "milk", available: true }]);
  });
});
