# PodPulse
`PodPulse` is a web-based application for user-friendly access and documentation of Kubernetes Container/Pod restart information. It allows for storage on our secure cloud-hosted SQL database. 

The goal of `PodPulse` was to take away as many tedious command-line interface interactions as possible when needing to access and view users' Kubernetes restart logs. 

`PodPulse` requires no installation, and syncs up with the pods and containers in your added namespaces automatically through an API call to the Kubernetes client-node (no need for pesky service account authorizations that leave users vulnerable to external threats). With an added feature to clear logs and add user info on specific logs to create a single nexus of information about relevant restart times, as well as an input field for if the restart was initiated by an engineer (say for a scheduled update/maintenance restart for node re-scheduling).

# Instructions
Clone frontend repo before starting backend: [https://github.com/oslabs-beta/PodPulse-Backend](https://github.com/oslabs-beta/PodPulse)
## Usage Guidelines
This app will only function with namespaces that exist
# Documentation
# Contribution Guidelines
## Preferred Workflow
Please fork to a new branch for specific features, and pull to the `dev` branch when the feature branch is running as intended.
