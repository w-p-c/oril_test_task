#!/bin/bash

if [ "$NODE_ENV" == "production" ] || [ "$NODE_ENV" == "non-production" ]; then
    npm start
else
    echo "Error: unexpected NODE_ENV value"
    exit 1
fi
