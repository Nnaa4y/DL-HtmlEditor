# this file is only for building the project
if [[ $(command -v tsc) ]]; then
  cd ./ts || return # change directory to the typescript folder (where tsconfig.json is)
  tsc               # build
  cd ..             # go back to the normal directory
else
  echo "[$0]: typescript not installed"
fi