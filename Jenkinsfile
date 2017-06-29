#!/usr/bin/env groovy

pipeline {
    agent {
        label 'CentOS'
    }

	tools {
		jdk 'JDK8'
	}

    stages {
        stage('Initialize') {
            steps {
                echo "PATH = ${PATH}"
                echo "JAVA_HOME = ${JAVA_HOME}"
                sh "java -version"
            }
        }

        stage('Build') {
            steps {
                sh './gradlew build --parallel'
            }
        }
    }
}






