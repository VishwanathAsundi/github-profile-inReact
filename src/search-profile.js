import React from 'react';

class SearchProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    handleForm(e) {
        e.preventDefault();
        let username = this.state.username;
        this.props.fetchProfile(username);
        this.setState({ username: '' });
    }
    handleChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.handleForm.bind(this)}>
                    <label>
                        <input
                            type="search"
                            onChange={this.handleChange.bind(this)}
                            placeholder="Type Username   +   Enter"
                        />
                    </label>
                </form>
            </div>
        )
    }
}
export default SearchProfile;