
class TabLink {
  constructor(element) {
    this.element = element;
    this.datatab = this.element.dataset.tab;
    this.itemLink = document.querySelector(`.tabs-link[data-tab="${this.datatab}"]`);
    this.itemContent = document.querySelector(`.tabs-item[data-tab="${this.datatab}"]`);
    this.itemElement = new TabItem(this.itemContent);
    this.itemLink.addEventListener('click', () => {
      this.handleClick()
    })
  };

  handleClick() {
    const links = document.querySelectorAll('.tabs-link');

    links.forEach(link => {
      link.classList.remove('tabs-link-selected');
    })

    this.element.classList.add('tabs-link-selected');
    // Call the select method on the item associated with this link
    this.itemElement.handleToggle();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;

  }

  handleToggle() {
    const tabItems = document.querySelectorAll('.tabs-item');
    
    tabItems.forEach(element => {
      element.classList.remove('tabs-item-selected');
    })

    this.element.classList.add('tabs-item-selected');
  }
}



links = document.querySelectorAll(".tabs-link");
links.forEach(link => {
  return new TabLink(link);
})