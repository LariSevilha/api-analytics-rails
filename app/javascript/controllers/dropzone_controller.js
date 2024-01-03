import { Controller } from "@hotwired/stimulus"
import { Dropzone } from "dropzone";

// Connects to data-controller="dropzone"
export default class extends Controller {

  connect() {
    new Dropzone("form.dropzone", {
      dictDefaultMessage: "Arraste suas fotos aqui!"
    });
  }
}