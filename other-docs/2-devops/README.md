# Week 1 - DevOps

## Questions first

- How do you deploy your software? Is it on-premise?
- Do you already know Gitlab?

## Devops

DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market.

https://aws.amazon.com/devops/what-is-devops/

https://www.redhat.com/en/topics/devops

## Gitlab

GitHub + DevOps

https://about.gitlab.com/

## CapRover

How to setup a caprover server: https://github.com/revisohq/developer-handbook/tree/master/how-to/how-to-setup-caprover

## Gitlab CD for CapRover deploy

The most important file we need to create to setup a CI/CD pipeline: .gitlab-ci.yml

https://docs.gitlab.com/14.6/ee/ci/yaml/gitlab_ci_yaml.html

https://docs.gitlab.com/ee/ci/docker/using_kaniko.html

Examples: [here](./examples/gitlab-ci-example.yml) or [here](https://biosphere.teamsystem.com/reviso/services/ts-analytics-integration/-/blob/development/.gitlab-ci.yml)

# Exercises

- Clone the app from the `./exercises/app` folder to a GitLab repository and deploy it on CapRover
