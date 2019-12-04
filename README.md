# nodejs-app-interview

ISSUE: (first time automating and writing NodeJS applications so Had a little trouble and took me quite some time)
#Did not find a way out of executing the nodejs image in the docker container. I used Execute command over SSH, so the docker run command is running in the Jenkins server which the Jenkins will keep running until the time is up. 
 
 Steps of provisioning:
 1. wrote an simple NodeJS web app
 2. Wrote a simple docker file to get the NodeJs Server
 3. launched an Jenkins EC2 with all the necessary dependencies
 4. launched an Docker container for deployment, (did not find a solution of executing docker run command in the docker server )
 5. install plugins such as GitHub, Docker build and publish, SSH etc.
 6. Set up cronjob to poll from github every minute.
 7. In the build steps added the docker hub repository name and and credential for pushing the image to docker-hub
 8. implement the jenkins procedure in a jenkinsfile
 
 

