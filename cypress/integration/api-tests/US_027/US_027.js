Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });

describe('DELETE', () => {
      it('Delete states data', () => {
        
 });

 Given('Deletes user endpoint {string} and id {string} state',(endpoint,id)=>{
  
    cy.api({
        url: endpoint + id ,
       method:'DELETE',
        auth: {
            username: 'team69Admin',
            password: 'Team69+'
          },
        
      }).then((res)=>{
      expect(res.status).to.eq(204);
   
      })     
           
      })
  
  
  })
 
