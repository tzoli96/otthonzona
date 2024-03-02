APP=otthonzona
ENVIRONMENT=stg
GCP_PROJECT_ID=otthonzona-415409

gcloud-docker-init:
	gcloud auth configure-docker

gcloud-docker-build:
	docker build --no-cache -t gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) .

gcloud-docker-push:
	docker push gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT)

gcloud-run-deploy:
	gcloud compute instances update-container $(APP)-$(ENVIRONMENT) \
	--container-image gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) \
    --zone europe-west3-b