class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this._tooltipText = "Some dummy text."
        this.attachShadow({ mode: "open" })
        this.shadowRoot.innerHTML = `
        <style>
        div{
            background-color: black;
            color: white;
            position: absolute;
            z-index: 10;
        }
        </style>
        <slot>Some Default</slot>
        <span> (?) </span>
        `;
    }

    connectedCallback() {
        this.hasAttribute("text") ?
            this._tooltipText = this.getAttribute("text") : null;
        const tooltipIcon = this.shadowRoot.querySelector("span");
        tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
        tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
        this.shadowRoot.appendChild(tooltipIcon)
        this.style.position = "relative";
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement("div")
        this._tooltipContainer.textContent = this._tooltipText;

        this.shadowRoot.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.shadowRoot.removeChild(this._tooltipContainer);
    }
}

customElements.define("lukwei-tooltip", Tooltip);