#!/bin/bash

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce docker-compose

sudo groupadd docker
sudo usermod -aG docker $USER

sudo cp docker-compose-app.service /etc/systemd/system/docker-compose-app.service
systemctl enable docker-compose-app

sudo reboot