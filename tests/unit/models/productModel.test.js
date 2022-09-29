const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const mocks = require('../../mock');

const connection = require("../../../src/models/connection");
const productsModel = require("../../../src/models/productModel");

describe("Testa a productModel", () => {
  describe("verifica funções da camada model dos produtos", () => {

    it("Testa 'getAll'", async () => {
      const allProducts = [[...mocks.allProductsResponse]];
      sinon.stub(connection, "execute").resolves(allProducts);
      const result = await productsModel.getAll();
      const prds = [result]
      expect(prds).to.deep.equal(allProducts);
    })

    it("testa 'getById'", async () => {
      const product = mocks.productSearchIdResponse;
      sinon.stub(connection, "execute").resolves(product)
      const result = await productsModel.getById(1);
      const prd = [result];
      expect(prd).to.deep.equal(product);
    })

    it("testa 'create'", async () => {
      const product = [{insertId: 4}];
      sinon.stub(connection, "execute").resolves(product);
      const name = 'Produto1';
      const result = await productsModel.create(name);
      expect(result).to.deep.equal(4);
    })

    it("testa 'update'", async () =>  {
      const product = [{affectedRows: 1}];
      sinon.stub(connection, "execute").resolves(product);
      const id = 4;
      const name = 'Produto1';
      const result = await productsModel.update(name, id);
      expect(result).to.deep.equal(1);
    })

    it("testa 'remove'", async () => {
      const product = [{affectedRows: 1}];
      sinon.stub(connection, "execute").resolves(product);
      const id = 4;
      const result = await productsModel.remove(id);
      expect(result).to.deep.equal(1);
    })

  });
  
  afterEach(sinon.restore);
})