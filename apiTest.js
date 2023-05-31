// fetch('https://www.reddit.com/r/popular.json')
//     .then(res => res.json())
//     .then(data => console.log(data.data.children[1].data))

fetch('https://www.reddit.com/r/CasualUK/comments/13uwdln/to_repeat_the_same_thing_and_expect_a_different/.json')
    .then(res => res.json())
    .then(data => console.log(data[1].data.children[0].data.replies.data.children))
// fetch('https://www.reddit.com/r/AskReddit/comments/13vwcge/whats_the_most_disturbing_secret_youve_discovered.json').then(res => res.json()).then(data => console.log(data[0].data.children))