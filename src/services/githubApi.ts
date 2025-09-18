


export async function getUser(username: string) {
    const res = await fetch(`https://api.github.com/search/users?q=${username}`);
    if (!res.ok) {
      if (res.status === 403) {
        throw new Error("GitHub API rate limit exceeded. Please wait a bit.");
      }
      throw new Error("Network error.");
    }
    return res.json();
  }