"use strict";(self.webpackChunkdistributed_systems=self.webpackChunkdistributed_systems||[]).push([[303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(m,s(s({ref:t},g),{},{components:n})):a.createElement(m,s({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},s="Lab 0: Git",o={unversionedId:"labs/git/git",id:"labs/git/git",title:"Lab 0: Git",description:"Table Of Contents",source:"@site/docs/labs/00.git/git.md",sourceDirName:"labs/00.git",slug:"/labs/git/git",permalink:"/docs/labs/git/git",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Distributed Systems",permalink:"/docs/labs/"},next:{title:"Lab 1: Threads",permalink:"/docs/labs/threads/threads"}},l={},p=[{value:"Table Of Contents",id:"table-of-contents",level:2},{value:"<strong>Exercise 1: Installing and configuring git</strong>",id:"exercise-1-installing-and-configuring-git",level:2},{value:"<strong>Download and setup git</strong>",id:"download-and-setup-git",level:3},{value:"<strong>Generate SSH keys</strong>",id:"generate-ssh-keys",level:3},{value:"<strong>Exercise 2: Configuring GitHub</strong>",id:"exercise-2-configuring-github",level:2},{value:"<strong>Adding private SSH key to GitHub</strong>",id:"adding-private-ssh-key-to-github",level:3},{value:"<strong>Exercise 3: Creating GitHub Repository</strong>",id:"exercise-3-creating-github-repository",level:2},{value:"<strong>Create remote repository</strong>",id:"create-remote-repository",level:3},{value:"<strong>Exercise 4: Cloning remote git repository and creating pull request</strong>",id:"exercise-4-cloning-remote-git-repository-and-creating-pull-request",level:2},{value:"<strong>Cloning repository</strong>",id:"cloning-repository",level:3},{value:"<strong>Adding and committing code to repository</strong>",id:"adding-and-committing-code-to-repository",level:3},{value:"<strong>Creating Pull Request</strong>",id:"creating-pull-request",level:3}],g={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-0-git"},"Lab 0: Git"),(0,i.kt)("h2",{id:"table-of-contents"},"Table Of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#lab-0-git"},"Lab 0: Git"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table Of Contents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exercise-1-installing-and-configuring-git"},(0,i.kt)("strong",{parentName:"a"},"Exercise 1: Installing and configuring git")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#download-and-setup-git"},(0,i.kt)("strong",{parentName:"a"},"Download and setup git"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#generate-ssh-keys"},(0,i.kt)("strong",{parentName:"a"},"Generate SSH keys"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exercise-2-configuring-github"},(0,i.kt)("strong",{parentName:"a"},"Exercise 2: Configuring GitHub")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adding-private-ssh-key-to-github"},(0,i.kt)("strong",{parentName:"a"},"Adding private SSH key to GitHub"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exercise-3-creating-github-repository"},(0,i.kt)("strong",{parentName:"a"},"Exercise 3: Creating GitHub Repository")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#create-remote-repository"},(0,i.kt)("strong",{parentName:"a"},"Create remote repository"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#exercise-4-cloning-remote-git-repository-and-creating-pull-request"},(0,i.kt)("strong",{parentName:"a"},"Exercise 4: Cloning remote git repository and creating pull request")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cloning-repository"},(0,i.kt)("strong",{parentName:"a"},"Cloning repository"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#adding-and-committing-code-to-repository"},(0,i.kt)("strong",{parentName:"a"},"Adding and committing code to repository"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-pull-request"},(0,i.kt)("strong",{parentName:"a"},"Creating Pull Request")))))))),(0,i.kt)("h2",{id:"exercise-1-installing-and-configuring-git"},(0,i.kt)("strong",{parentName:"h2"},"Exercise 1: Installing and configuring git")),(0,i.kt)("p",null,"Git is the most used distributed version control system."),(0,i.kt)("h3",{id:"download-and-setup-git"},(0,i.kt)("strong",{parentName:"h3"},"Download and setup git")),(0,i.kt)("p",null,"Download git from ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads")," link and choose to download for your operating system."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"select-git-components",src:n(8854).Z,width:"400",height:"305"})),(0,i.kt)("p",null,"If you know what you are doing, you can choose Vim as git\u2019s default text editor, otherwise, I recommend using Visual Studio Code."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-code-editor",src:n(3306).Z,width:"392",height:"301"})),(0,i.kt)("p",null,"Default branch name doesn\u2019t matter much but it is still best to follow common practices which means naming it main branch."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-default-branch",src:n(743).Z,width:"366",height:"277"})),(0,i.kt)("p",null,"This step enables us to use git from other tools, for example powershell."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-powershell",src:n(6819).Z,width:"448",height:"342"})),(0,i.kt)("p",null,"Configure SSH for git as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-ssh",src:n(9803).Z,width:"405",height:"311"}),"\n",(0,i.kt)("img",{alt:"git-ssh2",src:n(9865).Z,width:"421",height:"322"})),(0,i.kt)("p",null,"Follow the rest of installation steps and choose default options until git is installed. "),(0,i.kt)("h3",{id:"generate-ssh-keys"},(0,i.kt)("strong",{parentName:"h3"},"Generate SSH keys")),(0,i.kt)("p",null,"Git communicates with remote repositories using ",(0,i.kt)("strong",{parentName:"p"},"SSH")," protocol which is secured by private and public keys encryption."),(0,i.kt)("p",null,"In order for repositories to have access to remote repositories, private SSH keys which are generated locally must be added on remote repository vendors, for example GitHub, bitbucket\u2026"),(0,i.kt)("p",null,"To generate ssh keys, use command in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen\n")),(0,i.kt)("p",null,"and press enter for all options"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"shh-keygen",src:n(7425).Z,width:"477",height:"255"})),(0,i.kt)("p",null,"SSH keypair is generated default location as stated\n",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\ivan.pazanin\\.ssh\\id_rsa")," or more generally ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users\\{your-username}\\.ssh\\id_rsa"),"."),(0,i.kt)("h2",{id:"exercise-2-configuring-github"},(0,i.kt)("strong",{parentName:"h2"},"Exercise 2: Configuring GitHub")),(0,i.kt)("p",null,"GitHub is a provider of internet hosting for software development and version control using git."),(0,i.kt)("h3",{id:"adding-private-ssh-key-to-github"},(0,i.kt)("strong",{parentName:"h3"},"Adding private SSH key to GitHub")),(0,i.kt)("p",null,"Open generated public ssh key (id_rsa.pub file) in text editor and copy all contents (CTRL+a, CTRL+c). "),(0,i.kt)("p",null,"In github go to: profile icon > Settings > SSH and GPG keys > New SSH key\nOr ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/keys"},"https://github.com/settings/keys"),"\nIn Title input give name for your SSH key (ex: my-personal-laptop)\nIn Key input paste copied public SSH key"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ssh-key-github",src:n(4059).Z,width:"554",height:"277"})),(0,i.kt)("p",null,"To add keypress, Add SSH key, no error message should be present if everything is done correctly."),(0,i.kt)("h2",{id:"exercise-3-creating-github-repository"},(0,i.kt)("strong",{parentName:"h2"},"Exercise 3: Creating GitHub Repository")),(0,i.kt)("h3",{id:"create-remote-repository"},(0,i.kt)("strong",{parentName:"h3"},"Create remote repository")),(0,i.kt)("p",null,"To create remote repository on github first go to your account or organization (ex: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fesb-distributed-systems-2022"},"https://github.com/fesb-distributed-systems-2022")," )\nand press Create a new repository button (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/organizations/fesb-distributed-systems-2022/repositories/new"},"https://github.com/organizations/fesb-distributed-systems-2022/repositories/new")," )"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-organization",src:n(3976).Z,width:"472",height:"314"})),(0,i.kt)("p",null,"Repository name should follow pattern: ",(0,i.kt)("inlineCode",{parentName:"p"},"{your-username}-lab-{lab-number}")," (ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"ipazanin-lab-01"),")"),(0,i.kt)("p",null,"Or if repository is not part of lab practice: ",(0,i.kt)("inlineCode",{parentName:"p"},"{your-username}-{project-name}")," (ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"nknezovic-mothers-project"),")"),(0,i.kt)("p",null,"Description is optional, repository must be private, and finally initialize repository by adding README file, adding .gitignore (VisualStudio)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-create-new-repository",src:n(2742).Z,width:"301",height:"289"})),(0,i.kt)("h2",{id:"exercise-4-cloning-remote-git-repository-and-creating-pull-request"},(0,i.kt)("strong",{parentName:"h2"},"Exercise 4: Cloning remote git repository and creating pull request")),(0,i.kt)("h3",{id:"cloning-repository"},(0,i.kt)("strong",{parentName:"h3"},"Cloning repository")),(0,i.kt)("p",null,"To clone remote repository go to created repository on github and press Code > SSH and copy contents."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-clone-ssh",src:n(155).Z,width:"475",height:"247"})),(0,i.kt)("p",null,"Open terminal on desired file system location and use command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git-clone {your-repository}")," (ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"git-clone git@github.com:fesb-distributed-systems-2021/ipazanin-lab-01.git"),")"),(0,i.kt)("p",null,"and now you can open cloned repository with Visual Studio Code using:\n",(0,i.kt)("inlineCode",{parentName:"p"},"code {your-repository-name}")," (ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"code ipazanin-lab-01"),")"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"vscode-project",src:n(3388).Z,width:"472",height:"239"})),(0,i.kt)("p",null,"You can learn more about .gitignore file on link ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},"https://git-scm.com/docs/gitignore")),(0,i.kt)("h3",{id:"adding-and-committing-code-to-repository"},(0,i.kt)("strong",{parentName:"h3"},"Adding and committing code to repository")),(0,i.kt)("p",null,"If you have previously created a project, you can copy and paste it to the repository folder or you can start creating a new project in the git folder."),(0,i.kt)("p",null,"Once you are satisfied with your code changes, you must commit them.\nBut first checkout to the new branch, code development is never done on the main branch (you can checkout to the new branch while having changes)."),(0,i.kt)("p",null,"Open terminal in repository folder and use commands:"),(0,i.kt)("p",null,"To check status of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git status\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-status",src:n(8893).Z,width:"554",height:"176"})),(0,i.kt)("p",null,"Tells me I have one un-staged file changed (README.md)"),(0,i.kt)("p",null,"To create new branch and change git to that branch use:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git checkout -b {your-branch-name}"),"\n(ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout -b development"),")"),(0,i.kt)("p",null,"Until you know what you are doing, I recommend doing development on branch development."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git status\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-checkout-branch",src:n(5619).Z,width:"554",height:"170"})),(0,i.kt)("p",null,"To stage all files use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\ngit status\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-stage-files",src:n(6781).Z,width:"554",height:"124"})),(0,i.kt)("p",null,"Now status tells me I have one file staged."),(0,i.kt)("p",null,"To commit all staged files use:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git commit -m '{your-commit-message}'")),(0,i.kt)("p",null,"(ex: ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit -m 'add better description to README.md file'"),")\nCommit messages MUST be meaningful short and descriptive, and without tenses (added > add)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git status")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-commit",src:n(8019).Z,width:"554",height:"81"})),(0,i.kt)("p",null,"To push branch changes to remote repository use:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git push")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-push",src:n(9846).Z,width:"554",height:"97"})),(0,i.kt)("p",null,"Message notifies we don\u2019t have branch named development on remote repository (GitHub) so we must use to create it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git push --set-upstream origin development\n")),(0,i.kt)("h3",{id:"creating-pull-request"},(0,i.kt)("strong",{parentName:"h3"},"Creating Pull Request")),(0,i.kt)("p",null,"Once you are satisfied with code on your development branch, you can create pull request on the main branch. "),(0,i.kt)("p",null,"Pull requests will merge changes to the main branch to sync their code."),(0,i.kt)("p",null,"On GitHub navigate to page Pull request in your repository."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-pull-request-page",src:n(2578).Z,width:"554",height:"170"})),(0,i.kt)("p",null,"And create new pull request by pressing new pull request."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-create-pull-request",src:n(1251).Z,width:"554",height:"203"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-pull-request-changes",src:n(8486).Z,width:"554",height:"228"})),(0,i.kt)("p",null,"Before you finish creating pull requests, add ",(0,i.kt)("strong",{parentName:"p"},"ipazanin")," as reviewer. (",(0,i.kt)("strong",{parentName:"p"},"NOT nknezovic")," as in picture below)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-pull-request-reviewer",src:n(712).Z,width:"554",height:"244"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AFTER ipazanin")," has approved your pull request, you can merge it using button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"github-pull-request-approve",src:n(2934).Z,width:"554",height:"268"})),(0,i.kt)("p",null,"Merge pull request."),(0,i.kt)("p",null,"To fetch changes on main branch locally, checkout to main branch in your terminal and:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout main\ngit pull\ngit status\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"git-pull-changes",src:n(4787).Z,width:"554",height:"318"})),(0,i.kt)("p",null,"And you will see changes done on development branch now on main branch."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes*")),(0,i.kt)("p",null,"When you get a comment on your pull request, you should correct your code accordingly and push a new commit to the remote branch using the same commands as described before."))}c.isMDXComponent=!0},5619:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-checkout-branch-cac8afddf4a162941f4eed230a756cac.png"},3306:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-code-editor-4267ec8d5162ff5ad025d7e977d5a522.png"},8019:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-commit-4543a37b226a96aca708c1a647d5d73a.png"},743:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-default-branch-name-d9646bba1af9de3220bff61f8288ed14.png"},6819:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-powershell-a00ca3cb9a05a28ef6798721ddc1d60f.png"},4787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-pull-changes-8afb02780853cedcaef540458c082325.png"},9846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-push-f0cd7f91ebcaa3cd5c4b96f4c1ecff48.png"},8854:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-select-components-9b1a5c5b5fbe4a0741086b4fe47aec5b.png"},9803:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-ssh-079c6ac897c77daac8ca8bfccaaf6055.png"},9865:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-ssh2-491de567cf9e9dc71d2ad925aa563dec.png"},6781:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-stage-files-ad2d2cdc2d69ad7f3f38f79bf9adbd47.png"},8893:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-status-c63c219c156b8b486eaa1f51e17c1fb0.png"},155:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-clone-ssh-f6429e36761c9ccf0120454df72b20f6.png"},2742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-create-new-repository-27eb92dd7c4d5077addb90ba97569fad.png"},1251:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-create-pull-request-1b9c2fdcf2c697634378fd89bda083ee.png"},3976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-organization-742d5b44feaa7fb3b0335523552b1eae.png"},2934:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-pull-request-approve-9b658eb2af2f10fbac83512dccaa415d.png"},8486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-pull-request-changes-50995018a84bfab658c47365866e3f1a.png"},2578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-pull-request-page-ffb57308dde96eb23a0d33d5c643daed.png"},712:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-pull-request-reviewer-5200e0a829f8fa7d20fb6da9bc3df96f.png"},4059:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ssh-key-github-c6c4a2476c1a429ebe8e05abd186c860.png"},7425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ssh-keygen-42873f8e17783eb5371f74934802e1fe.png"},3388:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vscode-project-4fd169385aa2e0a57949b1e7645357c9.png"}}]);