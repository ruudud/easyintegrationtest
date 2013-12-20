FROM ruudud/nodejs
MAINTAINER Pål Ruud <ruudud@gmail.com>

RUN mkdir /app
ADD . /app

WORKDIR /app
RUN npm install .

# Allows grunt arguments to be overridden:
# `docker run ruudud/grunt server` will pass "server" to grunt instead of test.
CMD ["test"]
ENTRYPOINT ["/usr/bin/grunt"]
