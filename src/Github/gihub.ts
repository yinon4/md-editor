import { Octokit } from 'octokit'

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_TOKEN,
})

const getFile = async () =>
  octokit.request('GET /repos/yinon4/yinon-doc/readme', {
    owner: 'yinon4',
    repo: 'yinon-doc',
    path: 'README.md',
    branch: 'dev',
  })

export const writeFile = async (content: string) =>
  octokit.request('PUT /repos/yinon4/yinon-doc/contents/README.md', {
    owner: 'yinon4',
    repo: 'yinon-doc',
    path: 'README.md',
    message: 'my commit message',
    branch: 'dev',
    content: btoa(content),
    sha: (await getFile()).data.sha,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

export const githubMarkdown = atob((await getFile()).data.content)
