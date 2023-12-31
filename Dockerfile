FROM oven/bun:latest

WORKDIR /app
COPY . /app

RUN bun install
RUN bun run build

EXPOSE 8080

CMD [ "bun", "run", "start" ]
