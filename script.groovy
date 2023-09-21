#!/usr/bin/env groovy

def deployImg(){

          withCredentials([
            usernamePassword(credentialsId: 'bitbucket_dev-team-workspace', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')
          ]) {
            sshagent(['235250937587-SaleSites']) {
              sh """
                ssh -o StrictHostKeyChecking=no -tt ubuntu@13.40.65.211 '
                  git config --global credential.helper "store --file=/home/ubuntu/.git-credentials"
                  echo -e "https://$USERNAME:$PASSWORD@bitbucket.org/dev-team-workspace/membershipwallet_salesite.git" > /home/ubuntu/.git-credentials
                  cd membershipwallet_salesite
                  git pull origin master
                  if docker compose build; then
                        docker compose down
                        docker compose up -d
                        docker system prune -a -f
                  else
                        echo "Build failed. The old container is still running."
                  fi
                '
              """
            }
          }

}
return this
