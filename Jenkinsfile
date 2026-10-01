pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ibrahim180101/Motor-Garage.git'
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build \
                    -t motor-garage:${BUILD_NUMBER} .
                '''
            }
        }

        stage('Trivy Scan') {
            steps {
                sh '''
                    trivy image \
                    motor-garage:${BUILD_NUMBER} \
                    | tee trivy-report.txt
                '''

                archiveArtifacts artifacts: 'trivy-report.txt',
                                 fingerprint: true
            }
        }

        stage('Save Docker Image') {
            steps {
                sh '''
                    docker save \
                    motor-garage:${BUILD_NUMBER} \
                    -o motor-garage-${BUILD_NUMBER}.tar
                '''
            }
        }

        stage('Transfer Docker Image') {
            steps {
                sshagent(['app-ec2-ssh']) {
                    sh '''
                        scp -o StrictHostKeyChecking=no \
                        motor-garage-${BUILD_NUMBER}.tar \
                        ubuntu@10.50.2.146:/home/ubuntu/
                    '''
                }
            }
        }

        stage('Load Docker Image') {
            steps {
                sshagent(['app-ec2-ssh']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no \
                        ubuntu@10.50.2.146 \
                        "docker load -i \
                        /home/ubuntu/motor-garage-${BUILD_NUMBER}.tar"
                    '''
                }
            }
        }

        stage('Prepare Rollback') {
            steps {
                sshagent(['app-ec2-ssh']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no \
                        ubuntu@10.50.2.146 '
                        
                        if [ -f /home/ubuntu/motor-garage/current_build ]; then

                            cp \
                            /home/ubuntu/motor-garage/current_build \
                            /home/ubuntu/motor-garage/previous_build

                            echo "Previous build:"
                            cat /home/ubuntu/motor-garage/previous_build

                        else

                            echo "none" \
                            > /home/ubuntu/motor-garage/previous_build

                            echo "No previous build found"

                        fi
                        '
                    '''
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sshagent(['app-ec2-ssh']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no \
                        ubuntu@10.50.2.146 \
                        "cd /home/ubuntu/motor-garage && \
                        IMAGE_TAG=${BUILD_NUMBER} \
                        docker compose up -d"
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                sshagent(['app-ec2-ssh']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no \
                        ubuntu@10.50.2.146 \
                        "curl -f http://localhost/"
                    '''
                }
            }
        }

        stage('Record Successful Deployment') {
            steps {
                sshagent(['app-ec2-ssh']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no \
                        ubuntu@10.50.2.146 \
                        "echo ${BUILD_NUMBER} \
                        > /home/ubuntu/motor-garage/current_build"
                    '''
                }
            }
        }

        stage('Cleanup') {
            steps {
                sshagent(['app-ec2-ssh']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no \
                        ubuntu@10.50.2.146 \
                        "rm -f \
                        /home/ubuntu/motor-garage-${BUILD_NUMBER}.tar"
                    '''
                }
            }
        }
    }

    post {

        failure {

            echo 'Deployment failed. Starting rollback process...'

            sshagent(['app-ec2-ssh']) {

                sh '''
                    ssh -o StrictHostKeyChecking=no \
                    ubuntu@10.50.2.146 '
                    
                    if [ -f /home/ubuntu/motor-garage/previous_build ]; then

                        PREVIOUS_BUILD=$(cat \
                        /home/ubuntu/motor-garage/previous_build)

                        if [ "$PREVIOUS_BUILD" != "none" ]; then

                            echo "Rolling back to build: $PREVIOUS_BUILD"

                            cd /home/ubuntu/motor-garage

                            if docker image inspect \
                            motor-garage:$PREVIOUS_BUILD \
                            >/dev/null 2>&1; then

                                IMAGE_TAG=$PREVIOUS_BUILD \
                                docker compose up -d

                                echo "Rollback completed successfully"

                            else

                                echo "Previous Docker image not found:"
                                echo "motor-garage:$PREVIOUS_BUILD"

                            fi

                        else

                            echo "No previous build available for rollback"

                        fi

                    else

                        echo "previous_build file not found"

                    fi
                    '
                '''
            }
        }

        success {

            echo '''
            ============================================
            DEPLOYMENT SUCCESSFUL
            ============================================
            Application deployed successfully.
            Docker image created and scanned.
            Image transferred to Application EC2.
            Docker Compose deployment completed.
            Health check passed.
            ============================================
            '''
        }
    }
}
