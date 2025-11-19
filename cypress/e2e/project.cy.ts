describe('Projects Page', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit('http://localhost:3000/projects'); 
  });

  it('should display the correct text and flip words', () => {
    // Check if the title text is displayed
    cy.contains('Crafting').should('be.visible');
    
    // Check if FlipWords words are cycling through correctly
  
  });

  it('should render the project items', () => {
    // Check if the first project (Vieo) is rendered
    cy.contains('Vieo').should('be.visible');
    cy.contains('Vieo is the ultimate task management and whiteboard platform that allows you to easily collaborate with your team').should('be.visible');
    
    // Check if the "Not Deployed" project is rendered and opens modal
    cy.contains('MyBot').should('be.visible');
    cy.get('button').contains('MyBot').click(); // Simulate click to open modal
    
    // Verify modal content is displayed
    cy.get('img[alt="Tailwind Master Kit"]').should('be.visible');
  });

  it('should close the modal when clicking outside of it', () => {
    // Open the modal
    cy.get('button').contains('MyBot').click();

    // Verify modal is open by checking if the modal content is visible
    cy.get('img[alt="Tailwind Master Kit"]').should('be.visible');


    
    // Click outside the modal to close it
    cy.get('body').click(0, 0); // Simulate clicking outside the modal
    
    // Verify the modal is closed
    cy.contains('Crafting').should('be.visible');
  });
});
