#!/bin/sh

if [ -z $SSH_KEY ]; then
  ssh "$@"
else
  ssh -i "$SSH_KEY" "$@"
fi
