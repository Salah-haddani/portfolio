import { FloatingNav } from "../support/PageObject/floatingNav";
import { search } from "../support/PageObject/search";

describe("FloatingNav Component", () => {
  beforeEach(() => {
    // Visit the page where the component is mounted
    cy.visit("http://localhost:3000");
  });

  const SearchModel = new search();
  const floatingNav = new FloatingNav();

  it("should render navigation items correctly", () => {
    const navItems = ["About", "Projects", "Skills", "Experiences"];

    // Check if all nav items are rendered and visible
    navItems.forEach((item) => {
      cy.contains(item).should("be.visible");
    });

    // Check if the profile name is visible
    cy.contains("Salah Haddani").should("be.visible");

    // Verify the "Download CV" button is rendered
    cy.contains("Download CV").should("be.visible");
  });

  it("should open and close the modal when clicking the search icon", () => {
    // Open the modal by clicking the search icon
    cy.get(".search").click();

    cy.get("body").click(0, 0);

    // Verify the modal is no longer visible
  });

  it('should open the modal, search for "React", and show results', () => {
    // Open the search modal
    SearchModel.openSearchModal();

    // Type 'React' in the search input
    SearchModel.typeInSearchInput("React");

    // Verify the search result is visible
    SearchModel.checkSearchResultVisible("React.js"); // Assuming 'React' appears in search results
  });

  it("should submit the search form correctly", () => {
    // Open the modal
    // Open the search modal
    SearchModel.openSearchModal();

    // Type 'React' in the search input
    SearchModel.typeInSearchInput("React");
    SearchModel.submitSearchForm();
    // Verify the search result is visible
    SearchModel.checkSearchResultVisible("React.js"); // Ass
  });

  it("should close the modal when clicking outside", () => {
    SearchModel.openSearchModal();

    SearchModel.closeSearchModal();
  });

  it("should navigate to the Projects page when clicking on the Projects link", () => {
    // Click on the "Projects" link
    floatingNav.clickProjectsLink("Projects");

    // Verify the URL is correct
    floatingNav.verifyUrl("/projects"); // Adjust the URL if necessary

    // Verify the Projects page is visible
    floatingNav.verifyProjectsPageVisible("Software Solutions");
  });
});
