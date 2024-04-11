1) navigate into the app directory
2) Run the following command
	docker compose up -d
3) In  a browser, navigate to [localhost:3001](http://localhost:3001/)
4) Run json-server from inside the client directory ```npx json-server --watch data/db.json --port 8000```