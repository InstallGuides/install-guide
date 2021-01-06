How to install Ruby on a Mac. Installing Ruby 3.0 on macOS Big Sur or Catalina. Up-to-date and kitchen-tested instructions, with troubleshooting tips, from the author of the book, _[Learn Ruby on Rails](https://learn-rails.com/)_.

This article will help you set up a development environment using Ruby on a Mac, whether you are an experienced developer setting up a new computer or only a beginner.

If you intend to develop web applications with Rails, switch to the guide [Install Ruby on Rails on macOS](https://learn-rails.com/install-rails-mac/index.html). It covers installation of Ruby, Node, Yarn, and Rails.

> This is the most complete guide to installing Ruby on a Mac.

This guide provides full details, how to:
- update to macOS
- install Xcode Command Line Tools
- install Homebrew
- configure Git

> I'll recommend choices and explain why

- install a software version manager
- install Ruby 3.0
- update gems
- tips and troubleshooting

If you've haven't been coding before, see the section, [Finding and Using the Terminal](/ruby/13.html), to learn about basic tools you'll need (the Terminal application and text editor).

## Installation choices

You have several choices for installing and running Ruby on macOS:

- [asdf](https://asdf-vm.com/) (recommended)
- [chruby](https://github.com/postmodern/chruby) (recommended)
- [rbenv](https://github.com/sstephenson/rbenv)
- [rvm](https://rvm.io/)
- [Docker](https://www.docker.com/)
- [Homebrew](https://brew.sh/) (recommended)
- system Ruby

I'll explain which choice is best.

> asdf is a universal version manager

[Asdf](https://asdf-vm.com/) and [chruby](https://github.com/postmodern/chruby) are software version managers. If you need to switch between versions of Ruby, use asdf or chruby. **Asdf** is your best choice because it is a universal version manager that installs and manages Ruby, JavaScript, Python, Elixir, and several other languages. **Chruby** is efficient and simple but it works only with Ruby.

In the past, [rbenv](https://github.com/sstephenson/rbenv) and [rvm](https://rvm.io/) were popular as Ruby version managers. Sam Stephenson's **rbenv** requires extra steps as you work (the rehash command), extra files (“shims”), and modifies gems when you install them (chruby is simpler). **RVM** was once the most popular of Ruby version managers but its additional features (its gemsets) are no longer needed and it adds unnecessary complexity.

[Docker](https://www.docker.com/) is a containerization tool that some developers use for version management. The primary use case for Docker is to create a reproducible virtual server that contains a configured version of any software dependency needed to run an application (language, databases, message queues). As such, it is ideal for creating a "frozen" version of a development environment for deployment to a server. You can also develop locally within a container but it will run slower, require more memory, and adds configuration complexity compared to a simple version manager. To keep things simple, don't use Docker for local development unless your application is disturbingly complex.

If you don't need a version manager, install Ruby using the [Homebrew](https://brew.sh/) package manager. Use this approach if you are only building a casual project that you will not maintain, or if you are playing with Ruby to learn the language. You can easily remove Ruby after installing it with Homebrew (and re-install a newer version when you need it). But don't install Ruby with Homebrew if you need to switch among Ruby versions for different applications (use asdf or chruby in this case).

Finally, you should know that macOS comes with a **system Ruby** pre-installed. MacOS Big Sur or Catalina includes Ruby 2.6.3 which is not the newest version. If you use the system Ruby you'll need root access (sudo) to install gems (introducing a security risk). And you'll end up with a cluster of (sometimes incompatible) gems that can't be easily removed to restore your system to a clean state. Please use either asdf, chruby, or Homebrew.

You'll find instructions here for installation using asdf, chruby, or Homebrew.

Continue to the next section to check your computer before installing Ruby.

## Update macOS

It's best to use the newest macOS version. The latest release is macOS Big Sur 11.0 (Big Sur was released on November 12, 2020). If you have an older Mac, Big Sur will run slowly, so you might want to use macOS Catalina.

### Upgrade macOS

Check your macOS version. Under the Apple menu, check "About This Mac." It should show "Version 10.15.7” (for Catalina) or "Version 11.0.1” (for Big Sur) or newer.

![](/assets/images/ruby/macos-big-sur.png)

If you need to upgrade, see Apple's instructions [Upgrade to macOS Big Sur](https://www.apple.com/macos/how-to-upgrade/). From macOS Catalina 10.15 or Mojave 10.14, you can upgrade using Software Update in System Preferences. For earlier versions, you can upgrade to macOS Big Sur from the App Store. Allow plenty of time for the download and installation (it may take several hours, especially if you've owned your Mac for several years and haven't updated macOS).

After you’ve upgraded, you’ll use the macOS Terminal application to continue with this guide. See the section, [Finding and Using the Terminal](/ruby/13.html), if you need help finding the Terminal.

Next, let's check if your Terminal application is set up properly.

### Z shell

By default, [Zsh](https://en.wikipedia.org/wiki/Z_shell) (the Z shell) is the program that runs in the Terminal that interprets Unix commands. Before macOS 10.15 Catalina, the Terminal used the Bash shell as its default. Open the Terminal application and check which shell program is running in your terminal:

```bash
$ echo $SHELL
/bin/zsh
```

Don't type the `$` (that's just a prompt to let you know you are in the console).

If you see `/bin/bash` you can update the default to Zsh by running `chsh -s /bin/zsh`.

### Configuring the shell

You can configure the Zsh system environment by creating a file in your user home folder that the Z shell will read when the Terminal application is launched. The configuration file is named `.zshrc`. By the way, if you’re curious, the `rc` in the file name stands for “run commands.”

The `.zshrc` file doesn't exist by default in macOS so you need to create it. First, in the Terminal, make sure you are in your home folder:

```bash
$ pwd
/Users/daniel
```

Check if the file exists already:

```bash
$ ls .zshrc
ls: .zshrc: No such file or directory
```

If the file already exists, you can edit it. Otherwise, create an empty  `.zshrc` file and check that it exists:

```bash
$ touch .zshrc
$ ls .zshrc
.zshrc
```

Now, when needed, you can edit the file. You'll need to edit the `.zshrc` file when you set up the software version manager, so it's good to have it ready.

![](/assets/images/ruby/macos-zsh.png)

### Tip: macOS hidden files

The `.zshrc` file is hidden so you won’t see it in the macOS file browser when you want to edit it.

Configuration files are often hidden in macOS. It’s easy to hide a file; just use a dot as the first character in the file name.

You can list all files, including hidden files, with the `ls -lag` command in the Terminal.

In the macOS Finder (the file browser), you can enter Command + Shift + . to show hidden files. If you want to hide those files again, you can enter the same keystrokes.

You can force the Mac to always display hidden files by entering the following command in the Terminal application:

```bash
$ defaults write com.apple.finder AppleShowAllFiles TRUE; killall Finder
```

Hidden files will appear in gray in the Finder window.

Your macOS and Terminal application are set up. Next we'll check if Apple's Xcode Command Line Tools are installed.

