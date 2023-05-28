import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Create a product', async function() {
    const newProduct = ProductModel.build({
      id: 2,
      name: 'Luva do Thanos',
      orderId: 4,
      price: '88',
    });

    sinon.stub(ProductModel, 'create').resolves(newProduct);

    const response = await chai.request(app)
    .post('/products')
    .send({
      name: 'Luva do Thanos',
      orderId: 4,
      price: '88',
    });

    expect(response.status).to.be.equal(201);

    expect(response.body).to.be.deep.equal([newProduct.dataValues]);

  });
});