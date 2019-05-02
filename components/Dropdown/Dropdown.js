class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector();
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content;
    
    this.button.addEventListener('click', () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));