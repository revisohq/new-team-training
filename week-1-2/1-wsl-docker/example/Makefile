SHELL=/bin/bash


help:
	@echo ""
	@echo "Project's Makefile"
	@echo "------------------"
	@echo ""
	@echo "# Global API"
	@echo "make setup                        Installs all the needed dependencies inside Docker containers"
	@echo "make start                        Starts the app's services"
	@echo "make stop                         Stops the project"
	@echo "make restart"
	@echo "make boot"
	@echo ""
	@echo ""


###
### Operational Tasks
### =================
###

setup:
	docker-compose pull

start:
	docker-compose up -d frontend
	docker-compose logs -f frontend

stop:
	docker-compose down

restart: stop start

boot: setup start