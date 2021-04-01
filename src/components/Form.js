import { Component } from 'react';
import Message from './Message'

class Form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    blog: "",
    complete: false
  }

  onValidURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  onSubmit = () => {
    if (this.state.name && this.state.email && this.state.phone && this.state.blog) {
      var urlTest = this.onValidURL(this.state.blog);
      if (urlTest === true) {
        this.setState({ complete: true });
      }
    } else {
      this.setState({ complete: false });
    }
  }

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form >
          <h3>Name:</h3>
          <input onChange={(event) => this.setState({name: event.target.value})} type="text" value={this.state.name} placeholder="Enter your name"></input>
          <h3>Email:</h3>
          <input onChange={(event) => this.setState({email: event.target.value})} type="email" value={this.state.email} placeholder="Enter your email"></input>
          <h3>Phone:</h3>
          <input type="text" onChange={(event) => this.setState({phone: event.target.value})} value={this.state.phone} placeholder="Enter your phone number"></input>
          <h3>Blog URL:</h3>
          <input type="url" onChange={(event) => this.setState({blog: event.target.value})} value={this.state.blog} placeholder="Enter your blog URL"></input>
          <div className="small-6 small-centered text-center columns">
            <a href="#" onClick={this.onSubmit} className="button success expand round text-center">
              Verify
            </a>
          </div>
        </form>
        <Message show={this.state.complete} />
      </div>
    )
  }
}

export default Form
