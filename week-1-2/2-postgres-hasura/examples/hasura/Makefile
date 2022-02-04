SHELL=/bin/bash

setup:
	docker-compose pull

start-postgres:
	docker-compose up -d adminer

start-hasura:
	docker-compose up -d hasura

stop:
	docker-compose down

restart: stop start

boot: setup start