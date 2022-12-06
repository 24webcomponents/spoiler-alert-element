import {expect, fixture, html} from '@open-wc/testing'
import '../src/spoiler-alert-element'

describe('spoiler-alert', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('spoiler-alert')
      expect('SPOILER-ALERT').to.equal(el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.SpoilerAlertElement()
      expect('SPOILER-ALERT').to.equal(el.nodeName)
    })
  })

  describe('after tree insertion', function () {
    beforeEach(async function () {
      await fixture(html` <spoiler-alert></spoiler-alert>`)
    })

    it("isn't spoiled by default", function () {
      const ce = document.querySelector('spoiler-alert')
      expect(ce).to.not.have.attribute('spoiled')
    })

    it('is spoiled after click', function () {
      const ce = document.querySelector('spoiler-alert')!
      ce.dispatchEvent(new Event('click'))
      expect(ce).to.have.attribute('spoiled')
    })
  })
})
