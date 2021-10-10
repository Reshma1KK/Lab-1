
var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://localhost:3001");
var assert = require("assert");

describe('Incorrect Restaurant Login', function () {

        it('Password too short',(done) => {
            server.post("/RestaurantLogin")
                .send({ email: "mcd@gmail.com", password: " " })
                .then(function (res) {
                    assert.equal(res.status, 401);
                    done();
                })
                .catch(done);
        });

        it('View Restaurants', (done) => {
            server.get("/Dishes")
                .send({ customerName: "Kash", city:"San Jose" })
                .then(function (res) {
                    assert.equal(res.status, 200);
                    done();
                })
                .catch(done);
        });
    });
