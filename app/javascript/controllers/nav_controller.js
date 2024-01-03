import { Controller } from "@hotwired/stimulus"
import { toggle } from 'el-transition'

export default class extends Controller {
  static targets = ["menu", "filter"]

  toggle() {
    console.log("Ok")
    toggle(this.menuTarget);
    toggle(this.filterTarget);
    // this.menuTarget.classList.toggle('hidden');
    // this.filterTarget.classList.toggle('hidden');
  }

  // hide = (event) => {
  //   if (!this.element.contains(event.target) && !this.menuTarget.classList.contains('hidden')) {
  //     toggle(this.menuTarget);
  //   }
  // }

  hideMenuOutsideClick(event) {
    const filter = event.target.closest("[data-nav-target='filter']");
    if (filter) {
      this.menuTarget.classList.add("hidden");
      this.filterTarget.classList.add("hidden");
    }
  }

  connect() {
    // this.menuTarget.classList.add("hidden");
    // this.filterTarget.classList.add("hidden");
    document.addEventListener("click", this.hideMenuOutsideClick.bind(this));
  }

  disconnect() {
    document.removeEventListener("click", this.hideMenuOutsideClick.bind(this));
  }
}
