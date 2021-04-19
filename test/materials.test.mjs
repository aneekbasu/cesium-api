process.env.NODE_ENV = 'test'

import chai from 'chai'
import app from '../server.mjs'
import chaiHttp from 'chai-http'

let id
, site

chai.use(chaiHttp)
//Assertion Style
chai.should()

describe('Construction Materials API', () => {

  /**
   * Test the create a construction material route
   */

  it('Should be able to create a construction material', done => {
    chai.request(app)
      .post('/api/v1/material')
      .send({
        "name":"Chip",
        "volume":200,
        "cost":100,
        "color":"#808080",
        "delivery":"2021-04-18",
        "site":"23b3b16d-6d31-4873-a49f-13ca8a8b94d3"
      })
      .end((err, response) => {
        id = response.body.data.id
        site = response.body.data.site
        response.should.have.status(200)
        response.body.message.should.be.eql('Material inserted')
        response.body.should.not.be.null
        done()
      })
  })

  /**
  * Test the findMany construction material route
  */
   it('Should be able to get all construction materials in a site', done => {
    chai.request(app)
      .get(`/api/v1/materials/${site}`)
      .end((err, response) => {
        if (err) {
          throw err
        } else {
          response.should.have.status(200)
          response.body.should.not.be.null
          response.body.data.should.be.a('array')
          done()
        }
      })
  })

  it('Should be able to get one construction material', done => {
    chai.request(app)
      .get(`/api/v1/material/${id}`)
      .end((err, response) => {
        if (err) {
          throw err
        } else {
          response.should.have.status(200)
          response.body.should.not.be.null
          response.body.data.should.be.a('array')
          done()
        }
      })
  })

  /**
   * Test the update construction material route
   */
  it('Should be able to update a construction material', done => {
    chai.request(app)
      .put(`/api/v1/material/${id}`)
      .send({
        "name":"Sand",
        "volume":100,
        "cost":100,
        "color":"#808081",
        "delivery":"2021-04-19",
      })
      .end((err, response) => {
        response.should.have.status(200)
        response.body.should.not.be.null
        response.body.message.should.be.eql('Material updated')
        done()
      })
  })

  /**
  * Test the delete construction material route
  */
  it('Should be able to delete a construction material', done => {
    chai.request(app)
      .delete(`/api/v1/material/${id}`)
      .end((err, response) => {
        response.should.have.status(200)
        response.body.should.not.be.null
        done()
      })
  })

})