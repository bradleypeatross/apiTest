const request = require('supertest')
//const app = require('https://jsonplaceholder.typicode.com')

describe('GET https://jsonplaceholder.typicode.com/posts/1/comments', function() {
    it('responds with 200 and some JSON', function(done) {
        request("https://jsonplaceholder.typicode.com/posts/1/")
        .get('comments')
        .expect('Content-Type', /json/)
        .expect(200, done)
    }) 
})

describe('GET https://jsonplaceholder.typicode.com/albums/1/photos', function() {
    it('responds with 200 and some JSON', function(done) {
        request("https://jsonplaceholder.typicode.com/albums/1/")
        .get('photos')
        .expect('Content-Type', /json/)
        .expect(200, done)
    }) 
})

describe('GET https://jsonplaceholder.typicode.com/users/1/albums', function() {
    it('responds with 200 and some JSON', function(done) {
        request("https://jsonplaceholder.typicode.com/users/1/")
        .get('albums')
        .expect('Content-Type', /json/)
        .expect(200, done)
    }) 
})

describe('GET https://jsonplaceholder.typicode.com/users/1/todos', function() {
    it('responds with 200 and some JSON', function(done) {
        request("https://jsonplaceholder.typicode.com/users/1/")
        .get('todos')
        .expect('Content-Type', /json/)
        .expect(200, done)
    }) 
})

describe('GET https://jsonplaceholder.typicode.com/users/1/posts', function() {
    it('responds with 200 and some JSON', function(done) {
        request("https://jsonplaceholder.typicode.com/users/1/")
        .get('posts')
        .expect('Content-Type', /json/)
        .expect(200, done)
    }) 
})

describe('POST /post', function() {
    it('responds with json adn 201', function(done) {
      request('https://jsonplaceholder.typicode.com/')
        .post('posts')
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
