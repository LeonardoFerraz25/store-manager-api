const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const mocks = require('../../mock');

const productService = require("../../../src/services/productService");
const productController = require("../../../src/controllers/productController");

describe("Testa a productController", () => {
  describe("verifica se retorna todo os produtos", () => {

    it("Testa getAll", async () => {
      const response = {};
      const request = {};
      const allProducts = mocks.allProductsResponse;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, "getAll").resolves(allProducts);
      await productController.getAll(request, response);
      expect(response.json.args[0][0]).to.deep.equal(allProducts);
    })

    it("testa getById", async () => {
      const response = {};
      const request = {};
      const product = mocks.productSearchIdResponse;
      request.params = 1;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, "getById").resolves(product)
      await productController.getById(request, response);
      expect(response.json.args[0][0]).to.deep.equal(product);
    })

  });
  
  afterEach(sinon.restore);
})