/// <reference types="cypress"/>



describe('API Demo test',()=>{
    let id;
    let authToken;
    //implicit Object 
    // explicit Object
    //JSON --> JavaScript Object annotation
    xit('verify Get booking for one booking', () => {
        cy.request('GET','https://restful-booker.herokuapp.com/booking/2').then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.firstname).to.equal('Jim')
            expect(response.body.bookingdates.checkin).to.equal('2021-05-28')
            expect(response.body.totalprice).to.equal(289)
        })
    });

    xit('Verify Add Booking', () => {
        let payload = {
            "firstname" : "Tom",
            "lastname" : "Hardy",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
        // cy.request('POST','https://restful-booker.herokuapp.com/booking',payload).then((resp)=>{

        // })

        cy.request({
            method:'POST',
            url:'https://restful-booker.herokuapp.com/booking',
            body:payload
        }).then((res)=>{
           expect(res.status).to.equal(200)
           expect(res.body.bookingid).not.null
           id = res.body.bookingid
           cy.log(`booking id is ${id}`)
        })
        cy.log(`booking id is ${id}`)
        
    });

    it('Auth Call', () => {
     authToken = cy.request({
            method:'POST',
            url:'https://restful-booker.herokuapp.com/auth',
            body:{
                "username":"admin",
                "password":"password123"
            }
        }).then((res)=>{
           // cy.log(res.body.token)
            return res.body.token;
        })
        authToken.then((data)=>console.log(data))
        cy.log(`auth token ==> ${authToken}`)
    });

    xit('get all booking', () => {
        cy.request({
            method:'GET',
            url:'https://restful-booker.herokuapp.com/booking'
        }).then((res)=>{
            expect(res.body.length).to.greaterThan(0)
        })
    });
})