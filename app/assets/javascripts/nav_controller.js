import { Controller } from "@hotwired/stimulus"
import { toggle } from "el-transition"

export default class extends Controller {
  static targets = ["menu", "dropdown1", "dropdown2", "dropdown3", "filter"]

  toggleMenu() {
    // toggle('hidden');
    toggle(this.menuTarget);
    if (window.innerWidth > 768) {
      this.menuTarget.classList.toggle('md:hidden');
    }

    if (window.innerWidth < 768) {
      this.filterTarget.classList.toggle('hidden');
    }
  }

  toggleDropdown(event) {
    const dropdown = event.currentTarget.children[1].dataset.navTarget;
    const target = this[`${dropdown}Target`];

    const dropdownTargets = [
      this.dropdown1Target,
      this.dropdown2Target,
      this.dropdown3Target
    ];

    dropdownTargets.forEach(dropdownTarget => {
      if (dropdownTarget && dropdownTarget !== target && !dropdownTarget.classList.contains("hidden")) {
        toggle(dropdownTarget);
      }
    });

    if (target) {
      target.classList.toggle("hidden");
    }
  }

  hideMenuOutsideClick(event) {
    const filter = event.target.closest("[data-nav-target='filter']");
    if (filter) {
      this.menuTarget.classList.add("hidden");
      this.filterTarget.classList.add("hidden");
    }
  }

  hideDropdown = (event, targetName) => {
    const target = this[`${targetName}Target`];
    if (target) {
      if (!this.element.contains(event.target) && !target.classList.contains("hidden")) {
        toggle(target);
      }
    }
  }

  connect() {
    if (window.innerWidth < 768) {
      this.menuTarget.classList.add("hidden");
      this.filterTarget.classList.add("hidden");
      document.addEventListener("click", this.hideMenuOutsideClick.bind(this));
    }
    document.addEventListener("click", (event) => { this.hideDropdown(event, "dropdown1") });
    document.addEventListener("click", (event) => { this.hideDropdown(event, "dropdown2") });
    document.addEventListener("click", (event) => { this.hideDropdown(event, "dropdown3") });
  }

  disconnect() {
    if (window.innerWidth < 768) {
      document.removeEventListener("click", this.hideMenuOutsideClick.bind(this));
    }
    document.removeEventListener("click", (event) => this.hideDropdown(event, "dropdown1"));
    document.removeEventListener("click", (event) => this.hideDropdown(event, "dropdown2"));
    document.removeEventListener("click", (event) => this.hideDropdown(event, "dropdown3"));
  }
}