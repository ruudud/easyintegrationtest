FROM ruudud/nodejs
MAINTAINER Pål Ruud <ruudud@gmail.com>

RUN mkdir /app
ADD . /app

RUN npm install /app

WORKDIR /app
CMD ["echo", "yeay"]
#CMD ["/usr/bin/grunt", "help"]
