describe('Flujos de registro', () => {
   beforeEach(() => {
    cy.visit('auth/signup');
  });

  it('Registro de usuario exitoso', () => {
     cy.get('[name="email"]').type ('mimigg@testing.com');
     cy.get('[name="name"]').type ('Mimiamor,IndraC');
     cy.get('[name="password"]').type('M4jdnNwb');
     cy.get('[name="repeatPassword"]').type('M4jdnNwb');
     cy.get('[data-at="submit-signup"]').click();
     cy.get('#swal2-title').should('have.text','Operación Exítosa');
     });
});