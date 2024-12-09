FROM golang:1.23.4-alpine

WORKDIR /go/src

COPY . /go/src/

RUN go build -o /go/bin foo

CMD ["/go/bin/foo"]
