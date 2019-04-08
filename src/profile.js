import React from 'react';

class Profile extends React.Component {
    render() {
        let data = this.props.data;
        let followers = `${data.homeUrl}/followers`;
        let following = `${data.homeUrl}/following`;
        let repositories = `${data.homeUrl}?tab=repositories`;
        if (data.notFound === 'Not Found') {
            return (
                <div className="notfound">
                    <h2>Oops !</h2>
                    <h2>The User didn't find. Try Again.</h2>
                </div>
            )
        }
        else
            return (
                <section className="github--profile">
                    <div className="github--profile__info">
                        <a href={data.homeUrl} target="_blank" title={data.name || data.username}>
                            <img src={data.avatar} alt={data.username} />
                        </a>
                        <h2><a href={data.homeUrl} title={data.username} target="_blank">{data.name || data.username}</a></h2>
                        <h3>{data.location || 'I live in my mind'}</h3>
                    </div>
                    <div className="github--profile__state">
                        <ul>
                            <li>
                                <a href={followers} title="Number of Followers" target="_blank">
                                    <i>{data.followers}</i><span>Followers</span>
                                </a>
                            </li>
                            <li>
                                <a href={following} title="You are Following" target="_blank">
                                    <i>{data.following}</i><span>Following</span>
                                </a>
                            </li>
                            <li>
                                <a href={repositories} title="Number of repositories" target="_blank">
                                    <i>{data.repos}</i><span>Repositories</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            )
    }
}
export default Profile;