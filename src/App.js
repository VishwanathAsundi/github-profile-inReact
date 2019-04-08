import React, { Component } from 'react';
import SearchProfile from './search-profile';
import Profile from './profile';

const API = 'https://api.github.com/users';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'S.Vishwanath',
      name: '',
      avatar: '',
      location: '',
      repos: '',
      followers: '',
      following: '',
      homeUrl: '',
      notFound: ''
    }
  }
  fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      .catch((error) => console.log('Oops there is a problem'))
  }
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }

  render() {
    return (
      <div>
        <section className="prof-card">
          <SearchProfile fetchProfile={this.fetchProfile.bind(this)} />
          <Profile data={this.state} />
        </section>
        <span className="my-name">Created by S. Vishwanath</span>
      </div>
    )
  }
}
export default App;