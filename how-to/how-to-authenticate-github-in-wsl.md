# How to authenticate GitHub in WSL

The GitLab authentication works automatically in WSL, but GitHub has some issues: I'm not able to run git commands from VS Code in WSL. How can I solve this?

With GitHub CLI!

- Open a WSL command line
- Install github cli in WSL with:
  `curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg |sudo dd of=/etc/apt/trusted.gpg.d/githubcli-archive-keyring.gpg`

  `echo"deb [arch=$(dpkg --print-architecture)signed-by=/etc/apt/trusted.gpg.d/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main"|sudo tee /etc/apt/sources.list.d/github-cli.list >/dev/null`

  `sudo apt update`

  `sudo apt install gh`

  (Commands taken from [the official guide](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian-ubuntu-linux-raspberry-pi-os-apt))

- Once it's installed, login with your GitHub account:

```
gh auth login
? What account do you want to log into?
  [Select GitHub.com]
? What is your preferred protocol for Git operations?
  [Select SSH]
? Generate a new SSH key to add to your GitHub account?
  [Select Yes]
? Enter a passphrase for your new SSH key (Optional)
  [Add passphrase if you want, I didn't because VS Code will have problems with git commands]
? How would you like to authenticate GitHub CLI?
  [Select Login with a web browser]
```

And there you go 😊
