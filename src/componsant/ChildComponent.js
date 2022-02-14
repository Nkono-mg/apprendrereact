import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        childName : ''
      }
      console.log(`je suis dans le constructor() enfant`)
    }

    componentDidMount() {
        console.log(`je suis dans le componentDidMount()  enfant`)
    }
  render() {
    console.log(`je suis dans le render() enfant`)
    return (
      <div>
          {console.log(`Mise à jour DOM enfant`)}
          </div>
    )
  }
}

export default ChildComponent