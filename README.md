SIT323/737 - Practical 5.1P: Containerisation of a Simple Web Application

This repository contains a simple "Hello World! It's Manya!!" A Node.js web application that I containerised using Docker and Docker Compose.

First, I installed:
- Docker 
- Docker Compose
- Git

Then, I cloned the repository, created a Docker file, and built a Docker image. I then made a Docker-Compose file, started the environment, and tested and pushed the app to GitHub.

I used the following commands in the terminal to create the files and push the code into the repository:
npm init -y
npm install express
docker-compose up --build
git init
git add .
git commit -m "Initial commit - Hello World app with Docker setup"
git remote add origin https://github.com/s223054534/sit323-2025-prac5p.git
git push -u origin master

