.PHONY: install dev lint lint-fix test build up down logs clean

install: ## Install root + client + server dependencies
	pnpm install
	pnpm --dir client install
	pnpm --dir server install

dev: ## Run client + server natively, in parallel
	pnpm --dir client run dev

lint: ## Lint client + server
	pnpm run lint

lint-fix: ## Lint and auto-fix client + server
	pnpm run lint:fix

test: ## Run the client test suite
	pnpm --dir client run test

build: ## Build client + server
	pnpm --dir client run build
	pnpm --dir server run build

up: ## Start the full stack via Docker Compose
	docker compose up

down: ## Stop and remove Docker Compose containers
	docker compose down

logs: ## Tail Docker Compose logs
	docker compose logs -f

clean: ## Remove node_modules and build output from both workspaces
	rm -rf node_modules client/node_modules client/dist server/node_modules server/dist
