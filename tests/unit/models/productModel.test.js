const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const mocks = require('../../mock');

const connection = require("../../../models/connection");
const productsModel = require("../../../models/productsModel");

describe("Testa a productModel", () => {
  describe("verifica se retorna todo os produtos", () => {

    it("Testa getAll", async () => {
      sinon.stub(connection, "execute").resolves(mocks.allProductsResponse);
      const result = await productsModel.getAll();
      expect(result).to.deep.equal(mocks.allProductsResponse);
    })

    it("testa getById", async () => {
      sinon.stub(connection, "execute").resolves(mocks.productSearchIdResponse)
      const result = await productsModel.getById(1);
      expect(result).to.deep.equal(mocks.productSearchIdResponse);
    })

  });
  
  afterEach(sinon.restore);
})