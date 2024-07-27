# PodPulse
`PodPulse` is a web-based application for user-friendly access and documentation of Kubernetes Container/Pod restart information. It allows for storage on our secure cloud-hosted SQL database. 

The goal of `PodPulse` was to take away as many tedious command-line interface interactions as possible when needing to access and view users' Kubernetes restart logs. 

`PodPulse` requires no installation, and syncs up with the pods and containers in your added namespaces automatically through an API call to the Kubernetes client-node (no need for pesky service account authorizations that leave users vulnerable to external threats). With an added feature to clear logs and add user info on specific logs to create a single nexus of information about relevant restart times, as well as an input field for if the restart was initiated by an engineer (say for a scheduled update/maintenance restart for node re-scheduling).

# Instructions
Clone frontend repo as well before getting started: [https://github.com/oslabs-beta/PodPulse-Backend](https://github.com/oslabs-beta/PodPulse)
## Usage Guidelines
This app will only function with namespaces that exist
# Documentation
# Contribution Guidelines
# Feature Guide
| Feature                                                                               | Status    |
|---------------------------------------------------------------------------------------|-----------|
| Create Cloud-hosted Kubernetes Implementation                                         | 🙏🏻        |
| Create an organization login that can share container info across user accounts       | 🙏🏻        |
| Implement restart container button that pulls userName from cookie and logs it        | 🙏🏻        |
| Create configuration for non-Oracle db connections                                    | 🙏🏻        |
| ClearLogs should clear logs from the front end                                        | ⏳         |
| Pod Dashboard "container" # updates for multi-container pods                          | ⏳         |
| Connects to Local Clusters                                                            | ✅        |
| Pulls restart logs from client-node api                                               | ✅        |
| Watches for changes to restart logs from api                                          | ✅        |
| JWT and Cookies for secure session storage                                            | ✅        |


- ✅ = Ready to use
- ⏳ = In progress
- 🙏🏻 = Looking for contributors
## Preferred Workflow
Please fork to a new branch for specific features, and pull to the `dev` branch when the feature branch is running as intended.
