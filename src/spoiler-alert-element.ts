const html = String.raw

/**
 * Mask text until the user interacts with it!
 *
 * ```
 * <spoiler-alert>Hidden text</spoiler-alert>
 * ```
 */
class SpoilerAlertElement extends HTMLElement {
  #renderRoot = this.attachShadow({mode: 'open'})

  connectedCallback(): void {
    // eslint-disable-next-line github/no-inner-html
    this.#renderRoot.innerHTML = html`
      <style>
        :host(:not([spoiled])) {
          background: black;
        }
        :host(:not([spoiled])) span {
          visibility: hidden;
        }
      </style>
      <span>
        <slot></slot>
      </span>
    `
    this.addEventListener('click', this)
  }

  get spoiled(): boolean {
    return this.hasAttribute('spoiled')
  }

  set spoiled(value: boolean) {
    this.toggleAttribute('spoiled', value)
  }

  handleEvent() {
    this.spoiled = true
    try {
      getSelection()?.removeAllRanges()
    } catch {
      // Empty block!
    }
  }
}

declare global {
  interface Window {
    SpoilerAlertElement: typeof SpoilerAlertElement
  }
}

export default SpoilerAlertElement

if (!window.customElements.get('spoiler-alert')) {
  window.SpoilerAlertElement = SpoilerAlertElement
  window.customElements.define('spoiler-alert', SpoilerAlertElement)
}
