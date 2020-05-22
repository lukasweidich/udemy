class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this._tooltipText = "Some dummy text."
        this.attachShadow({ mode: "open" })
        this.shadowRoot.innerHTML = `
        <style>
        div{
            font-weight: normal;
            top: 1.5rem;
            left: .75rem;
            background-color: black;
            color: white;
            position: absolute;
            z-index: 10;
            padding: .15rem;
            border-radius: 3px;
            box-shadow: 1px 1px 6px rgba(0,0,0,0.25);
        }

        .highlight {
            background-color: yellow;
        }

        ::slotted(.highlight){
            border-bottom: 1px dotted red
        }

        .icon{
            background: black;
            color: white;
            padding: .25rem .5rem;
            text-align: center;
            border-radius: 50%;
        }

        :host-context(p){
            font-weight: bold;
        }

        :host(.important){
            background: var(--color-primary, grey);
            padding: 1px
        }
        </style>
        <slot>Some Default</slot>
        <span class="icon">?</span>
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

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue)
    }

    static get observedAttributes() {
        return ["text"]
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