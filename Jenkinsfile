pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh 'echo "$DOCKER_ID"'
      }
    }
    stage('Build') {
      steps {
        echo 'Build...'
      }
    }

    stage('Test') {
      agent {
        dockerfile {
          filename 'Dockerfile.dev'
          dir './client'
          additionalBuildArgs '-t levond/react-test'
        }
      }
      steps {
        echo 'Test...'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy...'
      }
    }

  }
}