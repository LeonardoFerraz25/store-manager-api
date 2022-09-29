const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const mocks = require('../../mock');

const productService = require("../../../src/services/productService");
const productsModel = require("../../../src/models/productModel");

describe("Testa a productService", () => {
  describe("verifica se retorna todo os produtos", () => {

    it("Testa getAll", async () => {
      const allProducts = [[...mocks.allProductsResponse]];
      sinon.stub(productsModel, "getAll").resolves(allProducts);
      const result = await productService.getAll();
      expect(result).to.deep.equal(allProducts);
    })

    it("testa getById", async () => {
      const product = mocks.productSearchIdResponse;
      sinon.stub(productsModel, "getById").resolves(product)
      const result = await productService.getById(1);
      expect(result).to.deep.equal(product);
    })

  });
  
  afterEach(sinon.restore);
})