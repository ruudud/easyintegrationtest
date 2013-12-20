# Docker install borrowed from the Makefile in http://github.com/progrium/dokku

.PHONY: all install dependencies docker aufs nodestack gruntstack test

all:
	# Run `make install` to install stuff

install: dependencies test

dependencies: docker

docker: aufs
	echo deb http://get.docker.io/ubuntu docker main > /etc/apt/sources.list.d/docker.list
	apt-get update
	apt-get install -y lxc-docker

aufs:
	lsmod | grep aufs || modprobe aufs || apt-get install -y linux-image-extra-`uname -r`

nodestack:
	@docker images | grep ruudud/nodejs || docker build -t ruudud/nodejs dockers/nodejs/.

gruntstack: nodestack
	@docker images | grep ruudud/caspertest || docker build -t ruudud/grunt .

test: gruntstack
	@docker run ruudud/grunt

