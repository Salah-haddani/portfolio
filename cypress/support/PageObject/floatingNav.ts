export class FloatingNav {
    // Other methods...
  
    // Method to click on the "Projects" link
    clickProjectsLink(button:string) {
      cy.contains(button).click(); // Assuming 'Projects' is the link text
    }
  
    // Method to verify the URL is correct after navigation
    verifyUrl(url: string) {
      cy.url().should('include', url);
    }
  
    // Method to verify the Projects page is visible
    verifyProjectsPageVisible(text:string) {
      cy.contains(text).should('be.visible'); // Replace 'My Projects' with a unique element on the Projects page
    }
  }