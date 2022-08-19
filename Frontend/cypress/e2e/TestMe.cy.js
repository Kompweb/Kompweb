describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
});

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://kompweb.netlify.app/');
  });
});

describe('Header Text', function () {
  it('Checks if header text exists', function () {
    // cy.visit('index.html');
    // cy.get('.logo-heading').contains('Fun Bus');
  });
});

describe('Logo Text', () => {
  it('finds the content "Kompweb"', () => {
    cy.visit('https://kompweb.netlify.app/');
    cy.contains('Kompweb ').click();
    // cy.url().should('include', '/commands/actions');

    // cy.get('.action-email')
    //   .type('fake@email.com')
    //   .should('have.value', 'fake@email.com');
  });
});

describe('Tag Line Text', () => {
  it('finds the content "React Solutions"', () => {
    cy.visit('https://kompweb.netlify.app/');
    cy.contains('React Solutions');
  });
});
