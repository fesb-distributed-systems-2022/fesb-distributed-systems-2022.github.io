# Lab 0: Git

## Table Of Contents
- [Lab 0: Git](#lab-0-git)
    - [Table Of Contents](#table-of-contents)
    - [**Exercise 1: Installing and configuring git**](#exercise-1-installing-and-configuring-git)
        - [**Download and setup git**](#download-and-setup-git)
        - [**Generate SSH keys**](#generate-ssh-keys)
    - [**Exercise 2: Configuring GitHub**](#exercise-2-configuring-github)
        - [**Adding private SSH key to GitHub**](#adding-private-ssh-key-to-github)
    - [**Exercise 3: Creating GitHub Repository**](#exercise-3-creating-github-repository)
        - [**Create remote repository**](#create-remote-repository)
    - [**Exercise 4: Cloning remote git repository and creating pull request**](#exercise-4-cloning-remote-git-repository-and-creating-pull-request)
        - [**Cloning repository**](#cloning-repository)
        - [**Adding and committing code to repository**](#adding-and-committing-code-to-repository)
        - [**Creating Pull Request**](#creating-pull-request)


## **Exercise 1: Installing and configuring git**

Git is the most used distributed version control system.
	 
	
### **Download and setup git**

Download git from https://git-scm.com/downloads link and choose to download for your operating system.

![select-git-components](./git-select-components.png)

If you know what you are doing, you can choose Vim as git’s default text editor, otherwise, I recommend using Visual Studio Code.

![git-code-editor](./git-code-editor.png)

Default branch name doesn’t matter much but it is still best to follow common practices which means naming it main branch.

![git-default-branch](./git-default-branch-name.png)

This step enables us to use git from other tools, for example powershell.

![git-powershell](./git-powershell.png)

Configure SSH for git as follows:

![git-ssh](./git-ssh.png)
![git-ssh2](./git-ssh2.png)

Follow the rest of installation steps and choose default options until git is installed. 

### **Generate SSH keys**

Git communicates with remote repositories using **SSH** protocol which is secured by private and public keys encryption.

In order for repositories to have access to remote repositories, private SSH keys which are generated locally must be added on remote repository vendors, for example GitHub, bitbucket…

To generate ssh keys, use command in your terminal:

```shell
ssh-keygen
```

and press enter for all options

![shh-keygen](./ssh-keygen.png)

SSH keypair is generated default location as stated 
`C:\Users\ivan.pazanin\.ssh\id_rsa` or more generally `C:\Users\{your-username}\.ssh\id_rsa`.

## **Exercise 2: Configuring GitHub**

GitHub is a provider of internet hosting for software development and version control using git.

### **Adding private SSH key to GitHub**

Open generated public ssh key (id_rsa.pub file) in text editor and copy all contents (CTRL+a, CTRL+c). 

In github go to: profile icon > Settings > SSH and GPG keys > New SSH key
Or https://github.com/settings/keys
In Title input give name for your SSH key (ex: my-personal-laptop)
In Key input paste copied public SSH key

![ssh-key-github](./ssh-key-github.png)

To add keypress, Add SSH key, no error message should be present if everything is done correctly.

## **Exercise 3: Creating GitHub Repository**

### **Create remote repository**
To create remote repository on github first go to your account or organization (ex: https://github.com/fesb-distributed-systems-2022 ) 
and press Create a new repository button (https://github.com/organizations/fesb-distributed-systems-2022/repositories/new )

![github-organization](./github-organization.png)

Repository name should follow pattern: `{your-username}-lab-{lab-number}` (ex: `ipazanin-lab-01`)

Or if repository is not part of lab practice: `{your-username}-{project-name}` (ex: `nknezovic-mothers-project`)

Description is optional, repository must be private, and finally initialize repository by adding README file, adding .gitignore (VisualStudio).

![github-create-new-repository](./github-create-new-repository.png)


## **Exercise 4: Cloning remote git repository and creating pull request**

### **Cloning repository** 

To clone remote repository go to created repository on github and press Code > SSH and copy contents.

![github-clone-ssh](./github-clone-ssh.png)

Open terminal on desired file system location and use command:

`git-clone {your-repository}` (ex: `git-clone git@github.com:fesb-distributed-systems-2021/ipazanin-lab-01.git`)

and now you can open cloned repository with Visual Studio Code using:
`code {your-repository-name}` (ex: `code ipazanin-lab-01`)

![vscode-project](./vscode-project.png)

You can learn more about .gitignore file on link https://git-scm.com/docs/gitignore

### **Adding and committing code to repository**

If you have previously created a project, you can copy and paste it to the repository folder or you can start creating a new project in the git folder.

Once you are satisfied with your code changes, you must commit them.
But first checkout to the new branch, code development is never done on the main branch (you can checkout to the new branch while having changes).

Open terminal in repository folder and use commands:

To check status of your project:

```shell
git status
```

![git-status](./git-status.png)

Tells me I have one un-staged file changed (README.md)

To create new branch and change git to that branch use:

`git checkout -b {your-branch-name}` 
(ex: `git checkout -b development`)

Until you know what you are doing, I recommend doing development on branch development.

```shell
git status
```

![git-checkout-branch](./git-checkout-branch.png)

To stage all files use:

```shell
git add .
git status
```

![git-stage-files](./git-stage-files.png)

Now status tells me I have one file staged.

To commit all staged files use:

`git commit -m '{your-commit-message}'`

(ex: `git commit -m 'add better description to README.md file'`)
Commit messages MUST be meaningful short and descriptive, and without tenses (added > add)

`git status`

![git-commit](./git-commit.png)

To push branch changes to remote repository use:

`git push`

![git-push](./git-push.png)

Message notifies we don’t have branch named development on remote repository (GitHub) so we must use to create it:

```shell
git push --set-upstream origin development
```

### **Creating Pull Request**

Once you are satisfied with code on your development branch, you can create pull request on the main branch. 

Pull requests will merge changes to the main branch to sync their code.

On GitHub navigate to page Pull request in your repository.

![github-pull-request-page](github-pull-request-page.png)

And create new pull request by pressing new pull request.

![github-create-pull-request](./github-create-pull-request.png)

![github-pull-request-changes](./github-pull-request-changes.png)

Before you finish creating pull requests, add **ipazanin** as reviewer. (**NOT nknezovic** as in picture below)

![github-pull-request-reviewer](./github-pull-request-reviewer.png)

**AFTER ipazanin** has approved your pull request, you can merge it using button.

![github-pull-request-approve](./github-pull-request-approve.png)

Merge pull request.

To fetch changes on main branch locally, checkout to main branch in your terminal and:

```shell
git checkout main
git pull
git status
```

![git-pull-changes](./git-pull-changes.png)

And you will see changes done on development branch now on main branch.

**Notes***

When you get a comment on your pull request, you should correct your code accordingly and push a new commit to the remote branch using the same commands as described before.








