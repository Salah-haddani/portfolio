export class search {

 openSearchModal() {
    // Click on the search icon to open the modal
    cy.get('.search').click(); 
}

  // Method to type in the search input
  typeInSearchInput(query: string) {
    cy.get('input[type="text"]').clear().type(query);
  }

  // Method to submit the search form
  submitSearchForm() {
    cy.get('form').submit();
  }

  // Method to check if a search result is visible
  checkSearchResultVisible(result: string) {
    cy.contains(result).should('be.visible');
  }

  // Method to check if no results are found
  checkNoResultsVisible() {
    cy.contains('No results found').should('be.visible');
  }

  // Method to close the modal by clicking outside
  closeSearchModal() {
    cy.get('body').click(0, 0);
  }
}