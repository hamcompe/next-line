import React from 'react'
import {burger} from '../constants'

class Page extends React.Component {
  state = {
    displayName: null,
    userId: null,
    pictureUrl: null,
    statusMessage: null,
  }
  componentDidMount () {
    window.addEventListener('load', this.initialize);
  }

  initialize = () => {
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

  closeApp = async (e) => {
    e.preventDefault()
    await liff.sendMessages([{
      type: 'text',
      text: "Thank you, Bye!"
    }])
    liff.closeWindow()
  }
  sendFlex = async (e) => {
    e.preventDefault()
    await liff.sendMessages([
      {...burger}
    ])
    liff.closeWindow()
  }
  render () {
    return (
      <div>
        <h1>
          Hello
        </h1>
        <button onClick={this.closeApp}>close</button>

        <button onClick={this.sendFlex}>Sending Flex Message</button>
      </div>
    )
  }
}

export default Page
