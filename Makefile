APP=otthonzona
ENVIRONMENT=stg

# GCloud-specifikus célok
gcloud-docker-init:
	gcloud auth configure-docker

gcloud-docker-build:
	docker build -t gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) .

gcloud-docker-push:
	docker push gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT)

gcloud-run-deploy:
	gcloud run deploy $(APP)-$(ENVIRONMENT) \
	--region europe-west1 \
	--image gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) \
	--port 80 \
	--project $(GCP_PROJECT_ID) \
	--max-instances 1 \
	--platform managed \
	--labels enviroment=$(ENVIRONMENT) \
	--allow-unauthenticated

