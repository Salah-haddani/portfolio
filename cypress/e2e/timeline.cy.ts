describe('Timeline Component', () => {
    beforeEach(() => {
      // Visit the page containing the experiences component
      cy.visit('http://localhost:3000/experiences'); 
    });
  
    it('should display the correct introduction text', () => {
      // Check if the introductory paragraph exists and contains the correct text
      cy.contains('Experienced software engineer specializing in full-stack development').should('exist');
    });
  
    it('should display timeline entries with the correct years', () => {
      // Check for each section of the timeline
      cy.contains('2024 - Present').should('exist');
      cy.contains('Software Engineer Internship at NETOPIA Morocco').should('exist');
  
      cy.contains('2023 - 2023').should('exist');
      cy.contains('Software Engineer Internship at DEVACTUS Morocco').should('exist');
  
      cy.contains('2022 - 2022').should('exist');
      cy.contains('Software Engineer Internship at FMJ Morocco').should('exist');
    });
  
    it('should have visual markers in the timeline', () => {
      // Check if the visual markers exist for each entry
      cy.get('.h-3').should('have.length', 3); // Adjust selector based on the HTML structure of markers
    });
  
    it('should verify the AI-powered job posting description', () => {
      // Check if the specific job description appears
      cy.contains('AI-powered job posting management platforms and enhancing recruitment efficiency').should('exist');
    });
  
    it('should scroll smoothly through the timeline', () => {
      // Ensure that scrolling reveals more of the timeline if applicable
      cy.scrollTo('bottom');
      cy.contains('Software Engineer Internship at FMJ Morocco').should('be.visible');
    });
  });
  