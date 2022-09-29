const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const mocks = require('../../mock');

const connection = require("../../../src/models/connection");
const productsModel = require("../../../src/models/productModel");

describe("Testa a productModel", () => {
  describe("verifica se retorna todo os produtos", () => {

    it("Testa getAll", async () => {
      const allProducts = [[...mocks.allProductsResponse]];
      sinon.stub(connection, "execute").resolves(allProducts);
      const result = await productsModel.getAll();
      const prds = [result]
      expect(prds).to.deep.equal(allProducts);
    })

    it("testa getById", async () => {
      const product = mocks.productSearchIdResponse;
      sinon.stub(connection, "execute").resolves(product)
      const result = await productsModel.getById(1);
      const prd = [result];
      expect(prd).to.deep.equal(product);
    })

  });
  
  afterEach(sinon.restore);
})