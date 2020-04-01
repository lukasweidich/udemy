class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener("click", event => {
            confirm("Do you really want to leave?") ?
                null : event.preventDefault();
        })
    }
}

customElements.define("lukwei-confirm-link", ConfirmLink, { extends: "a" });