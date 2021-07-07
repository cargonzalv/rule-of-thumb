# rule-of-thumb
Zemoga Front end dev challenge

Initialized with starter template from [Learn Next.js](https://nextjs.org/learn).

## Comandos Docker

zemoga-fed-319108

docker build -t gcr.io/zemoga-fed-319108/ruleofthumb:v1 .

docker run --rm -p 3000:3000 gcr.io/zemoga-fed-319108/ruleofthumb:v1

gcloud docker -- push gcr.io/zemoga-fed-319108/nextapollo:v1

gcloud container clusters create next-cluster --num-nodes=3

gcloud container clusters list

kubectl run ruleofthumb --image=gcr.io/zemoga-fed-319108/ruleofthumb:v1 --port 3000

kubectl get pods

kubectl expose deployment ruleofthumb --type=LoadBalancer --port 3000

kubectl get services 
