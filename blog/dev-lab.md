---
title: "Dev Lab"
date: "2020-07-27"
description: "I used Virtual Box and POP OS to build a lab for web development."
postimg: "../../assets/img/post-images/2020-08-19_dev-lab.jpg"
---
![img](../../assets/img/post-images/2020-08-19_dev-lab.jpg)

Recently I used Virtual Box and POP OS to build a lab for web and software development. 

Using Virtual Box makes the lab more resilient against issues.
This setup allows me to take snapshots of the installation and revert back to previous versions if anything goes wrong.
It also allows me to stop the running POP OS and save its current state like saving a video game.

This means I can leave my files and editor open, and development server running.
When I restore the paused VM from a saved state it will return just as I left it. 

I made a YouTube video showing the installation process: [Dev Lab](https://www.youtube.com/watch?v=dn81e9OwEgM&t)

Here's the list I followed while setting up my lab.
- [VirtualBox](https://www.virtualbox.org/)
- [POP OS](https://pop.system76.com/)
- VirtualBox Guest Additions
- Set Wallpaper
- Update & Upgrade
- Gnome Tweak
- [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
- Chromium
- [Install Git](https://git-scm.com/download/linux)
- [Node.js via NVM](https://tecadmin.net/install-nodejs-with-nvm/)
- [Oracle Java JDK](https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/how-to-install-oracle-java-jdk-10-8-on-ubuntu-18-04-ubuntu-17-10.html)
- IntelliJ IDEA
- [Install and Config Samba](https://www.linuxhelp.com/how-to-install-and-configure-samba-setup-in-linux-mint-18-3)
- [VSCodium](https://vscodium.com/)
- Take Snap Shot

If you're a web or software developer. I recommend taking the time to setup your own dev lab.
The process will take about an hour, depending on your hardware and the OS you use. 
You can use whatever operating system you prefer.

Once you have your lab setup. Save and shutdown the Virtual Machine. 
Then backup the files to an external drive or local NAS. 

In the event you have to reinstall your main operating system you'll be able to quickly get your dev lab up and running.
Simply by reinstalling VirtualBox and grabbing the most recent backup of your Virtual Machine. 
Just remember to backup the VM on a regular basis. 

I hope you found this helpful.
Have a great day!

