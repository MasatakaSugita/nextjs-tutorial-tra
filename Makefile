up:
	docker-compose up -d --build
	docker-compose exec web yarn dev

down:
	docker-compose down

dev:
	docker-compose exec web yarn
	docker-compose exec web yarn dev