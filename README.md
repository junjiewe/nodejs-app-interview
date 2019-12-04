# nodejs-app-interview

ISSUE: (first time automating and writing NodeJS applications so Had a little trouble and took me quite some time)
#had a bit trouble using the ssh plugin in jenkins to execute the shell command in the docker server. For some reason jenkins does not accept my docker ec2's username and private key.
  - if the plugin works, then I will let the docker pull the update image from docker hub and run it, so it will be fully automated
 
 Steps of provisioning:
 1. wrote an simple NodeJS web app
 2. Wrote a simple docker file to get the NodeJs Server
 3. launched an Jenkins EC2 with all the necessary dependencies
 4. launched an Docker container for deployment, (was trying to pulling the docker image from docker hub, but ssh plugin did not work for me, can't find out the reason)
 5. install plugins such as GitHub, Docker build and publish, SSH etc.
 6. Set up cronjob to poll from github every minute.
 7. In the build steps added the docker hub repository name and and credential for pushing the image to docker-hub
 8. implement the jenkins procedure in a jenkinsfile
 
 

