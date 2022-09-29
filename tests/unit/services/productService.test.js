const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const mocks = require('../../mock');

const productService = require("../../../src/services/productService");
const productsModel = require("../../../src/models/productModel");

describe("Testa a productService", () => {
  describe("verifica funções da camada service dos produtos", () => {

    it("Testa 'getAll'", async () => {
      const allProducts = [[...mocks.allProductsResponse]];
      sinon.stub(productsModel, "getAll").resolves(allProducts);
      const result = await productService.getAll();
      expect(result).to.deep.equal(allProducts);
    })

    it("testa 'getById'", async () => {
      const product = mocks.productSearchIdResponse;
      sinon.stub(productsModel, "getById").resolves(product)
      const result = await productService.getById(1);
      expect(result).to.deep.equal(product);
    })

    it("testa 'create'", async () => {
      const product = 4;
      sinon.stub(productsModel, "create").resolves(product);
      const name = 'Produto1';
      const result = await productService.create(name);
      expect(result).to.deep.equal([mocks.productCreateResponse]);
    })

    it("testa 'update'", async () =>  {
      const product = 1;
      sinon.stub(productsModel, "update").resolves(product);
      const id = 4;
      const name = 'Produto2';
      const result = await productService.update(name, id);
      expect(result).to.deep.equal({id, name});
    })

    it("testa 'remove'", async () => {
      const product = 1;
      sinon.stub(productsModel, "remove").resolves(product);
      const id = 4;
      const result = await productService.remove(id);
      expect(result).to.deep.equal(true);
    })

  });
  
  afterEach(sinon.restore);
})