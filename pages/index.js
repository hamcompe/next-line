import React from 'react'

class Page extends React.Component {
  state = {
    displayName: null,
    userId: null,
    pictureUrl: null,
    statusMessage: null,
  }
  componentDidMount () {
    console.log('liff', window.liff)
    window.addEventListener('load', this.initialize);
  }
  initialize() {
    liff.init(async (data) => {
      let profile = await liff.getProfile()
      this.setState({
        displayName : profile.displayName,
        userId : profile.userId,
        pictureUrl : profile.pictureUrl,
        statusMessage : profile.statusMessage
      })
    })
  }
  closeApp(event) {
    event.preventDefault()
    liff.sendMessages([{
      type: 'text',
      text: "Thank you, Bye!"
    }]).then(() => {
      liff.closeWindow()
    })
  }
  render () {
    return (
      <div>
        <h1>
          Hello
        </h1>
        <button onClick={this.closeApp}>close</button>
      </div>
    )
  }
}

export default Page