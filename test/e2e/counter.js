describe('Counter', () => {
  it('can increment its value', () => {
    browser.url('/counter')
    let button = $('button')

    expect(button.getText()).to.be.equal('Count: 0')

    button.click()
    expect(button.getText()).to.be.equal('Count: 1')

    button.click()
    expect(button.getText()).to.be.equal('Count: 2')
  })
})
