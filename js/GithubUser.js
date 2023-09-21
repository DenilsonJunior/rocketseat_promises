export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        .then(({login, name, html_url, public_repos, followers}) => ({
            login,
            name,
            html_url,
            public_repos,
            followers
        }))
    }
}