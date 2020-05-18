[![License badge](https://img.shields.io/badge/license-Apache2-orange.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Documentation Status](https://readthedocs.org/projects/openviduio-docs/badge/?version=stable)](https://docs.openvidu.io/en/stable/?badge=stable)
[![Docker badge](https://img.shields.io/docker/pulls/fiware/orion.svg)](https://hub.docker.com/r/openvidu/openvidu-call/)
[![Support badge](https://img.shields.io/badge/support-sof-yellowgreen.svg)](https://openvidu.discourse.group/)

[![][OpenViduLogo]](http://openvidu.io)

openvidu-call
===

Visit [openvidu.io/demos](http://openvidu.io/demos#3)

[OpenViduLogo]: https://secure.gravatar.com/avatar/5daba1d43042f2e4e85849733c8e5702?s=120



git clone https://gitlab.istic.univ-rennes1.fr/18013195/ent-duo-coding.git


le lien de openvidu https://docs.openvidu.io/en/2.14.0/demos/openvidu-call/

3) Execute OpenVidu platform

docker run -p 4443:4443 --rm -e OPENVIDU_SECRET=MY_SECRET openvidu/openvidu-server-kms:2.14.0

4) Install NPM dependencies of NodeJS backend:

npm install --prefix openvidu-call-back

5) Start OpenVidu Call backend. To configure this command you can check the section below.

npm run start --prefix openvidu-call-back

6) Install NPM dependencies of Angular frontend. Open another terminal to run the following command:

npm install --prefix openvidu-call-front

7) Convergence 

docker run -p "8000:80" --name convergence convergencelabs/convergence-omnibus

8) Finally, start OpenVidu Call frontend

cd openvidu-call-front
    
npx ng serve --open


