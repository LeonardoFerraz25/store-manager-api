const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const mocks = require('../../mock');

const productService = require("../../../src/services/productService");
const productController = require("../../../src/controllers/productController");

describe("Testa a productController", () => {
  describe("verifica funções da camada controller dos produtos", () => {

    it("Testa 'getAll'", async () => {
      const response = {};
      const request = {};
      const allProducts = mocks.allProductsResponse;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, "getAll").resolves(allProducts);
      await productController.getAll(request, response);
      expect(response.json.args[0][0]).to.deep.equal(allProducts);
    })

    it("testa 'getById'", async () => {
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


    it("testa 'create'", async () => {
      const response = {};
      const request = {};
      const product = mocks.productCreateResponse;
      const name = 'Produto1';
      request.body = {name};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, "create").resolves(product);
      await productController.create(request, response);
      expect(response.json.args[0][0]).to.deep.equal(product);
    })

    it("testa 'update'", async () =>  {
      const response = {};
      const request = {};
      const id = 4;
      const name = 'Produto2';
      const product = {id ,name};
      request.params = id;
      request.body = {name};
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, "update").resolves(product);
      await productController.update(request, response);
      expect(response.json.args[0][0]).to.deep.equal(product);
    })

    it("testa 'remove'", async () => {
      const response = {};
      const request = {};
      const id = 4;
      request.params = id;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, "remove").resolves(true);
      await productController.remove(request, response);
      expect(response.json.args[0][0]).to.deep.equal({
        message: "produto deletado com sucesso"
      });
    })

  });
  
  afterEach(sinon.restore);
})