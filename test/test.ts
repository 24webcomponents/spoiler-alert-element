import {assert, fixture, html} from '@open-wc/testing'
import '../src/spoiler-alert-element'

describe('spoiler-alert', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('spoiler-alert')
      assert.equal('SPOILER-ALERT', el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.SpoilerAlertElement()
      assert.equal('SPOILER-ALERT', el.nodeName)
    })
  })

  describe('after tree insertion', function () {
    beforeEach(async function () {
      await fixture(html` <spoiler-alert></spoiler-alert>`)
    })

    it('initiates', function () {
      const ce = document.querySelector('spoiler-alert')
      assert.equal(ce?.textContent, ':wave:')
    })
  })
})
