import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    const dropdownElements = document.querySelectorAll('[id^="dropdown-"]');

    dropdownElements.forEach(element => {
      element.addEventListener('click', (e) => {
        if (!e.target.matches('a')) {
          element.children[1].classList.toggle('hidden');
        }
      });
    })
  }
}
