import React from "react"

class lightboxComp extends React.Component {
  constructor(props) {
    super()
    this.lbs = props.lbs
    this.image = props.path
  }
  render() {
    return (<p className="text-2xl">{'lbs is '+this.lbs+' and image url is : '+this.image}</p>)
  }
}

export default lightboxComp;