// 
const { describe, it } = require('mocha');
const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../index')

const request = supertest(app)

describe('Traer productos todos o por id', () => {
  describe("Mostrar todos los productos", () => {
    it("retornar status 200", async () => {
      const response = await request.get('/api/productos')
      expect(response.status).to.eql(200)
    })
    it("retornar un array mayor a 0", async () => {
      const response = await request.get('/api/productos')
      expect(response.body.length).greaterThan(0)
    })
  })
  describe("mostrar un producto por id", () => {
    it("retornar un producto", async () => {
      const response = await request.get('/api/productos/63323384c26e667691506bb3')
      // console.log(response.body);
      expect(response.body.nombre).to.eq('ProductoActualizadoTest')
    });
    it("producto inexistente para id que no exista", async () => {
      const response = await request.get('/api/productos/asdsad');
      // console.log(response)
      expect(response.text).to.eq('{"message":"No se encontro el producto"}');
    });
  });
});

describe("guardar producto", () => {
  it("guardar el producto enviado", async () => {
    const newProduct = { nombre: "nuevo Producto test", precio: "nuevo Producto test", imagen: "nuevo Producto test" };
    const response = await request.post('/api/productos').send(newProduct);
    console.log(response.body);
    expect(response.body).to.include.keys("idProducto");
  });
});


describe('modificar un producto', () => {
  it("si el producto no existe", async () => {
    const response = await request.put('/api/productos/20')
    expect(response.text).to.eq('{"success":false,"error":"No se econtro el producto"}')
  })
  it("modifica el producto si existe", async () => {
    const newProduct = { nombre: 'ProductoActualizadoTest' }
    const response = await request.put('/api/productos/63323384c26e667691506bb3').send(newProduct)
    console.log(response.body);
    expect(response.body).to.eq('63323384c26e667691506bb3')
  })
})

describe("eliminar un producto", () => {
  it("si no existe el id", async () => {
    const response = await request.delete('/api/productos/20')
    console.log(response.text)
    expect(response.text).to.eq(`{"success":false,"error":"No se econtro el producto"}`)
  })
  it("elimina el producto si encuentra el id", async () => {
    const response = await request.delete("/api/productos/631f87c31690a81e2cbfdf94");
    expect(response.body).to.include.keys("idProducto");
  });
});