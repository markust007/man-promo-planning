# Manhattan Associates: Inventory Operations - Promotion Planning
----

## Purpose
This repo is a template to be used in making Manhattan flash conversion modules more quickly and easily. It includes all the base code necessary to begin replicating a module without having to spend a significant amount of time reworking your underlying code structure. It also already includes the vue-mq package and the necessary breakpoints for both the portrait modal and app mobile design.

## Cloning this template to create a new module
All of the steps below should be followed to ensure a successful and enjoyable cloning experience.

### Creating New Repo In Bitbucket
1. Open [Bitbucket](https://bitbucket.org/account/user/Allen_Interactions/projects/SBCP) and sign in using @alleni credentials.
2. Click on the '+' icon in the left-hand-side vertical blue bar. Select 'Create a new Repository'.
3. Before filling any fields, click the 'Import repository' link in upper-left-hand corner. 
4. Copy the url of this template repo (https://bexcell@bitbucket.org/Allen_Interactions/manhattan-module-template.git) and insert it in the 'URL' field. 
5. Click the 'Requires authorization' checkbox and enter your @alleni credentials.
6. Keep the owner of the repo as Allen_Interactions and choose 'Studio B client projects' as the project. 
7. Name your new repo. Note that this is the name of the repo that will be shown in the url, so something like roles-in-supply-chain or supply-chain-roles is better than Manhattan Supply Chain Roles. 
8. Click 'Import repository'.
9. When import is complete, edit: (1) the repo name (naming convention is as follows: "Manhattan: *SC - Roles in the Supply Chain*", and (2) README.md to reflect the new repo name and details.

### Cloning to local machine
1. Copy the new repo url (it will have your username in it) from your new repo. 
2. $ *cd your-desired/repo-location/path*
3. $ *git clone "your-new-repo-url"*
4. Change the local directory name of your repository if desired/for ease in future navigation.
5. __IMPORTANT__ Check that your remote pointer is correct ($ *git remote -v*). If the repo is pointing to your new repo url, you're good to go. If it is still pointing to the module template repo, reset your remote head ($ *git remote set-url origin "your-new-repo-url"*).  Run $ *git remote -v* again to ensure your local repo is pointing to the right bitbucket repo.

### Getting started
1. $ *cd your-new/repo-path*
2. $ *npm install*
3. $ *npm run dev* (for development)
4. $ *npm run build* (for production)