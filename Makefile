# Some stuff borrowed from the Makefile in progrium/dokku

.PHONY: all install dependencies docker aufs stack test

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

stack:
	@docker images | grep ruudud/nodejs || docker build -t ruudud/nodejs dockers/nodejs/.

test: stack
	@docker build -t ruudud/caspertest .


