#!/usr/bin/env groovy

node {
    dir("new master") {
        checkout scm
        
        stage("Build") {
            sh("""#!/bin/bash -x
            bin/build
            """)
        }
        if (env.BRANCH_NAME == "master") {
            stage("Publish Site") {
                sh('''#!/bin/bash -x
                bin/publish
                ''')
            }
        } else {
            print("Not on master. not publishing")
        }
        
        archiveArtifacts artifacts: '_site/**',
            fingerprint: true
        
    }
}
