/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = 'Git is a version control process/set of commands. Git is commonly used by developers to monitor/control change, and maintain offsite storage.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = 'GitHub.com is a website with a robust git-based api. It allows users to configure their local git to push into cloud-based (offsite) storage.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = {
    description: 'the git command "init" will create the initial directories and files necessary to use git within that working directory',
    code: 'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = {
    description: 'the git command "clone" can be used to copy a folder, and the contents, onto your computer, in the indicated directory',
    code: 'git clone "https://theURLOfMyGitRepository.com"'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = {
    description: 'the git command status will show the files in the working directory and sub-directories that do not match the current .git version. It will show what stage they are in (if any) in the git process',
    code: 'git status'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = {
    description: 'the git command add will add items to a git commit. This is used when a file is altered, or new files are created/added. Git add can be used with multple options/switches. The most common is "git add myNewFile.txt" to add a single file. You can use git add . to add everything in the current directory, or git add -a to add everything in the current directory and sub-directories.',
    code: 'git add myNewFile.txt'
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = {
    description: 'the git command "commit" will save a version of the selected files in the local git configuration. Although this does fully setup a snapshot of these files, and their current state, it does not push them to an offsite git repository such as gitHub.com. The git commit command expects a comment, which is the working label for that version of the files.',
    code: 'git commit -m "My Comment Here"'
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

//CODE HERE
let addRemote = {
    description: 'git remote add will setup a remote repository (such as .gitHub.com) where you can push your git versions.',
    code: 'git remote add origin https://myURLForRemoteGitStorage.com'
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {
    description: 'The git command "push" is used to take the git information from my local repository, and push it into my remote repository. It can allow you to specify the remote repository, and the branch that you will be pushing to',
    code: 'git push'
}
