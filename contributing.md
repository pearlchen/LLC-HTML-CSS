# Editing and Contributing to LLC-HTML-CSS

**Note: this is now the canonical upstream repo for Ladies Learning Code Intro to HTML & CSS**

## If you are an instructor and want to make workshop-specific changes before your event

If you are a workshop instructor and would like to make specific modifications for *your* workshop (ex. adding housekeeping info, instructor bios, notices):

1. Fork `https://github.com/ladieslearningcode/LLC-HTML-CSS.git` to your own Github account
2. Make your changes and commit them to your fork
3. In the future, if you would like to keep your fork up to date with master, add this repository as the upstream origin:

        git remote add upstream https://github.com/ladieslearningcode/LLC-HTML-CSS.git

4. Fetch changes from upstream:

        git fetch upstream

5. Merge upstream changes with master:

        git checkout master && git merge upstream/master

## If you would like to contribute to LLC-HTML-CSS

To make changes to the slide deck that you want integrated back into the canonical repo:

1. Fork `https://github.com/ladieslearningcode/LLC-HTML-CSS.git` to your own Github account
2. Make your changes and commit them to your fork
3. Push to your fork on Github
4. File a pull request against /ladieslearningcode/LLC-HTML-CSS
    - from your fork on Github, go to **Pull Requests**
    - click 'New Pull Request'
    - by default, it will want to file the pull request against Pearl's repo. Click the 'edit' button at the top of the page and select **ladieslearningcode/LLC-HTML-CSS** from the base fork dropdown
    - click 'Create Pull Request'
    - add a descriptive message
    - click 'Make Pull Request'
5. One of the project maintainers will review and merge your changes. Bug one of us on twitter if you don't hear back soon!
6. In the future, if you would like to keep your fork up to date with master, add this repository as the upstream origin:

        git remote add upstream https://github.com/ladieslearningcode/LLC-HTML-CSS.git

  then pull and merge upstream into your master.
