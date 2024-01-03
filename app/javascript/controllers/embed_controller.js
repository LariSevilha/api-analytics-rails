import { Controller } from "@hotwired/stimulus"
import axios from "axios"

export default class extends Controller {
  connect() {
    const oembedElements = document.querySelectorAll('oembed[url]');
    oembedElements.forEach((element) => {
      const url = element.attributes.url.value;
      this.fetchData(element, url);
    });
  }

  async fetchData(element, url) {
    try {
      const response = await axios.get("/embed/fetch", {
        params: { url: url }
      });

      const html = response.data.html;
      element.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }
}
