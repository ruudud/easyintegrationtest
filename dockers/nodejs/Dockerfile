FROM ubuntu:quantal
MAINTAINER Pål Ruud <ruudud@gmail.com>

ENV DEBIAN_FRONTEND noninteractive

RUN echo "force-unsafe-io" > /etc/dpkg/dpkg.cfg.d/02apt-speedup
RUN echo "deb http://archive.ubuntu.com/ubuntu quantal main universe" > /etc/apt/sources.list

RUN apt-get -qq update
RUN apt-get -qqy install software-properties-common

# PhantomJS and CasperJS dependencies
RUN apt-get -qqy install python libfontconfig1-dev

# Install NodeJS
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get -qq update
RUN apt-get -qqy install nodejs

# Install Grunt
RUN npm install -g grunt-cli

