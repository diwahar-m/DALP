#!/bin/bash
COMMAND=""
DEV_ENV=true
case "$1" in
    start|up)
        COMMAND="up -d"
        ;;
    stop|down)
        COMMAND="down"
        ;;
    build)
        COMMAND="build"
        ;;
    *)
        COMMAND=$1
        ;;
esac

COMPOSE_ARGS="-f docker-compose.yml"
if [[ $DEV_ENV == true ]]; then
    COMPOSE_ARGS+=" -f docker-compose.dev.yml"
fi

docker compose $COMPOSE_ARGS $COMMAND